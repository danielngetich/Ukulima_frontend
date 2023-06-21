// import React, { useState } from 'react';

// const MySells = () => {
//   const [image, setImage] = useState(null);
//   const [productName, setProductName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const handleProductNameChange = (e) => {
//     setProductName(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handlePriceChange = (e) => {
//     setPrice(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform submission logic with image, productName, description, and price
//     console.log({
//       image,
//       productName,
//       description,
//       price
//     });
//     // Reset form fields
//     setImage(null);
//     setProductName('');
//     setDescription('');
//     setPrice('');
//   };

//   return (
//     <div>
//       <h2>My Sales</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Image:
//           <input type="file" accept="image/*" onChange={handleImageChange} />
//         </label>
//         <br />
//         <label>
//           Product Name:
//           <input
//             type="text"
//             value={productName}
//             onChange={handleProductNameChange}
//           />
//         </label>
//         <br />
//         <label>
//           Description:
//           <textarea
//             value={description}
//             onChange={handleDescriptionChange}
//           ></textarea>
//         </label>
//         <br />
//         <label>
//           Price:
//           <input type="text" value={price} onChange={handlePriceChange} />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default MySells;

import React, { useState } from 'react';

const MySells = ({ addProduct }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductPriceChange = (event) => {
    setProductPrice(event.target.value);
  };

  const handleProductImageChange = (event) => {
    const imageFile = event.target.files[0];
    const imageURL = URL.createObjectURL(imageFile);
    setProductImage(imageURL);
  };

  const handlePostProduct = (event) => {
    event.preventDefault();
    if (productName && productPrice && productImage) {
      const newProduct = {
        name: productName,
        price: Number(productPrice),
        image: productImage,
      };
      addProduct(newProduct);
      setProductName('');
      setProductPrice('');
      setProductImage(null);
    }
  };

  return (
    <div>
      <h2>Sell Your Farm Produce</h2>
      <form onSubmit={handlePostProduct}>
        <label>
          Product Name:
          <input type="text" value={productName} onChange={handleProductNameChange} required />
        </label>
        <br />
        <label>
          Product Price:
          <input type="number" value={productPrice} onChange={handleProductPriceChange} required />
        </label>
        <br />
        <label>
          Product Image:
          <input type="file" accept="image/*" onChange={handleProductImageChange} required />
        </label>
        <br />
        {productImage && <img src={productImage} alt="Product" width="150" />}
        <br />
        <button type="submit">Post Product</button>
      </form>
    </div>
  );
};

export default MySells;
