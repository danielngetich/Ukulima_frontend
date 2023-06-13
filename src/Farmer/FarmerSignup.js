import React, { useState } from 'react';

const FarmersSignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    contact: '',
    county: '',
    subCounty: '',
    ward: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic with formData
    console.log(formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      password: '',
      address: '',
      contact: '',
      county: '',
      subCounty: '',
      ward: '',
      location: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Contact:
        <input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        County:
        <input
          type="text"
          name="county"
          value={formData.county}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Sub-county:
        <input
          type="text"
          name="subCounty"
          value={formData.subCounty}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Ward:
        <input
          type="text"
          name="ward"
          value={formData.ward}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default FarmersSignupForm;
