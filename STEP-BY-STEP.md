# Kandukuri Shirts — complete file-by-file project

## 1. Exact project creation commands

Use Node.js 22.12 or newer (Node.js 24 works).

```bash
npm create vite@latest kandukuri-shirts -- --template react
cd kandukuri-shirts
code .
```

If prompted to install and start immediately, choose No and follow this guide. If code is not recognised, use VS Code → File → Open Folder.

**Using the finished ZIP?** Skip project creation and file copying. Extract the ZIP, open its kandukuri-shirts folder, then run `npm install` and `npm run dev`.

## 2. Folder structure

```text
kandukuri-shirts/
  public/
    favicon.svg
    images/                 (all supplied photos and credits)
  src/
    components/
      Navbar.jsx
      Footer.jsx
      ProductCard.jsx
      ProductDetails.jsx
    pages/
      Home.jsx
      Products.jsx
      Cart.jsx
    data/
      products.js
      shop.js
    App.jsx
    App.css
    main.jsx
  index.html
  package.json
  package-lock.json
  vite.config.js
  .gitignore
  README.md
  LEARN.md
  STEP-BY-STEP.md
```

The only additions to the earlier src structure are ProductDetails.jsx and shop.js. There are still exactly three pages.

## 3. Required package installation

```bash
npm install react@19.3.0 react-dom@19.3.0 react-router-dom@7.18.4
npm install -D vite@8.3.1 @vitejs/plugin-react@6.1.1
```

Replace the starter files with the complete files below. Remove unused starter src/index.css, src/assets/react.svg, public/vite.svg and eslint.config.js if present. Copy public/images from the supplied ZIP. Photographs are binary assets, so they are included as files rather than code snippets. npm generates package-lock.json; the ZIP already contains the tested lockfile.

## 4. Every complete application file

### File 1: package.json

```json
{
  "name": "kandukuri-shirts",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "19.3.0",
    "react-dom": "19.3.0",
    "react-router-dom": "7.18.4"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "6.1.1",
    "vite": "8.3.1"
  },
  "engines": {
    "node": ">=22.12.0"
  }
}
```

### File 2: vite.config.js

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

### File 3: index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Discover everyday men's clothing at Kandukuri Shirts. Explore shirts, T-shirts, jeans, trousers, and jackets."
    />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="theme-color" content="#17191c" />
    <title>Kandukuri Shirts | Everyday Menswear</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### File 4: src/main.jsx

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
```

### File 5: src/data/shop.js

```js
// Confirm these business details before publishing the shop publicly.
const shop = {
  name: 'Kandukuri Shirts',
  subtitle: 'Pavan Enterprises · Tirupati',
  phone: '8639305478',
  whatsappNumber: '918639305478',
  address: '216, Gandhi Road, Tirupati, Andhra Pradesh 517501',
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Kandukuri+Shirts+216+Gandhi+Road+Tirupati',
  hours: 'Please call to confirm today’s opening hours.',
  catalogueNotice:
    'Preview catalogue · Sample prices and options. Please confirm availability and final prices with the shop.',
};
export function whatsappLink(message) {
  return `https://wa.me/${shop.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
export default shop;
```

### File 6: src/data/products.js

```js
// Reference catalogue. Prices and options are illustrative until confirmed by the shop.
const products = [
  {
    id: 1,
    code: 'KS-001',
    name: 'Uathayam White Shirt',
    category: 'Shirts',
    brand: 'Uathayam',
    price: 1299,
    image: '/images/uathayam-white.jpg',
    images: ['/images/uathayam-white.jpg'],
    featured: true,
    isNew: false,
    sizes: ['38', '40', '42', '44'],
    colors: ['As pictured'],
    sleeves: ['Full sleeve', 'Half sleeve'],
    description:
      'Brand collection reference. Ask Kandukuri Shirts to confirm the exact design and available options.',
    fabric: 'Confirm fabric and fit with the shop.',
  },
  {
    id: 2,
    code: 'KS-002',
    name: 'Peaks Checked Casual Shirt',
    category: 'Shirts',
    brand: 'Peaks by Kandukuri',
    price: 1499,
    image: '/images/bold-casuals.jpg',
    images: ['/images/bold-casuals.jpg'],
    featured: false,
    isNew: true,
    sizes: ['38', '40', '42', '44'],
    colors: ['As pictured'],
    sleeves: ['Full sleeve', 'Half sleeve'],
    description:
      'Brand collection reference. Ask Kandukuri Shirts to confirm the exact design and available options.',
    fabric: 'Confirm fabric and fit with the shop.',
  },
  {
    id: 3,
    code: 'KS-003',
    name: 'Peaks Formal Shirt',
    category: 'Shirts',
    brand: 'Peaks by Kandukuri',
    price: 1599,
    image: '/images/smart-formals.jpg',
    images: ['/images/smart-formals.jpg'],
    featured: false,
    isNew: false,
    sizes: ['38', '40', '42', '44'],
    colors: ['As pictured'],
    sleeves: ['Full sleeve', 'Half sleeve'],
    description:
      'Brand collection reference. Ask Kandukuri Shirts to confirm the exact design and available options.',
    fabric: 'Confirm fabric and fit with the shop.',
  },
  {
    id: 4,
    code: 'KS-004',
    name: 'Peaks Everyday Polo',
    category: 'T-Shirts',
    brand: 'Peaks by Kandukuri',
    price: 599,
    image: '/images/t-shirts.jpg',
    images: ['/images/t-shirts.jpg'],
    featured: true,
    isNew: false,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['As pictured'],
    sleeves: ['Polo'],
    description:
      'Brand collection reference. Ask Kandukuri Shirts to confirm the exact design and available options.',
    fabric: 'Confirm fabric and fit with the shop.',
  },
  {
    id: 5,
    code: 'KS-005',
    name: 'Amalfi Teal Formal Shirt',
    category: 'Shirts',
    brand: 'Ariser / Uathayam',
    price: 599,
    image: '/images/uathayam-teal.jpg',
    images: ['/images/uathayam-teal.jpg'],
    featured: false,
    isNew: false,
    sizes: ['38', '40', '42', '44'],
    colors: ['As pictured'],
    sleeves: ['Full sleeve', 'Half sleeve'],
    description:
      'Brand collection reference. Ask Kandukuri Shirts to confirm the exact design and available options.',
    fabric: 'Confirm fabric and fit with the shop.',
  },
  {
    id: 6,
    code: 'KS-006',
    name: 'Peaks Striped Shirt',
    category: 'Shirts',
    brand: 'Peaks by Kandukuri',
    price: 799,
    image: '/images/Stylish-Linen.jpg',
    images: ['/images/Stylish-Linen.jpg'],
    featured: false,
    isNew: true,
    sizes: ['38', '40', '42', '44'],
    colors: ['As pictured'],
    sleeves: ['Full sleeve', 'Half sleeve'],
    description:
      'Brand collection reference. Ask Kandukuri Shirts to confirm the exact design and available options.',
    fabric: 'Confirm fabric and fit with the shop.',
  },
  {
    id: 7,
    code: 'KS-007',
    name: 'Black Denim Jeans',
    category: 'Jeans',
    brand: 'Store selection',
    price: 1899,
    image: '/images/product-07.jpg',
    images: ['/images/product-07.jpg'],
    featured: false,
    isNew: false,
    sizes: ['30', '32', '34', '36'],
    colors: ['As pictured'],
    sleeves: ['As pictured'],
    description:
      'An illustrative catalogue selection. Ask the shop about the exact design, available colours, and current price.',
    fabric: 'Confirm fabric and fit with the shop.',
  },
  {
    id: 8,
    code: 'KS-008',
    name: 'Classic Blue Jeans',
    category: 'Jeans',
    brand: 'Store selection',
    price: 1999,
    image: '/images/product-08.jpg',
    images: ['/images/product-08.jpg'],
    featured: true,
    isNew: false,
    sizes: ['30', '32', '34', '36'],
    colors: ['As pictured'],
    sleeves: ['As pictured'],
    description:
      'An illustrative catalogue selection. Ask the shop about the exact design, available colours, and current price.',
    fabric: 'Confirm fabric and fit with the shop.',
  },
  {
    id: 9,
    code: 'KS-009',
    name: 'Relaxed Black Trousers',
    category: 'Trousers',
    brand: 'Store selection',
    price: 1699,
    image: '/images/product-09.jpg',
    images: ['/images/product-09.jpg'],
    featured: false,
    isNew: false,
    sizes: ['30', '32', '34', '36'],
    colors: ['As pictured'],
    sleeves: ['As pictured'],
    description:
      'An illustrative catalogue selection. Ask the shop about the exact design, available colours, and current price.',
    fabric: 'Confirm fabric and fit with the shop.',
  },
  {
    id: 10,
    code: 'KS-010',
    name: 'Cream Tailored Trousers',
    category: 'Trousers',
    brand: 'Store selection',
    price: 1799,
    image: '/images/product-10.jpg',
    images: ['/images/product-10.jpg'],
    featured: false,
    isNew: true,
    sizes: ['30', '32', '34', '36'],
    colors: ['As pictured'],
    sleeves: ['As pictured'],
    description:
      'An illustrative catalogue selection. Ask the shop about the exact design, available colours, and current price.',
    fabric: 'Confirm fabric and fit with the shop.',
  },
  {
    id: 11,
    code: 'KS-011',
    name: 'Classic Denim Jacket',
    category: 'Jackets',
    brand: 'Store selection',
    price: 2799,
    image: '/images/product-11.jpg',
    images: ['/images/product-11.jpg'],
    featured: true,
    isNew: false,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['As pictured'],
    sleeves: ['As pictured'],
    description:
      'An illustrative catalogue selection. Ask the shop about the exact design, available colours, and current price.',
    fabric: 'Confirm fabric and fit with the shop.',
  },
  {
    id: 12,
    code: 'KS-012',
    name: 'Black Biker Jacket',
    category: 'Jackets',
    brand: 'Store selection',
    price: 2999,
    image: '/images/product-12.jpg',
    images: ['/images/product-12.jpg'],
    featured: false,
    isNew: false,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['As pictured'],
    sleeves: ['As pictured'],
    description:
      'An illustrative catalogue selection. Ask the shop about the exact design, available colours, and current price.',
    fabric: 'Confirm fabric and fit with the shop.',
  },
  {
    id: 13,
    code: 'KS-013',
    name: 'Trident Bed Linen Collection',
    category: 'Bedsheets',
    brand: 'Trident',
    price: 1999,
    image: '/images/trident-bed.jpg',
    images: ['/images/trident-bed.jpg'],
    featured: false,
    isNew: true,
    sizes: ['Single', 'Double', 'King'],
    colors: ['Ask for available colours'],
    sleeves: ['Standard'],
    description:
      'Home-linen collection reference. Confirm design, dimensions, pack contents, and current price with the shop.',
    fabric: 'Confirm material and dimensions with the shop.',
  },
  {
    id: 14,
    code: 'KS-014',
    name: 'Trident Towel Collection',
    category: 'Towels',
    brand: 'Trident',
    price: 599,
    image: '/images/trident-towel.jpg',
    images: ['/images/trident-towel.jpg'],
    featured: false,
    isNew: true,
    sizes: ['Hand towel', 'Bath towel'],
    colors: ['Ask for available colours'],
    sleeves: ['Standard'],
    description:
      'Home-linen collection reference. Confirm design, dimensions, pack contents, and current price with the shop.',
    fabric: 'Confirm material and dimensions with the shop.',
  },
];
export const categories = [
  'Shirts',
  'T-Shirts',
  'Jeans',
  'Trousers',
  'Jackets',
  'Bedsheets',
  'Towels',
];
export const brands = [...new Set(products.map((product) => product.brand))];
export default products;
```

### File 7: src/components/Navbar.jsx

```jsx
import { Link, NavLink } from 'react-router-dom';
function Navbar({ totalItems }) {
  return (
    <header className="site-header">
      <div className="container navbar">
        <Link to="/" className="shop-brand">
          <span className="brand">
            Kandukuri<span> Shirts</span>
          </span>
          <span className="brand-subtitle">PAVAN ENTERPRISES · TIRUPATI</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart" className="cart-link">
            Cart{' '}
            <span className="cart-count" aria-live="polite">
              {totalItems}
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
```

### File 8: src/components/Footer.jsx

```jsx
import { Link } from 'react-router-dom';
import shop, { whatsappLink } from '../data/shop';
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <Link to="/" className="brand">
            Kandukuri<span> Shirts</span>
          </Link>
          <p>{shop.subtitle}</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <a
            href={whatsappLink('Hello Kandukuri Shirts, I have a product enquiry.')}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp ↗
          </a>
        </nav>
        <p className="copyright">© {new Date().getFullYear()} Kandukuri Shirts</p>
      </div>
    </footer>
  );
}
export default Footer;
```

### File 9: src/components/ProductCard.jsx

```jsx
function ProductCard({ product, addToCart, quantity = 0 }) {
  return (
    <article className="product-card">
      <button
        type="button"
        className="product-image-button"
        onClick={() => addToCart(product)}
        aria-label={`View ${product.name}`}
      >
        <img
          className="product-image"
          src={product.image}
          alt={product.name}
          loading="lazy"
          width="600"
          height="750"
        />
        {product.isNew && <span className="product-badge">New to catalogue</span>}
      </button>
      <div className="product-details">
        <p className="product-category">
          {product.brand} · {product.category}
        </p>
        <h3>
          <button
            className="product-title-button"
            type="button"
            onClick={() => addToCart(product)}
          >
            {product.name}
          </button>
        </h3>
        <div className="product-bottom">
          <p className="product-price">
            ₹{product.price.toLocaleString('en-IN')}
            <small>Sample price</small>
          </p>
          <button
            className="button button-small"
            type="button"
            onClick={() => addToCart(product)}
            aria-label={`Choose options for ${product.name}`}
          >
            Add to Cart
          </button>
        </div>
        <p className="cart-feedback">
          {quantity > 0 ? `In your cart: ${quantity}` : 'Choose your size and options'}
        </p>
      </div>
    </article>
  );
}
export default ProductCard;
```

### File 10: src/components/ProductDetails.jsx

```jsx
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { whatsappLink } from '../data/shop';

function ProductDetails({ product, addToCart, onClose }) {
  const dialogRef = useRef(null);
  const [size, setSize] = useState('');
  const [color, setColor] = useState(product.colors[0]);
  const [sleeve, setSleeve] = useState(product.sleeves[0]);
  const [image, setImage] = useState(product.image);
  const [message, setMessage] = useState('');
  useEffect(() => {
    const dialog = dialogRef.current;
    const oldOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = oldOverflow;
    };
  }, []);
  const enquiry = `Hello Kandukuri Shirts, I’m interested in ${product.name} (${product.code}). Brand: ${product.brand}. Size: ${size || 'Please help me choose'}. Colour: ${color}. Option: ${sleeve}. Catalogue reference price: ₹${product.price}. Please confirm availability and current price.`;
  function submit(event) {
    event.preventDefault();
    if (!size) {
      setMessage('Please choose a size first.');
      return;
    }
    addToCart(product, { size, color, sleeve });
    setMessage('Added to your cart. Maximum 99 per selection.');
  }
  return (
    <dialog
      ref={dialogRef}
      className="product-dialog"
      aria-labelledby="detail-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        className="dialog-close"
        type="button"
        aria-label="Close product details"
        onClick={onClose}
      >
        ×
      </button>
      <div className="detail-layout">
        <div>
          <a
            href={image}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open larger photo of ${product.name}`}
          >
            <img className="detail-image" src={image} alt={product.name} />
          </a>
          <div className="image-thumbnails">
            {product.images.map((src, index) => (
              <button
                type="button"
                key={src}
                aria-label={`View photo ${index + 1}`}
                aria-pressed={image === src}
                onClick={() => setImage(src)}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
          <p className="small-note">
            Select the main photo to view it larger. Photos are reference looks.
          </p>
        </div>
        <div className="detail-copy">
          <p className="eyebrow">{product.brand}</p>
          <h2 id="detail-title">{product.name}</h2>
          <p className="small-note">Product code: {product.code}</p>
          <p className="detail-price">
            ₹{product.price.toLocaleString('en-IN')} <span>sample price</span>
          </p>
          <p>{product.description}</p>
          <dl className="product-facts">
            <div>
              <dt>Fabric / fit</dt>
              <dd>{product.fabric}</dd>
            </div>
            <div>
              <dt>Care</dt>
              <dd>Follow the garment label; ask the shop for product-specific advice.</dd>
            </div>
          </dl>
          <form onSubmit={submit}>
            <label className="field-label" htmlFor="size">
              {product.category === 'Bedsheets' ? 'Bed size' : 'Size'}
            </label>
            <select
              id="size"
              value={size}
              required
              onChange={(event) => {
                setSize(event.target.value);
                setMessage('');
              }}
            >
              <option value="">Choose a size</option>
              {product.sizes.map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
            <div className="option-grid">
              <label>
                Colour
                <select
                  value={color}
                  onChange={(event) => {
                    setColor(event.target.value);
                    setMessage('');
                  }}
                >
                  {product.colors.map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </label>
              <label>
                {product.category === 'Shirts' ? 'Sleeve' : 'Style'}
                <select
                  value={sleeve}
                  onChange={(event) => {
                    setSleeve(event.target.value);
                    setMessage('');
                  }}
                >
                  {product.sleeves.map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </label>
            </div>
            <p className="small-note">
              Selections are for enquiries; the shop confirms available variants.
            </p>
            <button className="button detail-add" type="submit">
              Add to Cart
            </button>
          </form>
          <p className="detail-status" role="status">
            {message}
          </p>
          <div className="detail-actions">
            <a
              className="text-link"
              href={whatsappLink(enquiry)}
              target="_blank"
              rel="noreferrer"
            >
              Ask on WhatsApp ↗
            </a>
            <Link to="/cart" className="text-link" onClick={onClose}>
              View cart ↗
            </Link>
          </div>
          <details className="size-help">
            <summary>Need help choosing a size?</summary>
            <p>
              Check the size label on an item that fits you well. Sizing differs between
              brands. Send the shop your usual size and preferred fit for the correct
              brand’s measurements before ordering.
            </p>
            <a
              href={whatsappLink(
                `Hello, please share the size chart and fit guidance for ${product.name} (${product.code}).`,
              )}
              target="_blank"
              rel="noreferrer"
            >
              Request this product’s size chart ↗
            </a>
          </details>
        </div>
      </div>
    </dialog>
  );
}
export default ProductDetails;
```

### File 11: src/pages/Home.jsx

```jsx
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products, { categories, brands } from '../data/products';
import shop, { whatsappLink } from '../data/shop';
function Home({ cart, addToCart }) {
  return (
    <>
      <section className="container hero">
        <div className="hero-copy">
          <p className="eyebrow">YOUR NEIGHBOURHOOD STORE · TIRUPATI</p>
          <h1>
            Good clothes.
            <br />
            Closer to home.
          </h1>
          <p className="hero-description">
            Everyday favourites, occasion-ready styles, and a personal touch. Explore
            Kandukuri Shirts.
          </p>
          <Link className="button hero-button" to="/products">
            Explore the collection ↗
          </Link>
          <p className="hero-note">PAVAN ENTERPRISES · GANDHI ROAD</p>
        </div>
        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src="/images/hero.jpg"
            alt="Menswear collection inspiration"
            fetchPriority="high"
          />
          <span className="hero-image-label">THE KANDUKURI SHIRTS EDIT</span>
        </div>
      </section>
      <section className="container store-intro">
        <h2>
          Your style.
          <br />
          Our personal touch.
        </h2>
        <p>
          Welcome to Kandukuri Shirts, Pavan Enterprises, Tirupati. Browse the collection
          here, ask us about your favourite pieces, and visit the shop to find the right
          fit.
        </p>
      </section>
      <section className="container section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPLORE THE LABELS</p>
            <h2>Shop by brand</h2>
          </div>
        </div>
        <div className="brand-grid">
          {brands.map((brand) => (
            <Link
              key={brand}
              className="brand-card"
              to={`/products?brand=${encodeURIComponent(brand)}`}
            >
              <strong>{brand}</strong>
              <span>Explore collection ↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="container section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FEW TO START WITH</p>
            <h2>Featured favourites</h2>
          </div>
          <Link className="text-link" to="/products">
            View all products ↗
          </Link>
        </div>
        <div className="product-grid">
          {products
            .filter((p) => p.featured)
            .slice(0, 4)
            .map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                addToCart={addToCart}
                quantity={cart
                  .filter((i) => i.id === p.id)
                  .reduce((sum, i) => sum + i.quantity, 0)}
              />
            ))}
        </div>
      </section>
      <section className="container section category-section">
        <div className="section-heading">
          <h2>Find what you’re looking for</h2>
        </div>
        <div className="category-grid">
          {categories.map((category) => {
            const p = products.find((p) => p.category === category);
            return (
              p && (
                <Link
                  className="category-card"
                  key={category}
                  to={`/products?category=${encodeURIComponent(category)}`}
                >
                  <img src={p.image} alt="" loading="lazy" />
                  <span>
                    {category}
                    <span>↗</span>
                  </span>
                </Link>
              )
            );
          })}
        </div>
      </section>
      <section className="container shop-highlights">
        <div>
          <p className="eyebrow">SOMETHING FRESH</p>
          <h2>New to the catalogue</h2>
          <p>Explore the latest additions to this collection.</p>
          <Link className="text-link" to="/products?new=true">
            See new additions ↗
          </Link>
        </div>
        <div>
          <p className="eyebrow">MORE REASONS TO VISIT</p>
          <h2>Ask about in-store offers</h2>
          <p>
            Planning a wardrobe refresh or buying for a group? Talk to us about current
            offers and bulk requirements.
          </p>
          <a
            className="text-link"
            href={whatsappLink(
              'Hello Kandukuri Shirts, please share current store offers and information about bulk orders.',
            )}
            target="_blank"
            rel="noreferrer"
          >
            Ask us on WhatsApp ↗
          </a>
        </div>
      </section>
      <section className="container section visit-section" id="visit">
        <div>
          <p className="eyebrow">COME SAY HELLO</p>
          <h2>Visit Kandukuri Shirts</h2>
          <p>{shop.address}</p>
          <p>{shop.hours}</p>
          <div className="visit-actions">
            <a
              className="button"
              href={shop.directionsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get directions ↗
            </a>
            <a className="button button-outline" href={`tel:+91${shop.phone}`}>
              Call {shop.phone}
            </a>
          </div>
        </div>
        <div className="shop-faq">
          <h3>A little help before you visit</h3>
          <details>
            <summary>How do I check availability?</summary>
            <p>
              Select your preferred options and send a WhatsApp enquiry. We’ll confirm the
              exact item, sizes, and current price.
            </p>
          </details>
          <details>
            <summary>Can I collect from the shop or get delivery?</summary>
            <p>
              Ask the shop to confirm pickup arrangements or delivery options before
              ordering.
            </p>
          </details>
          <details>
            <summary>What is the exchange policy?</summary>
            <p>
              Please confirm exchange conditions and any exclusions with the shop before
              purchase.
            </p>
          </details>
          <details>
            <summary>Can you help with sizing or bulk orders?</summary>
            <p>
              Yes—send an enquiry with the product code, your usual size, or the quantity
              you need. Ask for the specific brand’s size chart.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
export default Home;
```

### File 12: src/pages/Products.jsx

```jsx
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products, { categories, brands } from '../data/products';
function Products({ cart, addToCart }) {
  const [search, setSearch] = useState('');
  const [price, setPrice] = useState('All');
  const [sort, setSort] = useState('featured');
  const [params, setParams] = useSearchParams();
  const category = categories.includes(params.get('category'))
    ? params.get('category')
    : 'All';
  const brand = brands.includes(params.get('brand')) ? params.get('brand') : 'All';
  const newOnly = params.get('new') === 'true';
  function changeParam(name, value) {
    const next = new URLSearchParams(params);
    value === 'All' ? next.delete(name) : next.set(name, value);
    setParams(next);
  }
  function reset() {
    setSearch('');
    setPrice('All');
    setSort('featured');
    setParams({});
  }
  const filtered = products
    .filter((p) => {
      const text = `${p.name} ${p.brand} ${p.code} ${p.category}`.toLowerCase();
      return (
        text.includes(search.trim().toLowerCase()) &&
        (category === 'All' || p.category === category) &&
        (brand === 'All' || p.brand === brand) &&
        (price === 'All' || p.price <= Number(price)) &&
        (!newOnly || p.isNew)
      );
    })
    .sort((a, b) =>
      sort === 'low'
        ? a.price - b.price
        : sort === 'high'
          ? b.price - a.price
          : sort === 'new'
            ? Number(b.isNew) - Number(a.isNew) || b.id - a.id
            : Number(b.featured) - Number(a.featured),
    );
  return (
    <div className="container page-content">
      <header className="page-heading">
        <p className="eyebrow">KANDUKURI SHIRTS · THE COLLECTION</p>
        <h1>Find your everyday favourites.</h1>
        <p>Explore brands, choose your options, and ask us about availability.</p>
      </header>
      <section className="catalog-controls" aria-label="Product filters">
        <div className="search-field">
          <label className="sr-only" htmlFor="search">
            Search products
          </label>
          <input
            id="search"
            type="search"
            placeholder="Search name, brand, or product code…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="category-filters" role="group" aria-label="Category">
          {['All', ...categories].map((c) => (
            <button
              type="button"
              key={c}
              aria-pressed={category === c}
              className={`filter-button ${category === c ? 'selected' : ''}`}
              onClick={() => changeParam('category', c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="filter-selects">
          <label>
            Brand
            <select value={brand} onChange={(e) => changeParam('brand', e.target.value)}>
              {['All', ...brands].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
          <label>
            Price range
            <select value={price} onChange={(e) => setPrice(e.target.value)}>
              <option value="All">All prices</option>
              <option value="1000">Up to ₹1,000</option>
              <option value="2000">Up to ₹2,000</option>
              <option value="3000">Up to ₹3,000</option>
            </select>
          </label>
          <label>
            Sort by
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="featured">Featured first</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
              <option value="new">Newest in catalogue</option>
            </select>
          </label>
        </div>
      </section>
      <div className="results-bar">
        <p aria-live="polite">
          {filtered.length} products{newOnly ? ' · New to catalogue' : ''}
        </p>
        <button className="text-button" type="button" onClick={reset}>
          Clear filters
        </button>
      </div>
      {filtered.length ? (
        <div className="product-grid">
          {filtered.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              addToCart={addToCart}
              quantity={cart
                .filter((i) => i.id === p.id)
                .reduce((sum, i) => sum + i.quantity, 0)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No products found.</h2>
          <p>Try a different search or clear the filters.</p>
          <button className="button" type="button" onClick={reset}>
            Show all products
          </button>
        </div>
      )}
    </div>
  );
}
export default Products;
```

### File 13: src/pages/Cart.jsx

```jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { whatsappLink } from '../data/shop';
function Cart({
  cart,
  totalItems,
  totalPrice,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  const [note, setNote] = useState('');
  const lines = cart.map(
    (i, index) =>
      `${index + 1}. ${i.name} (${i.code}) — ${i.brand}\nSize: ${i.size}, Colour: ${i.color}, Option: ${i.sleeve}\nQuantity: ${i.quantity}; reference subtotal: ₹${i.price * i.quantity}`,
  );
  const message = `Hello Kandukuri Shirts, please check these items for me:\n\n${lines.join('\n\n')}\n\nTotal items: ${totalItems}\nCatalogue reference total: ₹${totalPrice}\n${note.trim() ? `Note: ${note.trim()}\n` : ''}Please confirm stock, sizes, current prices, and pickup/delivery options. This is an enquiry, not a confirmed order.`;
  return (
    <div className="container page-content">
      <header className="page-heading cart-heading">
        <div>
          <p className="eyebrow">YOUR SELECTION</p>
          <h1>Your cart</h1>
          <p aria-live="polite">
            {totalItems} {totalItems === 1 ? 'item' : 'items'} · saved in this browser
          </p>
        </div>
        <Link className="text-link" to="/products">
          Continue shopping ↗
        </Link>
      </header>
      {!cart.length ? (
        <div className="empty-state">
          <h2>Your next favourite is waiting.</h2>
          <p>Your cart is empty.</p>
          <Link className="button" to="/products">
            Explore products
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <section aria-label="Cart items">
            <div className="cart-table-heading">
              <span>PRODUCT</span>
              <span>QUANTITY</span>
              <span>SUBTOTAL</span>
            </div>
            {cart.map((i) => (
              <article className="cart-item" key={i.key}>
                <div className="cart-product">
                  <img src={i.image} alt={i.name} width="120" height="150" />
                  <div>
                    <p className="product-category">
                      {i.brand} · {i.code}
                    </p>
                    <h2>{i.name}</h2>
                    <p className="small-note">
                      {i.size} / {i.color} / {i.sleeve}
                    </p>
                    <p className="unit-price">₹{i.price.toLocaleString('en-IN')} each</p>
                    <button
                      className="remove-button"
                      type="button"
                      aria-label={`Remove ${i.name} size ${i.size}`}
                      onClick={() => removeFromCart(i.key)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="quantity-control">
                  <button
                    type="button"
                    disabled={i.quantity === 1}
                    aria-label={`Decrease ${i.name} size ${i.size}`}
                    onClick={() => decreaseQuantity(i.key)}
                  >
                    −
                  </button>
                  <span aria-live="polite">{i.quantity}</span>
                  <button
                    type="button"
                    disabled={i.quantity === 99}
                    aria-label={`Increase ${i.name} size ${i.size}`}
                    onClick={() => increaseQuantity(i.key)}
                  >
                    +
                  </button>
                </div>
                <p className="line-total">
                  ₹{(i.price * i.quantity).toLocaleString('en-IN')}
                </p>
              </article>
            ))}
          </section>
          <aside className="cart-summary">
            <p className="eyebrow">LET’S CHECK YOUR PICKS</p>
            <h2>Cart summary</h2>
            <div className="summary-row">
              <span>Total items</span>
              <strong>{totalItems}</strong>
            </div>
            <div className="summary-total" aria-live="polite">
              <span>Reference total</span>
              <strong>₹{totalPrice.toLocaleString('en-IN')}</strong>
            </div>
            <label className="field-label" htmlFor="note">
              Any requests? (optional)
            </label>
            <textarea
              id="note"
              maxLength={300}
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="For example: I prefer a relaxed fit."
            />
            <a
              className="button whatsapp-button"
              href={whatsappLink(message)}
              target="_blank"
              rel="noreferrer"
            >
              Enquire on WhatsApp ↗
            </a>
            <p className="demo-note">
              Opens a draft for you to review and send. Availability and final prices are
              confirmed by the shop. No payment or order is placed here.
            </p>
            <Link className="text-link" to="/products">
              Keep exploring ↗
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
export default Cart;
```

### File 14: src/App.jsx

```jsx
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import products from './data/products';
import shop from './data/shop';
import './App.css';

const CART_KEY = 'kandukuri-cart-v1';

// Restore only valid selections. Prices always come from current product data.
function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    if (!Array.isArray(saved)) return [];
    const restored = [];
    saved.forEach((item) => {
      if (!item || typeof item !== 'object') return;
      const product = products.find((product) => product.id === item.productId);
      if (
        !product ||
        !product.sizes.includes(item.size) ||
        !product.colors.includes(item.color) ||
        !product.sleeves.includes(item.sleeve)
      )
        return;
      if (!Number.isInteger(item.quantity) || item.quantity < 1) return;
      const key = JSON.stringify([product.id, item.size, item.color, item.sleeve]);
      if (restored.some((entry) => entry.key === key)) return;
      restored.push({
        ...product,
        key,
        productId: product.id,
        size: item.size,
        color: item.color,
        sleeve: item.sleeve,
        quantity: Math.min(item.quantity, 99),
      });
    });
    return restored;
  } catch {
    return [];
  }
}

function App() {
  const [cart, setCart] = useState(loadCart);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [storageWarning, setStorageWarning] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      localStorage.setItem(
        CART_KEY,
        JSON.stringify(
          cart.map(({ productId, size, color, sleeve, quantity }) => ({
            productId,
            size,
            color,
            sleeve,
            quantity,
          })),
        ),
      );
      setStorageWarning('');
    } catch {
      setStorageWarning(
        'Your browser cannot save this cart. It will work until this page is closed.',
      );
    }
  }, [cart]);

  useEffect(() => {
    document.title = `Kandukuri Shirts | ${pathname === '/cart' ? 'Cart' : pathname === '/products' ? 'Collection' : 'Tirupati'}`;
    window.scrollTo(0, 0);
    setSelectedProduct(null);
  }, [pathname]);

  function addToCart(product, options) {
    const key = JSON.stringify([product.id, options.size, options.color, options.sleeve]);
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.key === key);
      if (existing)
        return currentCart.map((item) =>
          item.key === key
            ? { ...item, quantity: Math.min(item.quantity + 1, 99) }
            : item,
        );
      return [
        ...currentCart,
        { ...product, ...options, productId: product.id, key, quantity: 1 },
      ];
    });
  }
  function increaseQuantity(key) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.key === key ? { ...item, quantity: Math.min(item.quantity + 1, 99) } : item,
      ),
    );
  }
  function decreaseQuantity(key) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.key === key ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item,
      ),
    );
  }
  function removeFromCart(key) {
    setCart((currentCart) => currentCart.filter((item) => item.key !== key));
  }
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="app">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar totalItems={totalItems} />
      <p className="catalogue-notice">{shop.catalogueNotice}</p>
      {storageWarning && (
        <p className="catalogue-notice" role="status">
          {storageWarning}
        </p>
      )}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home cart={cart} addToCart={setSelectedProduct} />} />
          <Route
            path="/products"
            element={<Products cart={cart} addToCart={setSelectedProduct} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                totalItems={totalItems}
                totalPrice={totalPrice}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      {selectedProduct && (
        <ProductDetails
          key={selectedProduct.id}
          product={selectedProduct}
          addToCart={addToCart}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
export default App;
```

### File 15: src/App.css

```css
/* Shared colours and the page foundation */
:root {
  font-family: Arial, Helvetica, sans-serif;
  color: #17191c;
  background: #ffffff;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  --ink: #17191c;
  --muted: #62676f;
  --line: #e2e5e8;
  --surface: #f3f4f5;
}

* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
}
h1,
h2,
h3,
p {
  margin: 0;
}
h1,
h2,
h3 {
  line-height: 1.15;
}
h1,
h2 {
  letter-spacing: -0.045em;
}
a {
  color: inherit;
  text-decoration: none;
}
button,
input {
  font: inherit;
}
button {
  cursor: pointer;
}
img {
  display: block;
  max-width: 100%;
}
button,
a,
input {
  -webkit-tap-highlight-color: transparent;
}
:focus-visible {
  outline: 3px solid #315bd6;
  outline-offset: 4px;
}
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
}
.container {
  width: min(1184px, calc(100% - 64px));
  margin-inline: auto;
}
.eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  line-height: 1.6;
}
.sr-only,
.skip-link:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
.skip-link:focus {
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 10;
  background: white;
  padding: 12px;
}

/* Buttons and text links */
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  min-height: 48px;
  padding: 12px 22px;
  border: 1px solid var(--ink);
  border-radius: 4px;
  background: var(--ink);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
  transition:
    background 150ms ease,
    color 150ms ease;
}
.button:hover {
  background: #353b43;
}
.button-small {
  min-height: 44px;
  padding: 9px 13px;
}
.button-outline {
  background: transparent;
  color: var(--ink);
}
.button-outline:hover {
  background: var(--ink);
  color: white;
}
.text-link {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  font-size: 0.875rem;
  font-weight: 600;
  min-height: 44px;
}
.text-link:hover,
.footer-links a:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}
.text-button,
.remove-button {
  padding: 0;
  background: none;
  border: 0;
  text-decoration: underline;
  text-underline-offset: 4px;
}
.text-button {
  color: var(--ink);
  font-size: 0.875rem;
  min-height: 44px;
}

/* Navigation */
.site-header {
  border-bottom: 1px solid var(--line);
}
.navbar {
  min-height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.brand {
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.075em;
  line-height: 1.3;
  white-space: nowrap;
}
.brand > span:not(.brand-dot) {
  font-weight: 400;
}
.brand-dot {
  font-weight: 800;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 36px;
  font-size: 0.875rem;
}
.nav-links > a {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
}
.nav-links > a.active {
  color: var(--ink);
  font-weight: 700;
}
.nav-links > a:not(.cart-link).active {
  text-decoration: underline;
  text-underline-offset: 8px;
}
.cart-link svg {
  width: 20px;
  height: 20px;
}
.cart-count {
  min-width: 24px;
  height: 24px;
  padding-inline: 5px;
  border-radius: 50%;
  background: var(--ink);
  color: white;
  display: grid;
  place-items: center;
  font-size: 0.75rem;
  font-weight: 700;
}

/* Home: hero and store introduction */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #eef0f2;
  margin-top: 28px;
}
.hero-copy {
  padding: 60px 48px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.hero h1 {
  font-size: clamp(2.75rem, 5vw, 4.8rem);
  line-height: 1.03;
  margin-top: 24px;
}
.hero-description {
  color: #545b63;
  margin-top: 24px;
  max-width: 360px;
  line-height: 1.7;
}
.hero-button {
  margin-top: 30px;
}
.hero-note {
  margin-top: 48px;
  color: #5b626a;
  letter-spacing: 0.11em;
  font-size: 0.75rem;
}
.hero-image-wrap {
  position: relative;
  min-height: 510px;
  overflow: hidden;
}
.hero-image {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  object-position: center 42%;
}
.hero-image-label {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: white;
  color: var(--ink);
  padding: 7px 11px;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
}
.store-intro {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  align-items: center;
  gap: 80px;
  padding-block: 56px;
  border-bottom: 1px solid var(--line);
}
.store-intro h2 {
  font-size: 2.25rem;
}
.store-intro > p {
  max-width: 560px;
  color: var(--muted);
  line-height: 1.8;
}

/* Home sections and reusable product cards */
.section {
  padding-top: 56px;
}
.section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 28px;
}
.section-heading .eyebrow {
  color: var(--muted);
  margin-bottom: 9px;
}
.section-heading h2 {
  font-size: 2rem;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 32px 24px;
}
.product-card {
  min-width: 0;
}
.product-image-wrap {
  overflow: hidden;
  background: var(--surface);
}
.product-image {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  transition: transform 200ms ease;
}
.product-card:hover .product-image {
  transform: scale(1.025);
}
.product-details {
  padding-top: 14px;
}
.product-category {
  color: var(--muted);
  font-size: 0.8125rem;
  margin-bottom: 6px;
}
.product-details h3 {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
}
.product-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 13px;
}
.product-price {
  font-weight: 700;
  white-space: nowrap;
}
.cart-feedback {
  min-height: 20px;
  margin-top: 7px;
  font-size: 0.75rem;
  color: #35604a;
}
.category-section {
  padding-top: 44px;
  padding-bottom: 72px;
}
.category-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
}
.category-card {
  min-width: 0;
}
.category-card img {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1.12;
  object-fit: cover;
  background: var(--surface);
}
.category-card > span {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding-block: 12px;
  font-size: 0.9375rem;
  font-weight: 600;
}
.category-card:hover > span {
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* Product catalogue */
.page-content {
  padding-block: 56px 80px;
}
.page-heading {
  margin-bottom: 36px;
}
.page-heading .eyebrow {
  color: var(--muted);
  margin-bottom: 12px;
}
.page-heading h1 {
  font-size: clamp(2.2rem, 3.6vw, 3rem);
}
.page-heading p:not(.eyebrow) {
  margin-top: 12px;
  color: var(--muted);
}
.catalog-controls {
  padding-block: 24px;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.search-field {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-inline: 16px;
  border: 1px solid #d2d6dc;
  border-radius: 4px;
  background: white;
  max-width: 420px;
}
.search-field svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--muted);
}
.search-field:focus-within {
  outline: 2px solid #315bd6;
  outline-offset: 2px;
}
.search-field input {
  width: 100%;
  min-width: 0;
  min-height: 48px;
  border: 0;
  outline: 0;
  color: var(--ink);
  background: transparent;
}
.search-field input::placeholder {
  color: #6b7078;
}
.category-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}
.filter-button {
  min-height: 44px;
  padding: 9px 19px;
  border: 1px solid var(--line);
  border-radius: 4px;
  background: white;
  color: #505760;
  font-size: 0.875rem;
}
.filter-button:hover {
  border-color: var(--ink);
}
.filter-button.selected {
  background: var(--ink);
  border-color: var(--ink);
  color: white;
}
.results-bar {
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: var(--muted);
  font-size: 0.875rem;
}
.empty-state {
  padding: 72px 20px;
  text-align: center;
  background: var(--surface);
}
.empty-state .eyebrow {
  margin-bottom: 16px;
  color: var(--muted);
}
.empty-state h2 {
  font-size: 1.8rem;
}
.empty-state > p:not(.eyebrow) {
  margin-top: 14px;
  color: var(--muted);
}
.empty-state .button {
  margin-top: 28px;
}

/* Cart */
.cart-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
}
.empty-cart {
  padding-block: 64px;
}
.empty-cart > svg {
  width: 64px;
  height: 64px;
  margin: 0 auto 24px;
}
.cart-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 40px;
  align-items: start;
}
.cart-table-heading,
.cart-item {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 116px 88px;
  align-items: center;
  gap: 20px;
}
.cart-table-heading {
  padding-bottom: 16px;
  font-size: 0.75rem;
  color: var(--muted);
  letter-spacing: 0.05em;
}
.cart-table-heading span:last-child {
  text-align: right;
}
.cart-item {
  padding-block: 24px;
  border-top: 1px solid var(--line);
}
.cart-product {
  display: flex;
  align-items: center;
  gap: 18px;
  min-width: 0;
}
.cart-product img {
  width: 92px;
  height: 115px;
  object-fit: cover;
  background: var(--surface);
  flex-shrink: 0;
}
.cart-product h2 {
  font-size: 1rem;
  letter-spacing: -0.01em;
  line-height: 1.4;
}
.unit-price {
  font-size: 0.875rem;
  margin-top: 6px;
}
.remove-button {
  color: var(--muted);
  font-size: 0.8125rem;
  min-height: 38px;
}
.remove-button:hover {
  color: #a32727;
}
.quantity-control {
  display: flex;
  align-items: center;
  border: 1px solid #cdd2d8;
  border-radius: 4px;
  width: fit-content;
}
.quantity-control button {
  border: 0;
  background: transparent;
  color: var(--ink);
  width: 38px;
  height: 42px;
  font-size: 1.15rem;
}
.quantity-control button:hover:not(:disabled) {
  background: var(--surface);
}
.quantity-control button:disabled {
  color: #a9afb7;
  cursor: not-allowed;
}
.quantity-control > span {
  min-width: 30px;
  text-align: center;
  font-size: 0.875rem;
  padding-inline: 3px;
}
.line-total {
  text-align: right;
  font-weight: 600;
  font-size: 0.9375rem;
  white-space: nowrap;
}
.cart-summary {
  background: var(--surface);
  padding: 28px;
  border: 1px solid var(--line);
}
.cart-summary .eyebrow {
  color: var(--muted);
  margin-bottom: 10px;
}
.cart-summary h2 {
  font-size: 1.5rem;
  margin-bottom: 28px;
}
.summary-row,
.summary-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.summary-row {
  font-size: 0.9375rem;
}
.summary-total {
  margin-top: 24px;
  padding-top: 22px;
  border-top: 1px solid #d7dbe0;
}
.summary-total strong {
  font-size: 1.5rem;
  letter-spacing: -0.04em;
}
.demo-note {
  margin-top: 24px;
  font-size: 0.8125rem;
  color: var(--muted);
  line-height: 1.6;
}
.cart-summary .button {
  width: 100%;
  margin-top: 20px;
}

/* Footer */
.site-footer {
  border-top: 1px solid var(--line);
  background: #fafafa;
}
.footer-content {
  min-height: 150px;
  padding-block: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.footer-content .brand {
  font-size: 1.4rem;
}
.footer-content p {
  font-size: 0.8125rem;
  color: var(--muted);
  margin-top: 8px;
}
.footer-links {
  display: flex;
  gap: 24px;
  font-size: 0.875rem;
}
.footer-links a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
}
.footer-content .copyright {
  margin: 0;
}

/* Tablet and smaller laptops */
@media (max-width: 1020px) {
  .hero-copy {
    padding: 44px 32px 32px;
  }
  .hero-image-wrap {
    min-height: 460px;
  }
  .hero-note {
    margin-top: 36px;
  }
  .product-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .store-intro {
    gap: 40px;
  }
  .cart-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .cart-summary {
    max-width: 480px;
    width: 100%;
    margin-left: auto;
  }
  .category-grid {
    gap: 12px;
  }
  .footer-content {
    flex-wrap: wrap;
  }
}

/* Phones and small tablets */
@media (max-width: 720px) {
  .container {
    width: calc(100% - 40px);
  }
  .navbar {
    min-height: 76px;
    gap: 12px;
    flex-wrap: wrap;
    padding-block: 14px;
  }
  .brand {
    font-size: 1.4rem;
  }
  .nav-links {
    gap: 20px;
  }
  .hero {
    grid-template-columns: 1fr;
    margin-top: 20px;
  }
  .hero-copy {
    padding: 36px 28px;
  }
  .hero h1 {
    font-size: 3.4rem;
  }
  .hero-description {
    margin-top: 20px;
  }
  .hero-note {
    margin-top: 28px;
  }
  .hero-image-wrap {
    min-height: 360px;
  }
  .hero-image {
    object-position: center 42%;
  }
  .hero-image-label {
    font-size: 0.75rem;
  }
  .store-intro {
    grid-template-columns: 1fr;
    gap: 20px;
    padding-block: 36px;
  }
  .store-intro h2 {
    font-size: 2rem;
  }
  .section {
    padding-top: 40px;
  }
  .section-heading {
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 10px;
  }
  .section-heading h2 {
    font-size: 1.8rem;
  }
  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px 18px;
  }
  .product-bottom {
    flex-wrap: wrap;
  }
  .category-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px 14px;
  }
  .category-section {
    padding-bottom: 48px;
  }
  .page-content {
    padding-block: 36px 48px;
  }
  .page-heading {
    margin-bottom: 28px;
  }
  .search-field {
    max-width: none;
  }
  .category-filters {
    gap: 8px;
  }
  .filter-button {
    padding-inline: 14px;
  }
  .cart-heading {
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 12px;
  }
  .cart-table-heading {
    display: none;
  }
  .cart-item {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .cart-product {
    grid-column: 1 / -1;
  }
  .cart-product img {
    width: 88px;
    height: 110px;
  }
  .cart-summary {
    max-width: none;
    padding: 24px;
  }
  .empty-state {
    padding: 48px 22px;
  }
  .empty-state h2 {
    font-size: 1.6rem;
  }
  .footer-content {
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
  }
}

@media (max-width: 479px) {
  .navbar {
    justify-content: center;
    gap: 6px;
  }
  .navbar .brand {
    width: 100%;
    text-align: center;
  }
  .nav-links {
    gap: 30px;
  }
  .hero h1 {
    font-size: 2.8rem;
  }
  .hero-copy {
    padding: 32px 24px;
  }
  .hero-image-wrap {
    min-height: 320px;
  }
  .desktop-break {
    display: none;
  }
  .product-grid {
    grid-template-columns: 1fr;
  }
  .product-image {
    aspect-ratio: 1 / 1.12;
  }
  .product-bottom {
    flex-wrap: nowrap;
  }
  .category-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .category-card img {
    aspect-ratio: 1 / 1.1;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    transition: none !important;
  }
}

/* Kandukuri shop additions */
:root {
  --ink: #173f35;
}
.brand {
  letter-spacing: -0.045em;
}
.shop-brand {
  display: flex;
  flex-direction: column;
}
.brand-subtitle {
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: #62676f;
  margin-top: 5px;
}
.catalogue-notice {
  padding: 9px 20px;
  background: #f4f1e9;
  color: #625b4c;
  text-align: center;
  font-size: 0.8rem;
}
.hero {
  background: #edf2ef;
}
.hero h1 {
  font-size: clamp(2.6rem, 4.5vw, 4.3rem);
}
.brand-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 16px;
}
.brand-card {
  padding: 25px;
  border: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.brand-card strong {
  font-size: 1.2rem;
}
.brand-card span {
  font-size: 0.8rem;
  color: var(--muted);
}
.product-image-button {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  position: relative;
  overflow: hidden;
  background: var(--surface);
}
.product-title-button {
  padding: 0;
  border: 0;
  background: none;
  text-align: left;
  color: inherit;
  font: inherit;
}
.product-price small {
  display: block;
  font-size: 0.65rem;
  font-weight: 400;
  color: var(--muted);
}
.product-badge {
  position: absolute;
  left: 10px;
  top: 10px;
  background: white;
  padding: 5px 9px;
  font-size: 0.65rem;
}
.filter-selects,
.option-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 20px;
}
.filter-selects label,
.option-grid label,
.field-label {
  font-size: 0.875rem;
  font-weight: 600;
}
select,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  font-size: 1rem;
  padding: 11px;
  border: 1px solid #cdd2d8;
  border-radius: 4px;
  background: white;
  color: var(--ink);
  margin-top: 6px;
}
textarea {
  resize: vertical;
}
.field-label {
  display: block;
  margin-top: 20px;
}
.small-note {
  font-size: 0.8rem;
  color: var(--muted);
  line-height: 1.6;
}
.product-dialog {
  width: min(940px, calc(100% - 32px));
  max-height: 90vh;
  padding: 40px;
  border: 0;
  border-radius: 6px;
  color: #17191c;
}
.product-dialog::backdrop {
  background: #15241caa;
}
.dialog-close {
  position: absolute;
  right: 10px;
  top: 6px;
  border: 0;
  background: white;
  font-size: 1.8rem;
  width: 40px;
  height: 40px;
  z-index: 1;
}
.detail-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
.detail-image {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
}
.image-thumbnails {
  display: flex;
  gap: 8px;
  margin: 12px 0;
}
.image-thumbnails button {
  width: 58px;
  padding: 2px;
  border: 1px solid var(--line);
  background: white;
}
.image-thumbnails button[aria-pressed='true'] {
  border-color: var(--ink);
}
.image-thumbnails img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
}
.detail-copy h2 {
  font-size: 1.8rem;
  margin: 10px 0;
}
.detail-price {
  margin: 16px 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.detail-price span {
  font-size: 0.75rem;
  color: var(--muted);
  font-weight: 400;
}
.product-facts {
  font-size: 0.875rem;
}
.product-facts div {
  margin-top: 12px;
}
.product-facts dt {
  font-weight: 700;
}
.product-facts dd {
  margin: 2px 0;
  color: var(--muted);
}
.option-grid {
  grid-template-columns: 1fr 1fr;
  margin-bottom: 14px;
}
.detail-add {
  width: 100%;
  margin-top: 20px;
}
.detail-status {
  min-height: 26px;
  color: #24583c;
  font-size: 0.875rem;
  margin-top: 6px;
}
.detail-actions {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}
.size-help {
  margin-top: 15px;
  font-size: 0.875rem;
}
summary {
  cursor: pointer;
  font-weight: 600;
  padding: 14px 0;
}
details p {
  color: var(--muted);
  margin-bottom: 12px;
}
.shop-highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.shop-highlights > div {
  padding: 32px;
  background: #edf2ef;
}
.shop-highlights h2 {
  font-size: 1.7rem;
  margin: 12px 0;
}
.shop-highlights p:not(.eyebrow) {
  color: var(--muted);
}
.visit-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 55px;
  padding-bottom: 70px;
}
.visit-section h2 {
  font-size: 2rem;
  margin: 12px 0 18px;
}
.visit-section p {
  margin-top: 10px;
}
.visit-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}
.shop-faq details {
  border-bottom: 1px solid var(--line);
  font-size: 0.9rem;
}
.shop-faq h3 {
  margin-bottom: 12px;
}
@media (max-width: 720px) {
  .filter-selects {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .detail-layout,
  .shop-highlights,
  .visit-section {
    grid-template-columns: 1fr;
  }
  .product-dialog {
    padding: 44px 20px 24px;
  }
  .detail-image {
    max-height: 330px;
    object-fit: contain;
    background: var(--surface);
  }
  .shop-brand {
    align-items: center;
  }
  .brand-subtitle {
    font-size: 0.6rem;
  }
}
```

### File 16: public/favicon.svg

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="#173f35"/><text x="32" y="42" fill="white" font-family="Arial,sans-serif" font-size="30" font-weight="bold" text-anchor="middle">KS</text></svg>
```

### File 17: .gitignore

```text
node_modules/
dist/
.DS_Store
*.local
.sites-runtime/
```

## 5. Run the finished app

```bash
npm install
npm run dev
```

Open the URL Vite prints. To check the production build:

```bash
npm run build
npm run preview
```

Do not double-click index.html to run the app. Do not run create-vite again inside the downloaded project.

## 6. What to customise before public use

- shop.js: confirm business name, phone/WhatsApp, address, directions and opening hours.
- products.js: replace sample prices and enquiry options with your actual stock details; confirm the pictured item matches what you sell.
- Replace reference store-selection photos with your product photos. Brand sources are recorded in public/images/BRAND-CREDITS.json; confirm image reuse rights with your suppliers before public commercial launch.
- The hero is a Peaks collection image. Add your own shop photographs when available.
- The app contains no invented exchange or delivery promises. Confirm these and update the FAQs when ready.
- Keep the preview notice until the catalogue is verified. WhatsApp messages are enquiries, not confirmed orders.

## 7. Learn and demonstrate

Open LEARN.md for the two-day learning order and short lessons. The director demo script and run troubleshooting are in README.md. Start by running the app; then trace main.jsx → App.jsx → one ProductCard.

## Verification

Production build passed. 22 React component/state checks passed. All 15 referenced images decoded successfully. The browser preview was blocked by the environment's URL policy, so rendered desktop/mobile visual QA remains a local check. WhatsApp URLs were checked without sending a message.
