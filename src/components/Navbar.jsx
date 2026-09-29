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
