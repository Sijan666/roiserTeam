<div align="center">

<img src="./src/assets/logo.png" alt="Roiser Logo" width="120" />

# 🛍️ Roiser — Fashion eCommerce Store

**A modern, full-featured fashion eCommerce storefront built with React 19 & Vite 7**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-roiser--team.vercel.app-brightgreen?style=for-the-badge&logo=vercel)](https://roiser-team.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![React Router](https://img.shields.io/badge/React%20Router-v7-CA4245?style=for-the-badge&logo=reactrouter)](https://reactrouter.com)

</div>

---

## 📸 Preview

| Home | Shop | Product Details |
|------|------|----------------|
| Hero banner, featured products, deals | Filter, sort, grid/list view | Gallery, variants, reviews |

| Cart & Checkout | Order Success | Account Dashboard |
|------|------|----------------|
| Coupon codes, shipping calculator | Full receipt with delivery info | Order history, profile |

---

## ✨ Features

### 🛒 Shopping Experience
- **Dynamic product catalog** fetched from [DummyJSON API](https://dummyjson.com) with fashion-focused categories
- **Advanced filtering & sorting** — by category, size, price range (slider), and "newest" sort (URL-synced)
- **Grid & List view toggle** with animated transitions
- **Product detail page** — image gallery, size/color selectors, quantity stepper, tabs (Description / Reviews / Shipping)
- **Out-of-stock handling** — disabled buttons, "Sold Out" badge, stock count display
- **Related products** carousel on every product page

### 💳 Cart & Checkout
- **Persistent cart** — survives page refresh via `localStorage`, variant-aware (size + color)
- **Cart drawer** — slide-over panel with live item count badge
- **Promo / coupon codes**: `ROISER15`, `WELCOME15` (15% off), `ROISER30` (30% off)
- **Smart shipping**: Free for orders over \$150, Standard \$10, Express \$15
- **Coupon persists** across Cart → Checkout → Order receipt
- **Full checkout form** with real-time validation (email pattern, phone, address fields)
- **Order receipt page** with order ID, itemized list, delivery address, coupon savings

### 👤 Authentication & Account
- **Client-side auth** with PBKDF2 SHA-256 password hashing (no plain-text passwords)
- **Sign up / Log in / Log out**
- **Forgot password** — inline modal dialog flow
- **Protected routes** — `/account`, `/checkout`, `/order-success` require login
- **Account dashboard** — order history, profile card, item thumbnails, "View Receipt" links

### ❤️ Wishlist
- Persistent wishlist via `localStorage`
- Add/remove from product cards, product details, and list view
- Dedicated wishlist page

### 💱 Multi-Currency Support
| Currency | Code | Symbol |
|----------|------|--------|
| US Dollar | USD | \$ |
| Euro | EUR | € |
| British Pound | GBP | £ |
| Canadian Dollar | CAD | C\$ |
| Bangladeshi Taka | BDT | ৳ |

Currency selection persists in `localStorage`; all prices update instantly across the entire site.

### 🔍 SEO & Performance
- `react-helmet-async` for dynamic `<title>` and `<meta>` per page
- OG (Open Graph) cover image for social sharing
- Auto-generated `sitemap.xml` on every build (`scripts/generateSitemap.mjs`)
- `robots.txt` for search engine crawlers
- Smooth scroll powered by [Lenis](https://lenis.darkroom.engineering/)
- Lazy-loaded route components for smaller initial bundle

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [React 19](https://react.dev) |
| Build Tool | [Vite 7](https://vitejs.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite` |
| Routing | [React Router v7](https://reactrouter.com) |
| Forms | [React Hook Form v7](https://react-hook-form.com) |
| Headless UI | [@headlessui/react v2](https://headlessui.com) |
| Icons | [react-icons v5](https://react-icons.github.io/react-icons/) |
| SEO | [react-helmet-async v3](https://github.com/staylor/react-helmet-async) |
| Smooth Scroll | [Lenis v1](https://lenis.darkroom.engineering/) |
| Data Source | [DummyJSON API](https://dummyjson.com/products) |
| Deployment | [Vercel](https://vercel.com) |
| Linting | ESLint 9 (flat config) + react-hooks + react-refresh |

---

## 📁 Project Structure

```
roiserTeam/
├── public/
│   ├── favicon.svg
│   ├── og-cover.svg          # Open Graph social preview image
│   ├── robots.txt
│   └── sitemap.xml           # Auto-generated on build
│
├── scripts/
│   └── generateSitemap.mjs   # Sitemap generator (prebuild hook)
│
├── src/
│   ├── assets/               # Static images (logo, icons, backgrounds)
│   │
│   ├── components/
│   │   ├── common/           # Reusable UI atoms
│   │   │   ├── Badge.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── CatalogStatus.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── Rating.jsx
│   │   │   └── ScrollToTop.jsx
│   │   │
│   │   └── layout/           # App shell & page chrome
│   │       ├── CartDrawer.jsx
│   │       ├── Footer.jsx
│   │       ├── Header.jsx
│   │       ├── HeaderTop.jsx  # Currency selector, auth dropdown
│   │       ├── ProductSeo.jsx
│   │       ├── ProtectedRoute.jsx
│   │       ├── RootLayout.jsx
│   │       ├── RouteSeo.jsx
│   │       └── home/         # Home page section components
│   │           ├── BrandMarquee.jsx
│   │           ├── CategoryCollections.jsx
│   │           ├── CategoryShowcase.jsx
│   │           ├── DealOfTheDay.jsx
│   │           ├── FeaturedProducts.jsx
│   │           ├── HomeHero.jsx
│   │           ├── MidBanner.jsx
│   │           └── SeasonalPromoCards.jsx
│   │
│   ├── context/              # React Context providers
│   │   ├── auth.context.js   ← createContext only
│   │   ├── AuthContext.jsx   ← Provider + PBKDF2 auth logic
│   │   ├── cart.context.js
│   │   ├── CartContext.jsx   ← Cart + coupon state, localStorage
│   │   ├── catalog.context.js
│   │   ├── CatalogContext.jsx ← DummyJSON fetch, caching
│   │   ├── currency.context.js
│   │   ├── CurrencyContext.jsx ← Multi-currency, localStorage
│   │   ├── wishlist.context.js
│   │   └── WishlistContext.jsx
│   │
│   ├── data/
│   │   └── products.js       # Product catalog & fetchProductCatalog()
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── useAuth.js
│   │   ├── useCart.js
│   │   ├── useCatalog.js
│   │   ├── useCurrency.js
│   │   └── useWishlist.js
│   │
│   ├── pages/                # Route-level components
│   │   ├── About.jsx
│   │   ├── Account.jsx       # Protected order history & profile
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx      # Form validation, promo, shipping
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx         # + Forgot password modal
│   │   ├── NotFound.jsx
│   │   ├── OrderSuccess.jsx  # Receipt with coupon & delivery info
│   │   ├── ProductDetails.jsx
│   │   ├── Shop.jsx          # Filter, sort, grid/list
│   │   ├── Signup.jsx
│   │   └── Wishlist.jsx
│   │
│   ├── utils/                # Pure utility functions
│   │   ├── categories.js     # CATEGORY_GROUPS, matchesCategoryFilter()
│   │   ├── currencyRates.js  # Exchange rates, formatCurrencyWithRate()
│   │   ├── formatCurrency.js # Main formatter (delegates to currencyRates)
│   │   ├── seo.js            # Site URL, default meta config
│   │   └── storage.js        # localStorage helper wrappers
│   │
│   ├── App.jsx               # Route definitions (lazy loaded)
│   ├── index.css             # Tailwind v4 base styles
│   └── main.jsx              # App entry — context providers tree
│
├── eslint.config.js
├── index.html
├── package.json
├── vercel.json               # SPA rewrite rule
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Sijan666/roiserTeam.git
cd roiserTeam

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Generate `sitemap.xml` then build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint (must exit 0 with no warnings) |

---

## 🗺️ Pages & Routes

| Route | Page | Auth Required |
|-------|------|:---:|
| `/` | Home | — |
| `/shop` | Product listing + filters | — |
| `/shop/:slug` | Product details | — |
| `/cart` | Shopping cart | — |
| `/wishlist` | Saved items | — |
| `/checkout` | Order form | ✅ |
| `/order-success` | Receipt | ✅ |
| `/account` | Dashboard & orders | ✅ |
| `/login` | Sign in | — |
| `/signup` | Register | — |
| `/about` | About page | — |
| `/contact` | Contact form | — |
| `/faq` | FAQ | — |

---

## 🛍️ Demo Accounts & Promo Codes

### Test Promo Codes

| Code | Discount |
|------|----------|
| `ROISER15` | 15% off |
| `WELCOME15` | 15% off |
| `ROISER30` | 30% off |

### Shipping Rates

| Method | Cost |
|--------|------|
| Standard | \$10.00 |
| Express | \$15.00 |
| Free Shipping | Orders over \$150 |

> **Note:** You can register any email/password on the sign-up page. All data is stored in your browser's `localStorage` — no server or database involved.

---

## 🧩 State Management

All state is managed via React Context API — no external state library required.

```
HelmetProvider
  └── CurrencyProvider       ← exchange rates, selected currency
        └── AuthProvider     ← PBKDF2 auth, user session
              └── CatalogProvider  ← product data from DummyJSON
                    └── CartProvider    ← cart items + coupon
                          └── WishlistProvider
                                └── <App />  ← routes + pages
```

---

## 🔐 Authentication Details

| Feature | Implementation |
|---------|---------------|
| Password storage | PBKDF2 + SHA-256 (via Web Crypto API) |
| Session persistence | `localStorage` (`roiser_user`) |
| Route protection | `<ProtectedRoute />` wrapper component |
| Forgot password | Inline modal — simulated dispatch (no real email) |

---

## 🌐 Deployment

The project is deployed on **Vercel** with a single SPA rewrite rule so React Router handles all navigation:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Deploy your own fork:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Sijan666/roiserTeam)

1. Push your fork to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Set **Framework Preset** to `Vite`
4. Click Deploy — done ✅

---

## 🧪 Code Quality

- **ESLint 9** (flat config) with `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- **react-refresh** rule enforced: component files must not mix component exports with non-component exports
- All files pass `npm run lint` with **zero warnings**
- Production build verified: `vite build` exits 0 with **351 modules** bundled

---

## 📦 Build Output

| Metric | Value |
|--------|-------|
| Total modules | 351 |
| Build tool | Vite 7 (Rollup) |
| CSS | Tailwind v4 (JIT, zero config) |
| Code splitting | Route-level lazy imports |
| Sitemap | Auto-generated pre-build |

---

## 🗂️ Category System

Products are organized into logical groups via `src/utils/categories.js`:

| URL Slug | Included DummyJSON Categories |
|----------|-------------------------------|
| `women` | womens-dresses, tops, womens-shoes, womens-bags, womens-jewellery, womens-watches |
| `men` | mens-shirts, mens-shoes, mens-watches |
| `accessories` | womens-jewellery, womens-bags, mens-watches, womens-watches, sunglasses |
| `footwear` | mens-shoes, womens-shoes |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'feat: add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

Please make sure `npm run lint` passes before submitting a PR.

---

## 📄 License

This project is for **educational and portfolio purposes**.

---

<div align="center">

Made with ❤️ using React 19 + Vite 7 + Tailwind CSS v4

**[🌐 Live Demo](https://roiser-team.vercel.app)** · **[🐛 Report Bug](https://github.com/Sijan666/roiserTeam/issues)** · **[✨ Request Feature](https://github.com/Sijan666/roiserTeam/issues)**

</div>
