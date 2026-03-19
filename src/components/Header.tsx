import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

export const Header = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>ShopHub</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">
            ホーム
          </Link>
          <Link to="/cart" className="nav-link cart-link">
            🛒 カート
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
};
