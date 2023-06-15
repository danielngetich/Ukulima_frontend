import React, { useState } from 'react';

const MySells = () => {
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic with image, productName, description, and price
    console.log({
      image,
      productName,
      description,
      price
    });
    // Reset form fields
    setImage(null);
    setProductName('');
    setDescription('');
    setPrice('');
  };

  return (
    <div>
      <h2>My Sells</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <br />
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={handleProductNameChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </label>
        <br />
        <label>
          Price:
          <input type="text" value={price} onChange={handlePriceChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MySells;
