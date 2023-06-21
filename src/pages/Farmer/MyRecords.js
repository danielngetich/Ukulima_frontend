// import React, { useState } from 'react';

// const MyRecords = () => {
//   const [category, setCategory] = useState('');
//   const [date, setDate] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [cost, setCost] = useState('');

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//   };

//   const handleDateChange = (e) => {
//     setDate(e.target.value);
//   };

//   const handleQuantityChange = (e) => {
//     setQuantity(e.target.value);
//   };

//   const handleCostChange = (e) => {
//     setCost(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform submission logic with category, date, quantity, and cost
//     console.log({
//       category,
//       date,
//       quantity,
//       cost
//     });
//     // Reset form fields
//     setCategory('');
//     setDate('');
//     setQuantity('');
//     setCost('');
//   };

//   return (
//     <div>
//       <h2>My Records</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Category:
//           <select value={category} onChange={handleCategoryChange}>
//             <option value="">Select Category</option>
//             <option value="milk">Milk</option>
//             <option value="tea">Tea</option>
//             <option value="eggs">Eggs</option>
//             {/* Add more category options as needed */}
//           </select>
//         </label>
//         <br />
//         <label>
//           Date:
//           <input type="date" value={date} onChange={handleDateChange} />
//         </label>
//         <br />
//         <label>
//           Quantity (kg/litres/trays):
//           <input
//             type="text"
//             value={quantity}
//             onChange={handleQuantityChange}
//           />
//         </label>
//         <br />
//         <label>
//           Cost:
//           <input type="text" value={cost} onChange={handleCostChange} />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default MyRecords;

import React, { useState } from 'react';

const MyRecords = () => {
  const [fertilizerCost, setFertilizerCost] = useState(0);
  const [labourCost, setLabourCost] = useState(0);
  const [seedsCost, setSeedsCost] = useState(0);
  const [chemicalsCost, setChemicalsCost] = useState(0);

  const handleFertilizerCostChange = (event) => {
    setFertilizerCost(Number(event.target.value));
  };

  const handleLabourCostChange = (event) => {
    setLabourCost(Number(event.target.value));
  };

  const handleSeedsCostChange = (event) => {
    setSeedsCost(Number(event.target.value));
  };

  const handleChemicalsCostChange = (event) => {
    setChemicalsCost(Number(event.target.value));
  };

  const totalCost = fertilizerCost + labourCost + seedsCost + chemicalsCost;

  return (
    <div>
      <h2>Production Cost</h2>
      <label>
        Fertilizer Cost:
        <input type="number" value={fertilizerCost} onChange={handleFertilizerCostChange} />
      </label>
      <br />
      <label>
        Labour Cost:
        <input type="number" value={labourCost} onChange={handleLabourCostChange} />
      </label>
      <br />
      <label>
        Seeds Cost:
        <input type="number" value={seedsCost} onChange={handleSeedsCostChange} />
      </label>
      <br />
      <label>
        Chemicals Cost:
        <input type="number" value={chemicalsCost} onChange={handleChemicalsCostChange} />
      </label>
      <br />
      <p>Total Cost: {totalCost}</p>
    </div>
  );
};

export default MyRecords;

