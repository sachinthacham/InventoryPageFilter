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
import './DropdownMenu.css'
import DropdownIcon2 from '../Assests/Dropdown2'

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
        <div className="employee-select">
            <div className='dropdown-container'>
                <div className="dropdown-toggle">
                    <label> Select a Inventory Type </label>
                    <button htmlFor="InventoryType" onClick={toggleDropdown}>
                       <DropdownIcon2 className="dropdown-button" size="30px" color="black"/> 
                    </button>
                </div>
                {isOpen && (
                    <ul id="inventoryType" className='dropdown-menu'>
                        {inventoryTypes.length > 3 ? ( // Check if inventoryTypes length is greater than 10
                            <div className="scrollable-menu">
                                {inventoryTypes.map(type => (
                                    <li key={type.inventoryTypeId} value={type.inventoryTypeId} className='dropdown-item' onClick={() => handleSelect(type.inventoryTypeId)}>
                                        {type.inventoryType}
                                    </li>
                                ))}
                            </div>
                        ) : (
                            inventoryTypes.map(type => (
                                <li key={type.inventoryTypeId} value={type.inventoryTypeId} className='dropdown-item' onClick={() => handleSelect(type.inventoryTypeId)}>
                                    {type.inventoryType}
                                </li>
                            ))
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default InventoryTypeSelect;
