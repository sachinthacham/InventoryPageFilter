import React, { useState } from 'react';

const InventoryTable1 = () => {

    const inventoryData = [
        {id:1,
        itemName:"laptop001",
        quantity:5,
        price:"100",
        type:"laptop"
    },
    {id:2,
        itemName:"laptop002",
        quantity:5,
        price:"100",
        type:"laptop"
    },
    {id:3,
        itemName:"mouse001",
        quantity:5,
        price:"100",
        type:"mouse"
    },
    {id:4,
        itemName:"mouse002",
        quantity:5,
        price:"100",
        type:"mouse"
    }
    ]
  const [selectedType, setSelectedType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredInventory = inventoryData.filter(item => {
    // Filter by type if selectedType is set
    if (selectedType && item.type !== selectedType) {
      return false;
    }
    // Filter by search term
    return item.itemName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h2>Inventory Table</h2>
      <label htmlFor="typeSelect">Select Inventory Type:</label>
      <select id="typeSelect" value={selectedType} onChange={handleTypeChange}>
        <option value="">All Types</option>
        {Array.from(new Set(inventoryData.map(item => item.type))).map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
      <label htmlFor="searchInput">Search by Item Name:</label>
      <input 
        type="text" 
        id="searchInput" 
        value={searchTerm} 
        onChange={handleSearch} 
        placeholder="Enter item name" 
      />
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {filteredInventory.map(item => (
            <tr key={item.id}>
              <td>{item.itemName}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              {/* Add more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable1;
