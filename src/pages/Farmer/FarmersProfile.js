import React, { useEffect, useState } from 'react';

const FarmersProfile = () => {
  const [profileData, setProfileData] = useState([]);

  const fetchProfileData = async () => {
    try {
      const response = await fetch('http://localhost:1337/api/users'); // Replace 'API_ENDPOINT' with the actual API endpoint to fetch the data
      const data = await response.json();
      setProfileData(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className='container-title'>Farmers Profile</h2>
      <div>
        {/* {data.map((user) => (
          <p>{user.contact}</p>
        ))} */}
      </div>
    </div>
  );
};

export default FarmersProfile;
