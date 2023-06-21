// import React, { useState } from 'react';

// const FarmerSignup = () => {
//   const [farmersName, setFarmersName] = useState('');
//   const [email, setEmail] = useState('');
//   const [passwordDigest, setPasswordDigest] = useState('');
//   const [farmerAddress, setFarmerAddress] = useState('');
//   const [farmerContact, setFarmerContact] = useState('');
//   const [farmerCounty, setFarmerCounty] = useState('');
//   const [farmerSubCounty, setFarmerSubCounty] = useState('');
//   const [farmerWard, setFarmerWard] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = {
//       farmers_name: farmersName,
//       email,
//       password_digest: passwordDigest,
//       farmer_address: farmerAddress,
//       farmer_contact: farmerContact,
//       farmer_county: farmerCounty,
//       farmer_sub_county: farmerSubCounty,
//       farmer_ward: farmerWard
//     };

//     fetch('http://127.0.0.1:3000/farmers', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//       .then((response) => {
//         if (response.ok) {
//           // Form submission successful
//           console.log('Form submitted successfully');
//           // Reset form fields
//           setFarmersName('');
//           setEmail('');
//           setPasswordDigest('');
//           setFarmerAddress('');
//           setFarmerContact('');
//           setFarmerCounty('');
//           setFarmerSubCounty('');
//           setFarmerWard('');
//         } else {
//           // Form submission failed
//           console.log('Form submission failed');
//         }
//       })
//       .catch((error) => {
//         console.error('Error submitting form:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Farmer Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Farmer's Name:
//           <input type="text" value={farmersName} onChange={(e) => setFarmersName(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" value={passwordDigest} onChange={(e) => setPasswordDigest(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Farmer Address:
//           <input type="text" value={farmerAddress} onChange={(e) => setFarmerAddress(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Farmer Contact:
//           <input type="text" value={farmerContact} onChange={(e) => setFarmerContact(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Farmer County:
//           <input type="text" value={farmerCounty} onChange={(e) => setFarmerCounty(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Farmer Sub-County:
//           <input type="text" value={farmerSubCounty} onChange={(e) => setFarmerSubCounty(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Farmer Ward:
//           <input type="text" value={farmerWard} onChange={(e) => setFarmerWard(e.target.value)} />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default FarmerSignup;


import React, { useState } from 'react';

const FarmerSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [county, setCounty] = useState('');
  const [ward, setWard] = useState('');
  const [location, setLocation] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'county':
        setCounty(value);
        break;
      case 'ward':
        setWard(value);
        break;
      case 'location':
        setLocation(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (isSignUp) {
      try {
        const response = await fetch('your-signup-api-url', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
            name,
            address,
            county,
            ward,
            location,
          }),
        });

        // Handle the response from the signup API

        if (response.ok) {
          console.log('Sign up successful');
          // Redirect or perform other actions after successful signup
        } else {
          console.log('Sign up failed');
          // Handle signup failure, display error message, etc.
        }
      } catch (error) {
        console.log('Sign up error:', error);
        // Handle signup error, display error message, etc.
      }
    } else {
      try {
        const response = await fetch('your-login-api-url', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        // Handle the response from the login API

        if (response.ok) {
          console.log('Login successful');
          // Redirect or perform other actions after successful login
        } else {
          console.log('Login failed');
          // Handle login failure, display error message, etc.
        }
      } catch (error) {
        console.log('Login error:', error);
        // Handle login error, display error message, etc.
      }
    }

    // Reset form
    setEmail('');
    setPassword('');
    setName('');
    setAddress('');
    setCounty('');
    setWard('');
    setLocation('');
  };

  const toggleForm = () => {
    setIsSignUp((prevSignUp) => !prevSignUp);
  };

  return (
    <div>
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleFormSubmit}>
        {isSignUp && (
          <div>
            <label>
              Name:
              <input type="text" name="name" value={name} onChange={handleInputChange} required />
            </label>
            <br />
            <label>
              Address:
              <input type="text" name="address" value={address} onChange={handleInputChange} required />
            </label>
            <br />
            <label>
              County:
              <input type="text" name="county" value={county} onChange={handleInputChange} required />
            </label>
            <br />
            <label>
              Ward:
              <input type="text" name="ward" value={ward} onChange={handleInputChange} required />
            </label>
            <br />
            <label>
              Location:
              <input type="text" name="location" value={location} onChange={handleInputChange} required />
            </label>
            <br />
          </div>
        )}
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={handleInputChange} required />
        </label>
        <br />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>
      <p>
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button onClick={toggleForm}>{isSignUp ? 'Login' : 'Sign Up'}</button>
      </p>
    </div>
  );
};

export default FarmerSignup;
