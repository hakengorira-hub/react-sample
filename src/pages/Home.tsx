import { Link } from 'react-router-dom';
import type { Product } from '../types';
import './Home.css';

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'ワイヤレスイヤホン',
    price: 8999,
    description: 'ノイズキャンセリング搭載の高音質ワイヤレスイヤホン',
    image: '🎧',
  },
  {
    id: 2,
    name: 'スマートウォッチ',
    price: 15999,
    description: 'フィットネス追跡機能付きのスマートウォッチ',
    image: '⌚',
  },
  {
    id: 3,
    name: 'ポータブルスピーカー',
    price: 5999,
    description: '防水仕様の高出力ポータブルスピーカー',
    image: '🔊',
  },
  {
    id: 4,
    name: 'ワイヤレス充電器',
    price: 3999,
    description: '急速充電対応のワイヤレス充電器',
    image: '🔌',
  },
  {
    id: 5,
    name: 'ウェブカメラ',
    price: 7999,
    description: '4K対応のプロフェッショナルウェブカメラ',
    image: '📹',
  },
  {
    id: 6,
    name: 'USBハブ',
    price: 2999,
    description: '7ポート搭載の高速USBハブ',
    image: '🔗',
  },
];

export const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>ようこそ ShopHub へ</h1>
          <p>最新のテック製品を手軽に購入できます</p>
        </div>
      </section>

      <section className="products">
        <div className="products-container">
          <h2>おすすめ商品</h2>
          <div className="products-grid">
            {PRODUCTS.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="product-card"
              >
                <div className="product-image">{product.image}</div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-price">¥{product.price.toLocaleString('ja-JP')}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
