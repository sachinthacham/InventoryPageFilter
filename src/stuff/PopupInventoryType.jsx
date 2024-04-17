import React, { useState } from 'react';
import './popup.css'; // Import your CSS file
import axios from 'axios';

import InputField from '../Assests/InputField';
import AdvancedButton from '../stuff/AdvancedButton';

function CardComponent({ handleClose }) {
    const [inventoryType, setInventoryType] = useState('');
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = {
                inventoryType: inventoryType,
                
            };
            const response = await axios.post("https://localhost:7166/api/inventory_type/add", data);
            console.log('Inventory created successfully:', response.data);
            handleClose(); // Close the popup after successful submission
        } catch (err) {
            console.error('Error creating inventory:', err);
        }
    };

    

    const handleInventoryTypeChange = (value) => {
        setInventoryType(value);
    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <form onSubmit={handleSubmit}>
                    <h3 className='Add-Inventory-heading'>Add Inventory</h3>
                    <div className='Inventoryname'>
                        <InputField
                            placeholder="Enter Inventory Name"
                            value={inventoryType}
                            onChange={(e) => handleInventoryTypeChange(e.target.value)}
                        />
                    </div>
                    <div className="button-submit">
                        <AdvancedButton type="submit">Submit</AdvancedButton>
                    </div>
                    <div className="button-close">
                        <AdvancedButton onClick={handleClose}>Cancel</AdvancedButton>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CardComponent;
