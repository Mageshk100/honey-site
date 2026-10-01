# 🍯 Honey E-Commerce Website

A modern, responsive, and user-friendly e-commerce website developed as a **freelance project in collaboration with a college senior**. The platform offers a seamless online shopping experience with product browsing, weight-based variants, shopping cart management, shipping calculations, and checkout functionality.

🌐 **Website:** https://www.madhurumhoney.com/

---

## 📌 Project Overview

* **Project Name:** Honey E-Commerce Website
* **Project Type:** Freelance Project
* **Role:** Frontend Development
* **Collaboration:** College Senior
* **Technologies:** React.js, Vite, Tailwind CSS, React Router, Lucide React

---

## 🌟 Key Features

### 🏠 1. Home Page

* Responsive navigation bar with product search and cart indicator.
* Hero section highlighting honey products.
* Featured products and product categories.
* Brand story and customer testimonials.
* Newsletter subscription section.
* Contact information and footer navigation.

### 🛍️ 2. Shop & Product Details

* Responsive product grid with search, filtering, and sorting.
* Product details with image galleries and descriptions.
* Weight-based product variants with dynamic pricing.
* Quantity selector and stock availability indicator.
* Related product recommendations.
* Add to Cart and Buy Now functionality.

### 🛒 3. Shopping Cart

* Add, remove, and update product quantities.
* Automatic subtotal and shipping calculations.
* Coupon code application and discount calculations.
* Free shipping eligibility indicator.
* Persistent cart data using localStorage.

### 💳 4. Checkout & Order Management

* Customer details and delivery address validation.
* Shipping charges calculated according to order value and destination.
* Cash on Delivery (COD) order placement.
* Order confirmation page with order details.
* Order reference ID generation.
* Printable invoice and WhatsApp order enquiry.

### 📱 5. Additional Features

* About Us and Contact pages.
* Searchable FAQ section.
* Shipping and delivery policy.
* Returns and refunds policy.
* Privacy policy and terms and conditions.
* Custom 404 error page.
* Responsive layouts for desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

| Technology      | Purpose                              |
| --------------- | ------------------------------------ |
| React.js        | Component-based UI development       |
| Vite            | Development server and build tooling |
| Tailwind CSS    | Responsive styling                   |
| React Router    | Client-side navigation               |
| Lucide React    | Icons and interface elements         |
| canvas-confetti | Order confirmation animation         |
| localStorage    | Cart and order data persistence      |

---

## 💻 Getting Started

### Prerequisites

Ensure that Node.js (v18 or higher) and npm are installed.

Check the installed versions:

```bash
node -v
npm -v
```

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd honey-ecommerce
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open the local development URL displayed in your terminal, usually:

```text
http://localhost:5173
```

### 4. Build for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist/` directory.

### 5. Preview the Production Build

```bash
npm run preview
```

---

## 📂 Project Structure

```text
honey-ecommerce/
├── public/
│   └── assets/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── products.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── OrderConfirmation.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── FAQ.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

*Note: The structure represents the intended organization; adjust it to match the actual project files.*

---

## 🚀 Project Highlights

* Collaborated with a college senior to develop a client-focused freelance e-commerce project.
* Built a responsive shopping interface using reusable React components.
* Implemented product search, filtering, sorting, and weight-based pricing.
* Developed cart management with shipping and discount calculations.
* Created a checkout workflow with form validation and Cash on Delivery support.
* Implemented persistent cart functionality using localStorage.
* Organized product data and application logic for future backend integration.

---

## 🔮 Future Enhancements

* Backend integration using Node.js and Express.js.
* Database integration using MongoDB or PostgreSQL.
* Admin dashboard for product, inventory, and order management.
* Secure online payment gateway integration.
* User authentication and account management.
* Order tracking and automated order notifications.
* Email notifications for order confirmation and shipping updates.

---

## 👨‍💻 Contributors

* **Magesh K** — Frontend Development
* **College Senior** — Project Collaboration

---

## 📄 License & Attribution

Developed as a freelance project in collaboration with a college senior. All brand assets, product images, and business information remain the property of their respective owners and should be used with the applicable permissions.
