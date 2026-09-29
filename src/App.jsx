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
