import React, { useState } from 'react';

const MyRecords = () => {
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [quantity, setQuantity] = useState('');
  const [cost, setCost] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCostChange = (e) => {
    setCost(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic with category, date, quantity, and cost
    console.log({
      category,
      date,
      quantity,
      cost
    });
    // Reset form fields
    setCategory('');
    setDate('');
    setQuantity('');
    setCost('');
  };

  return (
    <div>
      <h2>My Records</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Category:
          <select value={category} onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            <option value="milk">Milk</option>
            <option value="tea">Tea</option>
            <option value="eggs">Eggs</option>
            {/* Add more category options as needed */}
          </select>
        </label>
        <br />
        <label>
          Date:
          <input type="date" value={date} onChange={handleDateChange} />
        </label>
        <br />
        <label>
          Quantity (kg/litres/trays):
          <input
            type="text"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </label>
        <br />
        <label>
          Cost:
          <input type="text" value={cost} onChange={handleCostChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyRecords;
