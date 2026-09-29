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
