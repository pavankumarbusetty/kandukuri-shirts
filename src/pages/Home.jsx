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
