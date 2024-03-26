import React, { useState } from 'react';
import axios from 'axios';

function UploadForm() {
  const [inventoryTypeId, setInventoryTypeId] = useState('');
  const [inventoryName, setInventoryName] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [deleted, setDeleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = {
        InventoryTypeId: inventoryTypeId,
        InventoryName: inventoryName,
        CreatedBy: createdBy,
        Deleted: deleted
      };

      await axios.post('https://localhost:7166/api/inventory/add', formData);

      // Handle success
      console.log('Data sent successfully');
    } catch (error) {
      // Handle error
      setErrorMessage('Error sending data: ' + error.message);
      console.error('Error sending data:', error);
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inventoryTypeId">Inventory Type ID:</label>
          <input type="number" id="inventoryTypeId" value={inventoryTypeId} onChange={(e) => setInventoryTypeId(e.target.value)} />
        </div>
        <div>
          <label htmlFor="inventoryName">Inventory Name:</label>
          <input type="text" id="inventoryName" value={inventoryName} onChange={(e) => setInventoryName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="createdBy">Created By:</label>
          <input type="number" id="createdBy" value={createdBy} onChange={(e) => setCreatedBy(e.target.value)} />
        </div>
        <div>
          <label htmlFor="deleted">Deleted:</label>
          <input type="checkbox" id="deleted" checked={deleted} onChange={(e) => setDeleted(e.target.checked)} />
        </div>
        <button type="submit">Send Data</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default UploadForm;
