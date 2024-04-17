import React, { useState } from 'react';
import './popup.css'; // Import your CSS file
import axios from 'axios';

import InputField from '../Assests/InputField';
import AdvancedButton from './AdvancedButton';


function CardComponent_Type({ handleClose, selectedEditId, inventoryType }){
    const [editedInventoryType, setEditedInventoryType] = useState(inventoryType);

    const handleChange = (event) => {
        setEditedInventoryType(event.target.value);
    };
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = {
                inventoryType: editedInventoryType,
            };
            const response = await axios.put(`https://localhost:7166/api/inventory_type/update/${selectedEditId}`, data);
            console.log('Inventory updated successfully:', response.data);
            handleClose(); // Close the popup after successful submission
        } catch (err) {
            console.error('Error updating inventory:', err);
        }
    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <form onSubmit={handleSubmit}>
                    <h3 className='Add-Inventory-heading'>Edit Inventory</h3>
                    <div className='Inventoryname'>
                        <InputField
                            placeholder="Enter Inventory Name"
                            value={editedInventoryType}
                            onChange={handleChange}
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

export default CardComponent_Type;
