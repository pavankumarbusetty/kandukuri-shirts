

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
