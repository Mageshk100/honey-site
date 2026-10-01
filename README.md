# 🍯 Madhurum Honey — Premium E-Commerce Website

A modern, responsive, high-performance e-commerce website for **Madhurum Honey and Bee Farm**, inspired directly by [https://www.madhurumhoney.com/](https://www.madhurumhoney.com/).

Built with **React.js, Vite, Tailwind CSS, React Router, and Lucide React**, featuring authentic brand assets, verified founder history, genuine customer testimonials, and an intuitive shopping experience.

---

## 🐝 Brand Story & Identity

- **Brand:** Madhurum Honey and Bee Farm (மதுரம் இயற்கை தேன் பண்ணை)
- **Founder:** Anath (Trained by Tamil Nadu Agricultural University Apiculture Department)
- **Scale:** 2,000+ Maintained Beehives | 3,000+ kg Pure Monthly Harvest
- **Philosophy:** 100% Raw, Unheated, Unadulterated Honey with Sustainable & Bee-Friendly Harvesting
- **Location:** Sawyerpuram Apiaries & Coimbatore Retail/Distribution Facility, Tamil Nadu, India

### Visual Palette & Styling
- **Honey Amber & Gold:** `#f7941d` (Honey Normal), `#d97706`, `#b45309`, `#fffbeb`
- **Natural Cream & Warm White:** `#FFFDF9`, `#FBF8F1`, `#F6F1E6`
- **Forest Charcoal & Deep Earth:** `#1a1a1a`, `#2C1E11`, `#451a03`
- **Typography:** `Plus Jakarta Sans` & `Playfair Display`

---

## 🌟 Key Features & Pages

### 1. Home Page (`/`)
- **Announcement Bar:** Free shipping threshold (₹2,000+), discount coupons, customer care phone.
- **Sticky Navbar:** Real Madhurum Honey brand logo, instant live product search overlay, WhatsApp quick link, and cart badge counter.
- **Hero Section:** High-resolution product jar presentation, live stats (2,000+ beehives, 3,000 kg harvest, 100% raw), award badges, and CTAs.
- **Brand Benefits:** Only authentic brand claims: 100% unpasteurized raw honey, bee-friendly harvesting, TNAU university training, and free local farmer workshops.
- **Shop by Category:** Organic Wild Honey, Monofloral & Moringa Honey, Infused & Dry Fruits Honey.
- **Featured Bestsellers:** Filterable product cards with live weight variants (250g, 500g, 1kg) and direct Add-to-Cart.
- **Founder Story Preview:** Anath's journey from corporate life to mushroom farming to mastering apiculture following the customer question *"Is this pure and original honey?"*.
- **Accreditations & Certificates:** High-res authentic certificates (`cert1`, `cert2`, `cert3`), Best Organic Honey 2023 award, and lab testing metrics (0% added sugar, &lt;18% moisture, active diastase enzymes).
- **Genuine Testimonials:** Verified reviews from Anita R., Sarah M., Michael P., Lisa K., and Dr. K. Venkataraman.
- **Newsletter:** Seasonal harvest notification alerts with welcome coupon code generation (`MADHURUM10`).
- **Footer:** Complete contact info, social links (Facebook, Instagram, YouTube, WhatsApp), and quick navigation.

### 2. Shop / Products Page (`/shop`)
- Responsive grid with live search query filtering (URL synced).
- Category filtering with active count badges.
- Dynamic price range filters (Under ₹500, ₹500 - ₹1,000, Above ₹1,000).
- Sorting options (Featured, Price: Low to High, Price: High to Low, Highest Rated, Alphabetical).
- Active filter pill chips with one-click reset.
- Loading skeleton states and empty search/filter states.

### 3. Product Details Page (`/product/:slug`)
- Interactive product gallery with thumbnail switching.
- Weight variant selector (100g, 250g, 500g, 1000g) with real-time price updates and discount savings calculation.
- Quantity stepper and stock indicator.
- **Add to Cart** (with feedback state) and **Buy Now** (direct to checkout).
- Tabbed specifications:
  - Health Benefits & Active Enzymes
  - Flora Source, Harvest Region & Taste Profile
  - Ingredients & Nutrition Table (per 100g)
  - Storage & Natural Crystallization Science
  - Safe Packaging & Shipping Guarantee
- Direct WhatsApp beekeeper consultation button.
- Related products recommendations.

### 4. Shopping Cart (`/cart`)
- Itemized breakdown with product images, weight variants, unit prices, and line totals.
- Quantity increase, decrease, and item deletion controls.
- Dynamic shipping calculation based on parcel weight and Indian destination states:
  - **Free Shipping:** All orders ₹2,000 and above nationwide.
  - **Tamil Nadu:** ₹55/kg
  - **South India (Kerala, Karnataka, AP, Telangana):** ₹70/kg
  - **Rest of India:** ₹150/kg
- Free shipping progress bar indicator.
- Coupon code redemption engine:
  - `MADHURUM10`: 10% Off
  - `PUREHONEY`: ₹150 Flat Savings
  - `FIRSTORDER`: 15% Welcome Discount
- Persistent storage via `localStorage`.

### 5. Checkout (`/checkout`)
- Two-step shipping & payment layout.
- Required field validation (Full name, valid email, 10-digit mobile number, full street address, city, state, 6-digit PIN code).
- Real-time destination state shipping recalculation.
- **Cash on Delivery (COD):** Seamless order generation, storage in orders history, cart clearance, and redirection to order confirmation.
- **Online Payment Gateway Notice:** Adheres strictly to the requirement *"Never simulate a successful online payment. Integrate a payment gateway only when real credentials and backend support are configured."* Provides a transparent informative dialog offering Cash on Delivery or Direct WhatsApp UPI transfer.

### 6. Order Confirmation (`/order-confirmation`)
- Celebratory confetti animation (`canvas-confetti`).
- Generated Order Reference ID (e.g. `MDH-849201`).
- Customer shipping address, phone, email, and order notes.
- Itemized purchased products with variant sizes and final totals.
- **Track on WhatsApp** button pre-populated with Order ID.
- **Print Invoice** button formatted for clean receipt printing.

### 7. About Us (`/about`)
- In-depth brand narrative, founder Anath's background in Sawyerpuram, TNAU entomology training, overcoming initial beehive losses.
- Sustainable beekeeping ethics (surplus extraction only, zero chemicals, protecting queen and brood).
- Farmer education program and local community support.
- Real apiary photo gallery (`Homea1` - `Homea5`).

### 8. Contact Page (`/contact`)
- Interactive validated contact inquiry form (Product queries, Wholesale/Bulk orders, Farmer training).
- Authentic Coimbatore business address, customer care phone (`+91 95666 10023`), email (`madhurumindia@gmail.com`).
- Direct WhatsApp chat link.
- Embedded Google Map of Kalapatti Main Road store location.

### 9. Additional Pages
- **Purity & FAQs (`/faq`):** Searchable accordion answering questions about pure honey, crystallization, baby consumption safety, and ethical apiculture.
- **Shipping Policy (`/shipping-policy`)**
- **Returns & Refunds Policy (`/refund-policy`)**
- **Privacy Policy (`/privacy-policy`)**
- **Terms & Conditions (`/terms-conditions`)**
- **404 Not Found (`*`)**

---

## 🛠️ Tech Stack & Dependencies

| Tool | Purpose |
| :--- | :--- |
| **React 18** | UI component architecture |
| **Vite 5** | Lightning-fast build tool and dev server |
| **Tailwind CSS 3** | Utility-first styling & custom honey theme |
| **React Router 6** | Declarative client-side routing |
| **Lucide React** | Accessible modern iconography |
| **canvas-confetti** | Delightful order confirmation celebrations |
| **localStorage** | Client-side cart & order persistence |

---

## 🚀 Running The Project Locally

### 1. Prerequisites
Ensure **Node.js** (v18 or higher) and **npm** are installed:
```bash
node -v
npm -v
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build For Production
```bash
npm run build
```
Generates an optimized production bundle in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```
Serves the production build locally at [http://localhost:4173](http://localhost:4173).

---

## 🗄️ Backend & Admin Architecture Roadmap

The project is structured cleanly to facilitate seamless future connection to a backend (Node.js/Express, Supabase, or MongoDB):

- **Data Separation:** All product records, categories, variants, and policies are isolated in `src/data/` and can be replaced with REST or GraphQL API calls without modifying UI components.
- **Order Service Interface:** `CartContext.jsx` includes a modular order persistence adapter (`saveOrder`, `getOrderById`), ready to be hooked to a backend API endpoint (`POST /api/orders`).
- **Payment Gateway Ready:** The checkout component is pre-wired to load the official Razorpay or Stripe SDK once merchant credentials (`RAZORPAY_KEY_ID`, webhook secrets) are provided in environment variables.

---

## 📄 License & Attribution
- Built with inspiration from **Madhurum Honey and Bee Farm** ([madhurumhoney.com](https://www.madhurumhoney.com/)).
- All photography and trademarked identifiers belong to Madhurum Honey and Bee Farm.
