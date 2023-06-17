import React, { useState } from 'react';

const FarmerSignup = () => {
  const [farmersName, setFarmersName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordDigest, setPasswordDigest] = useState('');
  const [farmerAddress, setFarmerAddress] = useState('');
  const [farmerContact, setFarmerContact] = useState('');
  const [farmerCounty, setFarmerCounty] = useState('');
  const [farmerSubCounty, setFarmerSubCounty] = useState('');
  const [farmerWard, setFarmerWard] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      farmers_name: farmersName,
      email,
      password_digest: passwordDigest,
      farmer_address: farmerAddress,
      farmer_contact: farmerContact,
      farmer_county: farmerCounty,
      farmer_sub_county: farmerSubCounty,
      farmer_ward: farmerWard
    };

    fetch('http://127.0.0.1:3000/farmers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.ok) {
          // Form submission successful
          console.log('Form submitted successfully');
          // Reset form fields
          setFarmersName('');
          setEmail('');
          setPasswordDigest('');
          setFarmerAddress('');
          setFarmerContact('');
          setFarmerCounty('');
          setFarmerSubCounty('');
          setFarmerWard('');
        } else {
          // Form submission failed
          console.log('Form submission failed');
        }
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <div>
      <h2>Farmer Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Farmer's Name:
          <input type="text" value={farmersName} onChange={(e) => setFarmersName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={passwordDigest} onChange={(e) => setPasswordDigest(e.target.value)} />
        </label>
        <br />
        <label>
          Farmer Address:
          <input type="text" value={farmerAddress} onChange={(e) => setFarmerAddress(e.target.value)} />
        </label>
        <br />
        <label>
          Farmer Contact:
          <input type="text" value={farmerContact} onChange={(e) => setFarmerContact(e.target.value)} />
        </label>
        <br />
        <label>
          Farmer County:
          <input type="text" value={farmerCounty} onChange={(e) => setFarmerCounty(e.target.value)} />
        </label>
        <br />
        <label>
          Farmer Sub-County:
          <input type="text" value={farmerSubCounty} onChange={(e) => setFarmerSubCounty(e.target.value)} />
        </label>
        <br />
        <label>
          Farmer Ward:
          <input type="text" value={farmerWard} onChange={(e) => setFarmerWard(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FarmerSignup;
