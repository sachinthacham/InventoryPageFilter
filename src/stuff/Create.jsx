import React, { useState ,useEffect} from 'react';
import axios from 'axios';


function Create() {
  const [values, setValues] = useState({
    InventoryTypeId: '',
    InventoryName: '',
    employeeId: '',
    CreatedBy: '',
    Deleted: false // Assuming Deleted should default to false
});
const [inventoryTypes, setInventoryTypes] = useState([]);
const [selectedInventoryTypeId, setSelectedInventoryTypeId] = useState('');

useEffect(() => {
  
  fetchInventoryTypes();
  
}, [selectedInventoryTypeId]);

const fetchInventoryTypes = async () => {
  try {
      const response = await fetch('https://localhost:7166/api/inventory_type/inventory_types');
      if (!response.ok) {
          throw new Error('Failed to fetch inventory types');
      }
      const data = await response.json();
      setInventoryTypes(data);
  } catch (error) {
      console.error('Error fetching inventory types:', error);
  }
};


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("https://localhost:7166/api/inventory/add", values);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  const handleInventoryTypeChange = (selectedInventoryTypeId) => {
       
    setSelectedInventoryTypeId(selectedInventoryTypeId);
};


  return (
    <div>
      <div>
        <h1>Add an Inventory</h1>
        <form onSubmit={handleSubmit}>
          {/* <div className='mb-2'>
            <label htmlFor="InventoryTypeId">Inventory Type ID:</label>
            <input
              type="number"
              name="InventoryTypeId"
              className='form-control'
              placeholder="Enter Inventory Type ID"
              value={values.InventoryTypeId}
              onChange={e => setValues({ ...values, InventoryTypeId: e.target.value })}
            />
          </div> */}
        
           
          <div className='mb-2'>
            <label htmlFor="InventoryName">Inventory Name:</label>
            <input
              type="text"
              name="InventoryName"
              className='form-control'
              placeholder="Enter Inventory Name"
              value={values.InventoryName}
              onChange = {e => setValues({ ...values, InventoryName: e.target.value })}
            />
          </div>
          <div className ='mb-3'>
            <label htmlFor="employeeId">Employee ID:</label>
            <input
              type ="number"
              name ="employeeId"
              className ='form-control'
              placeholder="Enter Employee ID"
              value={values.employeeId}
              onChange={e => setValues({ ...values, employeeId: e.target.value })}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="CreatedBy">Created By:</label>
            <input
              type="number"
              name="CreatedBy"
              className='form-control'
              placeholder="Enter Created By"
              value={values.CreatedBy}
              onChange={e => setValues({ ...values, CreatedBy: e.target.value })}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
