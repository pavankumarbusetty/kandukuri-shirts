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
