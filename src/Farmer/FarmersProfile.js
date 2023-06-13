import React, { useEffect, useState } from 'react';

const FarmersProfile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const response = await fetch('API_ENDPOINT'); // Replace 'API_ENDPOINT' with the actual API endpoint to fetch the data
      const data = await response.json();
      setProfileData(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Farmers Profile</h2>
      <p>Name: {profileData.name}</p>
      <p>Email: {profileData.email}</p>
      <p>Address: {profileData.address}</p>
      <p>Contact: {profileData.contact}</p>
      <p>County: {profileData.county}</p>
      <p>Sub-county: {profileData.subCounty}</p>
      <p>Ward: {profileData.ward}</p>
      <p>Location: {profileData.location}</p>
    </div>
  );
};

export default FarmersProfile;
