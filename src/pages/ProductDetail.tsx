import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import type { Product } from '../types';
import './ProductDetail.css';

const PRODUCTS: Record<number, Product> = {
  1: {
    id: 1,
    name: 'ワイヤレスイヤホン',
    price: 8999,
    description: 'ノイズキャンセリング搭載の高音質ワイヤレスイヤホン',
    image: '🎧',
  },
  2: {
    id: 2,
    name: 'スマートウォッチ',
    price: 15999,
    description: 'フィットネス追跡機能付きのスマートウォッチ',
    image: '⌚',
  },
  3: {
    id: 3,
    name: 'ポータブルスピーカー',
    price: 5999,
    description: '防水仕様の高出力ポータブルスピーカー',
    image: '🔊',
  },
  4: {
    id: 4,
    name: 'ワイヤレス充電器',
    price: 3999,
    description: '急速充電対応のワイヤレス充電器',
    image: '🔌',
  },
  5: {
    id: 5,
    name: 'ウェブカメラ',
    price: 7999,
    description: '4K対応のプロフェッショナルウェブカメラ',
    image: '📹',
  },
  6: {
    id: 6,
    name: 'USBハブ',
    price: 2999,
    description: '7ポート搭載の高速USBハブ',
    image: '🔗',
  },
};

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const productId = parseInt(id || '0', 10);
  const product = PRODUCTS[productId];

  if (!product) {
    return (
      <div className="product-detail error">
        <h1>商品が見つかりません</h1>
        <Link to="/" className="btn btn-primary">
          ホームに戻る
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <div className="product-detail">
      <Link to="/" className="back-link">
        ← ホームに戻る
      </Link>

      <div className="product-detail-container">
        <div className="product-image-large">{product.image}</div>

        <div className="product-details">
          <h1>{product.name}</h1>

          <div className="product-price-large">
            ¥{product.price.toLocaleString('ja-JP')}
          </div>

          <p className="product-description">
            {product.description}
          </p>

          <div className="product-features">
            <h3>特徴</h3>
            <ul>
              <li>高品質の製品</li>
              <li>1年間の保証付き</li>
              <li>無料配送</li>
              <li>30日間返金保証</li>
            </ul>
          </div>

          <div className="product-actions">
            <div className="quantity-selector">
              <label htmlFor="quantity">数量:</label>
              <div className="quantity-controls">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  aria-label="数量を減らす"
                >
                  −
                </button>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                />
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  aria-label="数量を増やす"
                >
                  +
                </button>
              </div>
            </div>

            <button
              className={`btn btn-primary btn-large ${addedToCart ? 'success' : ''}`}
              onClick={handleAddToCart}
            >
              {addedToCart ? '✓ カートに追加しました' : 'カートに追加'}
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => navigate('/cart')}
            >
              カートを見る
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
