// import React, { useState, useEffect } from 'react';

// const FarmProduceSales = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products from the API or local storage
//     fetchProducts()
//       .then((data) => {
//         setProducts(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       // Replace with the actual API endpoint or local storage retrieval logic
//       const response = await fetch('API_ENDPOINT/products');
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       throw new Error('Failed to fetch products');
//     }
//   };

//   return (
//     <div>
//       <h2>Farm Produce Sales</h2>
//       {products.length === 0 ? (
//         <p>No products available</p>
//       ) : (
//         <div className="product-cards">
//           {products.map((product) => (
//             <div key={product.id} className="product-card">
//               <img src={product.image} alt={product.productName} />
//               <h3>{product.productName}</h3>
//               <p>{product.description}</p>
//               <p>Price: {product.price}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FarmProduceSales;

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
