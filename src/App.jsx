// src/App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from './components/Cart';
import { useDispatch } from 'react-redux';
import { addItem } from './redux/cartSlice';
import productsData from './products.json'; // Import the JSON data

const App = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(productsData.products); // Set the products from the imported JSON data
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
      <Cart />
    </div>
  );
};

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const imageUrl = product.thumbnail; 

  return (
    <div>
      <img src={imageUrl} alt={product.title}  />
      <p>{product.title}</p>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
    </div>
  );
};

export default App;
