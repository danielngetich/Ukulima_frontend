import  React,{ useState, useEffect } from 'react';

const MyCrops = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState('');
  const [farmSize, setFarmSize] = useState('');
  const [rawMaterials, setRawMaterials] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  useEffect(() => {
    // Fetch raw materials data from API based on the selected crop
    if (selectedCrop) {
      fetchRawMaterials(selectedCrop)
        .then((data) => {
          setRawMaterials(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedCrop]);

  const fetchRawMaterials = async (crop) => {
    try {
      const response = await fetch(`API_ENDPOINT/rawMaterials? crop=${crop}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch raw materials');
    }
  };

  const handleAddPlant = () => {
    setShowForm(true);
  };

  const handleCropSelection = (e) => {
    setSelectedCrop(e.target.value);
  };

  const handleFarmSizeChange = (e) => {
    setFarmSize(e.target.value);
  };

  const handleMaterialSelection = (e, material) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedMaterials((prevSelectedMaterials) => [
        ...prevSelectedMaterials,
        material
      ]);
    } else {
      setSelectedMaterials((prevSelectedMaterials) =>
        prevSelectedMaterials.filter((item) => item !== material)
      );
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here with selectedCrop, farmSize, and selectedMaterials
    console.log({
      selectedCrop,
      farmSize,
      selectedMaterials
    });
    setShowForm(false);
    setSelectedCrop('');
    setFarmSize('');
    setSelectedMaterials([]);
  };

  return (
    <div>
      <h2>My Crops</h2>
      {showForm ? (
        <form onSubmit={handleFormSubmit}>
          {/* Crop and Farm Size Section */}
          <div>
            <label>
              Crop:
              <select value={selectedCrop} onChange={handleCropSelection}>
                <option value="">Select Crop</option>
                <option value="Maize">Maize</option>
                <option value="Peas">Peas</option>
                <option value="Potatoes">Potatoes</option>
                <option value="Beans">Beans</option>
                <option value="Cabbage">Cabbage</option>
                <option value="Sorghum">Sorghum</option>
                {/* Add more crop options as needed */}
              </select>
            </label>
            <br />
            <label>
              Farm Size:
              <input
                type="text"
                name="farmSize"
                value={farmSize}
                onChange={handleFarmSizeChange}
              />
            </label>
            <br />
          </div>

          {/* Raw Material Selection Section */}
          {selectedCrop && rawMaterials.length > 0 && (
            <div>
              <h3>Raw Material Selection</h3>
              {rawMaterials.map((material) => (
                <div key={material.id}>
                  <label>
                    <input
                      type="checkbox"
                      value={material.id}
                      checked={selectedMaterials.includes(material.id)}
                      onChange={(e) => handleMaterialSelection(e, material.id)}
                    />
                    {material.name}
                  </label>
                  <br />
                  {selectedMaterials.includes(material.id) && (
                    <div>
                      <label>
                        Cost:
                        <input type="text" name={`cost-${material.id}`} />
                      </label>
                      <br />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <br />
          <button type="submit">Save</button>
        </form>
      ) : (
        <button onClick={handleAddPlant}>+ Add Plant</button>
      )}
    </div>
  );
};

export default MyCrops;
