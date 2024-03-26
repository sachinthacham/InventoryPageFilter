import React, { useState,useEffect } from 'react';
import './ExpandCard.css';

const InventoryCard = ({ inventories}) => {
    

    const [selectedInventoryId, setSelectedInventoryId] = useState();
    const [selectedInventoryDetails, setSelectedInventoryDetails] = useState(null);
   
    useEffect(() => {
        if (selectedInventoryId) {
            fetchInventoryDetails();
        }
    }, [selectedInventoryId]);


    const fetchInventoryDetails = async () => {
        try {
            const url3 = `https://localhost:7166/api/inventory/inventory/${selectedInventoryId}`;
            const response = await fetch(url3);
            if (!response.ok) {
                throw new Error('Failed to fetch inventory details');
            }

            const data = await response.json();
            setSelectedInventoryDetails(data);
        } catch (error) {
            console.error('Error fetching inventory details:', error);
        }
    };

  const [expandedInventoryId, setExpandedInventoryId] = useState(null);

  const toggleExpansion = (inventoryId) => {
    setExpandedInventoryId(inventoryId === expandedInventoryId ? null : inventoryId);
  };

  const handleInventoryChange = (inventoryId) => {
    setSelectedInventoryId(inventoryId);
};
 
  const handleCardClick = (inventoryId) => {
    toggleExpansion(inventoryId);
    handleInventoryChange(inventoryId);
  };
 

  return (
    <div className="inventory-card-container">
      {inventories.map((inventory) => (
        <div
          key={inventory.inventoryId}
          className={`inventory-card ${expandedInventoryId === inventory.inventoryId ? 'expanded' : ''}`}
          onClick={() => handleCardClick(inventory.inventoryId)}
         
        >
          <ul >
            <li  >
              {inventory.inventoryName} - {inventory.inventoryTypeId}
            </li>
            {expandedInventoryId === inventory.inventoryId &&
              selectedInventoryDetails &&
              selectedInventoryDetails.inventoryId === inventory.inventoryId && ( // Ensure details match inventory
                <div className="details">
                  <p>Inventory Name: {selectedInventoryDetails.inventoryName}</p>
                  <p>Inventory Type ID: {selectedInventoryDetails.inventoryTypeId}</p>
                  {/* Add more details here */}
                </div>
              )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default InventoryCard;





