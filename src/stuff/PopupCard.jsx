
import React, { useState } from 'react';
import './popup.css'; // Import your CSS file
import axios from 'axios'; 

function CardComponent({ handleClose }) {
    const [values, setValues] = useState({
        InventoryTypeId: '',
        InventoryName: '',
        employeeId: '',
        CreatedBy: '',
        Deleted: false
    });
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post("https://localhost:7166/api/inventory/add", values);
            console.log(res);
            handleClose();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor="InventoryTypeId">Inventory Type ID:</label>
                        <input
                            type="number"
                            name="InventoryTypeId"
                            className='form-control'
                            placeholder="Enter Inventory Type ID"
                            value={values.InventoryTypeId}
                            onChange={e => setValues({ ...values, InventoryTypeId: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="InventoryName">Inventory Name:</label>
                        <input
                            type="text"
                            name="InventoryName"
                            className='form-control'
                            placeholder="Enter Inventory Name"
                            value={values.InventoryName}
                            onChange={e => setValues({ ...values, InventoryName: e.target.value })}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="employeeId">Employee ID:</label>
                        <input
                            type="number"
                            name="employeeId"
                            className='form-control'
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
                    <button type="submit" className="close-btn">Submit</button>
                    <button className="close-btn" onClick={handleClose}>X</button>
                </form>
            </div>
        </div>
    );
}

export default CardComponent;
