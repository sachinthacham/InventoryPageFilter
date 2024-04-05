import React, { useState, useEffect } from 'react';
import InventoryCard from './InventoryDetails';
import './FilterMethod.css';
import CardComponent from './PopupCard'; 
import EmployeeSelect from './EmployeeFilterComponent';
import InventoryTypeSelect from './InventoryTypeFilterComponent';
import AdvancedButton from './AdvancedButton'
//import CardComponent2 from './EditInventory';




function InventoryFilter() {
    const [employees, setEmployees] = useState([]); // Declare employees state variable
    const [inventoryTypes, setInventoryTypes] = useState([]); // Declare inventoryTypes state variable
    const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
    const [selectedInventoryTypeId, setSelectedInventoryTypeId] = useState('');
    const [inventories, setInventories] = useState([]);
    const [showPopup, setShowPopup] = useState(false); // State for managing the popup visibility

    useEffect(() => {
        fetchEmployees();
        fetchInventoryTypes();
        fetchInventories();
    }, [selectedEmployeeId, selectedInventoryTypeId]);

    const fetchEmployees = async () => {
        try {
            const response = await fetch('https://localhost:7166/api/employee/Employee');
            if (!response.ok) {
                throw new Error('Failed to fetch employees');
            }
            const data = await response.json();
            setEmployees(data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

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

    const fetchInventories = async () => {
        try {
            let url = 'https://localhost:7166/api/inventory/filter';
            if (!selectedInventoryTypeId && !selectedEmployeeId) {
                url = 'https://localhost:7166/api/inventory/filter/employee';
            } else {
                if (selectedInventoryTypeId && selectedEmployeeId) {
                    url += `/type/${selectedInventoryTypeId}/${selectedEmployeeId}`;
                } else if (selectedInventoryTypeId) {
                    url += `/type/${selectedInventoryTypeId}`;
                } else if (selectedEmployeeId) {
                    url += `/employee/${selectedEmployeeId}`;
                }
            }
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch inventories');
            }
            const data = await response.json();
            setInventories(data);
        } catch (error) {
            console.error('Error fetching inventories:', error);
        }
    };

    const handleEmployeeChange = (selectedEmployeeId) => {
        
        setSelectedEmployeeId(selectedEmployeeId);
    };

    const handleInventoryTypeChange = (selectedInventoryTypeId) => {
       
        setSelectedInventoryTypeId(selectedInventoryTypeId);
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className='container'>
            <h2 className='heading' >Inventory Manager</h2>
          <div className='add-button'>
          <button onClick={togglePopup}>Add New Inventory</button>
          </div>
        
           
          <div className='employee-filter'>
          <EmployeeSelect
                employees={employees}
                selectedEmployeeId={selectedEmployeeId}
                handleEmployeeChange={handleEmployeeChange}
            />
          </div>
             
          <div className='inventory-filter'>
          <InventoryTypeSelect
             inventoryTypes={inventoryTypes} 
             selectedInventoryTypeId={selectedInventoryTypeId} 
             handleInventoryTypeChange={handleInventoryTypeChange}
              />
          </div>
           

           
              
            <InventoryCard inventories={inventories} />
            {showPopup && <CardComponent handleClose={togglePopup}/>} 
           
        </div>
    );
}

export default InventoryFilter;



