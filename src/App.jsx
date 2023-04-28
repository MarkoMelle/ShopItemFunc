import React from 'react';
import './App.css';

// Определение объекта с информацией о товаре
const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

// Основной компонент приложения
function App() {
  return (
    <div className="container">
      <div className="background-element"></div>
      <img className="image" src="https://images.finncdn.no/dynamic/1280w/2020/1/vertical-0/12/4/167/519/934_1912271204.jpg" alt="Пальто" />
      <div className="window">
        <ShopItemFunc item={item} />
      </div>
    </div>
  );
}

// Компонент, отображающий информацию о товаре
function ShopItemFunc({item}) {
  return (
    <div className="main-content">
      <h2>{item.brand}</h2>
      <h1 className='title'>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className="description">
        {item.descriptionFull}
      </div>
      <div className="highlight-window mobile">
        <div className="highlight-overlay"></div>
      </div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">
          {item.currency}{item.price.toFixed(2)}
        </div>
        <button className='button'>Добавить в корзину</button>
      </div>
    </div>
  );
}

export default App;
