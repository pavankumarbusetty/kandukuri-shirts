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
