import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

export const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const totalPrice = getTotalPrice();

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <div className="cart-container">
          <h1>ショッピングカート</h1>
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <p>カートに商品が入っていません</p>
            <Link to="/" className="btn btn-primary">
              ショッピングを続ける
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-container">
        <h1>ショッピングカート</h1>

        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.product.id} className="cart-item">
                <div className="item-image">{item.product.image}</div>

                <div className="item-details">
                  <Link
                    to={`/product/${item.product.id}`}
                    className="item-name"
                  >
                    {item.product.name}
                  </Link>
                  <p className="item-price">
                    ¥{item.product.price.toLocaleString('ja-JP')}
                  </p>
                </div>

                <div className="item-quantity">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    aria-label="数量を減らす"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.product.id, parseInt(e.target.value))
                    }
                  />
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    aria-label="数量を増やす"
                  >
                    +
                  </button>
                </div>

                <div className="item-subtotal">
                  <p>¥{(item.product.price * item.quantity).toLocaleString('ja-JP')}</p>
                </div>

                <button
                  className="btn-remove"
                  onClick={() => removeFromCart(item.product.id)}
                  aria-label="削除"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>注文内容</h2>
            <div className="summary-row">
              <span>小計:</span>
              <span>¥{totalPrice.toLocaleString('ja-JP')}</span>
            </div>
            <div className="summary-row">
              <span>配送料:</span>
              <span>無料</span>
            </div>
            <div className="summary-row discount">
              <span>割引:</span>
              <span>-¥0</span>
            </div>
            <div className="summary-row total">
              <span>合計:</span>
              <span>¥{totalPrice.toLocaleString('ja-JP')}</span>
            </div>

            <button className="btn btn-primary btn-checkout">
              レジに進む
            </button>

            <Link to="/" className="btn btn-secondary">
              ショッピングを続ける
            </Link>

            <button
              className="btn btn-outline"
              onClick={clearCart}
            >
              カートをクリア
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
