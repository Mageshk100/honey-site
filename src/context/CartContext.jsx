import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useToast } from './ToastContext';

const CartContext = createContext(null);

const STORAGE_KEY = 'madhurum_cart_v1';
const ORDERS_KEY = 'madhurum_orders_v1';

export const INDIAN_STATES = [
  "Tamil Nadu",
  "Kerala",
  "Karnataka",
  "Andhra Pradesh",
  "Telangana",
  "Maharashtra",
  "Gujarat",
  "Delhi",
  "Punjab",
  "Haryana",
  "Rajasthan",
  "Uttar Pradesh",
  "Madhya Pradesh",
  "West Bengal",
  "Bihar",
  "Odisha",
  "Assam",
  "Goa",
  "Puducherry",
  "Other Indian State/UT"
];

export function CartProvider({ children }) {
  const { addToast } = useToast();

  // Load cart from localStorage
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Could not load cart from storage", e);
      return [];
    }
  });

  const [selectedState, setSelectedState] = useState(() => {
    return localStorage.getItem('madhurum_user_state') || 'Tamil Nadu';
  });

  const [coupon, setCoupon] = useState(() => {
    try {
      const savedCoupon = localStorage.getItem('madhurum_coupon');
      return savedCoupon ? JSON.parse(savedCoupon) : null;
    } catch {
      return null;
    }
  });

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error("Could not save cart to storage", e);
    }
  }, [items]);

  useEffect(() => {
    localStorage.setItem('madhurum_user_state', selectedState);
  }, [selectedState]);

  useEffect(() => {
    if (coupon) {
      localStorage.setItem('madhurum_coupon', JSON.stringify(coupon));
    } else {
      localStorage.removeItem('madhurum_coupon');
    }
  }, [coupon]);

  // Calculations
  const calculations = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalWeightGrams = items.reduce((sum, item) => sum + ((item.weightInGrams || 500) * item.quantity), 0);
    const weightInKg = Math.max(1, Math.ceil(totalWeightGrams / 1000));
    const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

    // Shipping rule matching authentic reference website
    let shippingAmount = 0;
    if (subtotal === 0) {
      shippingAmount = 0;
    } else if (subtotal >= 2000) {
      shippingAmount = 0; // Free shipping over ₹2000
    } else {
      const stateUpper = selectedState.toUpperCase();
      if (stateUpper === "TAMIL NADU") {
        shippingAmount = weightInKg * 55;
      } else if (["KERALA", "ANDHRA PRADESH", "KARNATAKA", "TELANGANA"].includes(stateUpper)) {
        shippingAmount = weightInKg * 70;
      } else {
        shippingAmount = weightInKg * 150;
      }
    }

    // Coupon calculation
    let discountAmount = 0;
    if (coupon && subtotal > 0) {
      if (coupon.type === 'percentage') {
        discountAmount = Math.round((subtotal * coupon.value) / 100);
      } else if (coupon.type === 'fixed') {
        discountAmount = Math.min(subtotal, coupon.value);
      }
    }

    const grandTotal = Math.max(0, subtotal - discountAmount + shippingAmount);
    const freeShippingRemaining = Math.max(0, 2000 - subtotal);

    return {
      subtotal,
      totalWeightGrams,
      weightInKg,
      totalItemsCount,
      shippingAmount,
      isFreeShipping: subtotal >= 2000 && subtotal > 0,
      freeShippingRemaining,
      discountAmount,
      grandTotal
    };
  }, [items, selectedState, coupon]);

  // Actions
  const addToCart = (product, variant, quantity = 1) => {
    if (!product || !variant) return;

    const variantKey = `${product.id}_${variant.size}`;

    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(i => i.variantKey === variantKey);

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        return [
          ...prevItems,
          {
            id: product.id,
            slug: product.slug,
            variantKey,
            name: product.name,
            tamilName: product.tamilName,
            image: product.image,
            categoryName: product.categoryName,
            variantSize: variant.size,
            weightInGrams: variant.weightInGrams,
            price: variant.price,
            originalPrice: variant.originalPrice,
            quantity: quantity
          }
        ];
      }
    });

    addToast(`Added ${quantity}x ${product.name} (${variant.size}) to cart!`, 'success');
  };

  const updateQuantity = (variantKey, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(variantKey);
      return;
    }

    setItems((prevItems) =>
      prevItems.map(item =>
        item.variantKey === variantKey
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (variantKey) => {
    const itemToRemove = items.find(i => i.variantKey === variantKey);
    setItems((prevItems) => prevItems.filter(item => item.variantKey !== variantKey));
    if (itemToRemove) {
      addToast(`Removed ${itemToRemove.name} (${itemToRemove.variantSize}) from cart`, 'info');
    }
  };

  const clearCart = () => {
    setItems([]);
    setCoupon(null);
  };

  const applyCoupon = (code) => {
    const clean = (code || '').trim().toUpperCase();
    if (!clean) return { success: false, message: 'Please enter a valid coupon code.' };

    if (clean === 'MADHURUM10') {
      const c = { code: clean, type: 'percentage', value: 10, label: '10% Off Madhurum Special' };
      setCoupon(c);
      addToast('Coupon MADHURUM10 applied: 10% discount!', 'success');
      return { success: true, message: '10% discount applied!' };
    }

    if (clean === 'PUREHONEY') {
      const c = { code: clean, type: 'fixed', value: 150, label: '₹150 Flat Apiary Savings' };
      setCoupon(c);
      addToast('Coupon PUREHONEY applied: ₹150 flat discount!', 'success');
      return { success: true, message: '₹150 flat discount applied!' };
    }

    if (clean === 'FIRSTORDER') {
      const c = { code: clean, type: 'percentage', value: 15, label: '15% Welcome Discount' };
      setCoupon(c);
      addToast('Coupon FIRSTORDER applied: 15% discount!', 'success');
      return { success: true, message: '15% welcome discount applied!' };
    }

    addToast('Invalid coupon code. Try MADHURUM10 or PUREHONEY', 'error');
    return { success: false, message: 'Invalid or expired coupon code.' };
  };

  const removeCoupon = () => {
    setCoupon(null);
    addToast('Coupon removed', 'info');
  };

  // Order Placement
  const saveOrder = (orderData) => {
    try {
      const existing = JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]');
      const updated = [orderData, ...existing];
      localStorage.setItem(ORDERS_KEY, JSON.stringify(updated));
      return true;
    } catch (e) {
      console.error("Failed to save order", e);
      return false;
    }
  };

  const getOrderById = (orderId) => {
    try {
      const existing = JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]');
      return existing.find(o => o.id === orderId) || null;
    } catch {
      return null;
    }
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        selectedState,
        setSelectedState,
        coupon,
        applyCoupon,
        removeCoupon,
        saveOrder,
        getOrderById,
        ...calculations
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
