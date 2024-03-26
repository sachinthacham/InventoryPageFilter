// import React from 'react';

// function InventoryTypeSelect({ inventoryTypes, selectedInventoryTypeId, handleInventoryTypeChange }) {
//     return (
//         <select id="inventoryType" value={selectedInventoryTypeId} onChange={handleInventoryTypeChange} className='selectInventoryType-input'>
//             <option value="" className='option-list'>Select an inventory type </option>
//             {inventoryTypes.map(type => (
//                 <option key={type.inventoryTypeId} value={type.inventoryTypeId} className='option-list'> {type.inventoryType}</option>
//             ))}
//         </select>
//     );
// }

// export default InventoryTypeSelect;

import React, { useState } from 'react';

function InventoryTypeSelect({ inventoryTypes, selectedInventoryTypeId, handleInventoryTypeChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (inventoryTypeId) => {
        selectedInventoryTypeId = inventoryTypeId;
        handleInventoryTypeChange(inventoryTypeId);
        setIsOpen(false); // Close the dropdown after selection
    };

    return (
        <div className="inventory-type-select">
            <div className='dropdown-container'>
            <label htmlFor="inventoryType" className="dropdown-toggle" onClick={toggleDropdown}>
                Select Inventory Type:
            </label>
            {isOpen && (
                <ul id="inventoryType" className='dropdown-menu'>
                   
                    {inventoryTypes.map(type => (
                        <li key={type.inventoryTypeId} value={type.inventoryTypeId} className= 'dropdown-item'  onClick={() => handleSelect(type.inventoryTypeId)}>
                            {type.inventoryType}
                        </li>
                    ))}
                </ul>
            )}
            </div>
        </div>
    );
}

export default InventoryTypeSelect;

