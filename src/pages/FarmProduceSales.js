import React from 'react';

const FarmProduceSales = ({ products }) => {
  return (
    <div>
      <h2>Farmers Market</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              {product.image && <img src={product.image} alt="Product" width="150" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FarmProduceSales;
