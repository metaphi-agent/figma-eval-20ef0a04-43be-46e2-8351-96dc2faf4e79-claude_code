# MegaMart - Ecommerce Website

A production-ready ecommerce landing page built from Figma design using React and Tailwind CSS v4.

## 🎨 Design Source

- **Figma File**: [Ecommerce Website Design (Community)](https://www.figma.com/design/dAJyqQv3Wn6ZnsGYLJNBEd/Ecommerce-Website-Design--Community-)
- **Design System**: Custom color tokens and component styles extracted from Figma

## ✨ Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **Interactive Components**: Carousel navigation, hover states, and smooth transitions
- **Product Showcase**: Multiple product sections with discount badges and pricing
- **Category Navigation**: Quick access to product categories
- **Brand Highlights**: Featured electronics brands section
- **Optimized Performance**: Lazy loading for images, clean CSS with Tailwind v4

## 🏗️ Architecture

### Components Structure

```
src/
├── components/
│   ├── ui/
│   │   └── Button.tsx          # Reusable button component
│   └── blocks/
│       ├── TopBar.tsx           # Location, tracking, offers bar
│       ├── Header.tsx           # Logo, search, navigation, cart
│       ├── HeroSection.tsx      # Carousel banner with smart wearable promo
│       ├── SmartphonesSection.tsx  # Featured smartphone deals
│       ├── CategoriesSection.tsx   # Top categories with circular icons
│       ├── BrandsSection.tsx       # Electronics brands showcase
│       ├── EssentialsSection.tsx   # Daily essentials products
│       └── Footer.tsx           # Footer with links and app downloads
├── App.tsx                      # Main app component
└── App.css                      # Tailwind v4 theme configuration
```

### Design Tokens

All colors, spacing, and typography are defined in `App.css` using Tailwind v4's `@theme` directive:

- **Primary Color**: `#00A8CC` (Cyan)
- **Secondary Color**: `#2C3E5C` (Navy)
- **Typography**: Inter font family
- **Spacing Scale**: From 0.25rem to 3rem

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Build Output

The production build creates optimized static files in the `dist/` directory:

- Minified JavaScript bundle
- Optimized CSS with Tailwind
- Static HTML with relative paths for flexible deployment

## 🎯 Key Sections

### 1. Top Bar
- Location selector (Deliver to zipcode)
- Order tracking link
- All offers link

### 2. Header
- MegaMart logo
- Search bar for products
- Category navigation (Groceries, Premium Fruits, etc.)
- User account and cart

### 3. Hero Section
- Carousel with 6 slides
- Smart wearable promotion (up to 80% off)
- Navigation arrows and indicators

### 4. Smartphones Section
- 5 featured smartphone deals
- Discount badges and savings indicators
- Original and sale prices

### 5. Categories Section
- 7 top categories with icons
- Mobile, Cosmetics, Electronics, Furniture, Watches, Decor, Accessories

### 6. Electronics Brands
- iPhone, Realme, Xiaomi brand cards
- Brand-specific promotions
- Carousel navigation

### 7. Daily Essentials
- 6 product categories
- Daily Essentials, Vegetables, Fruits, Strawberry, Mango, Cherry
- Up to 50% off promotions

### 8. Footer
- Contact information (WhatsApp, Phone)
- App download links (App Store, Google Play)
- Popular categories
- Customer service links
- Copyright information

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#00A8CC` | Buttons, links, accents |
| Secondary | `#2C3E5C` | Hero background, text |
| Gray 100 | `#F5F5F5` | Backgrounds |
| Gray 200 | `#EAEAEA` | Borders, dividers |
| Gray 600 | `#666666` | Secondary text |
| Gray 900 | `#1A1A1A` | Primary text |

## 🔧 Technology Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Icons**: SVG icons (custom implementation)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (2 columns for products)
- **Tablet**: 768px - 1024px (3 columns)
- **Desktop**: > 1024px (5-7 columns depending on section)

## ⚡ Performance Optimizations

- Lazy loading for below-the-fold images
- Optimized SVG icons
- CSS purging in production
- Minified and tree-shaken JavaScript
- Relative asset paths for flexible deployment

## 🌐 Deployment

This project is configured with `base: './'` in Vite for deployment to any hosting platform:

- GitHub Pages
- Netlify
- Vercel
- Google Cloud Storage
- AWS S3
- Any static hosting service

## 📄 License

This is a demonstration project built from a community Figma design.

## 🤝 Contributing

This project was generated from Figma design. To make changes:

1. Modify components in `src/components/`
2. Update design tokens in `src/App.css`
3. Test locally with `npm run dev`
4. Build and verify with `npm run build && npm run preview`

---

Built with ❤️ using Claude Code - Converting Figma designs to production React code.
