// import React, { useState, useEffect } from 'react';
// import './popup.css'; // Import your CSS file
// import axios from 'axios';

// function CardComponent({ handleClose, initialData }) {
//     const [values, setValues] = useState({
//         InventoryTypeId: initialData.InventoryTypeId,
//         InventoryName: initialData.InventoryName,
//         employeeId: initialData.employeeId,
//         CreatedBy: initialData.CreatedBy,
//         file: null // to store the selected file
//     });
//     const [inventoryTypes, setInventoryTypes] = useState([]);
//     const [employees, setEmployees] = useState([]);

//     useEffect(() => {
//         fetchInventoryTypes();
//         fetchEmployees();
//     }, []);

//     const fetchInventoryTypes = async () => {
//         try {
//             const response = await fetch('https://localhost:7166/api/inventory_type/inventory_types');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch inventory types');
//             }
//             const data = await response.json();
//             setInventoryTypes(data);
//         } catch (error) {
//             console.error('Error fetching inventory types:', error);
//         }
//     };

//     const fetchEmployees = async () => {
//         try {
//             const response = await fetch('https://localhost:7166/api/employee/Employee');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch employees');
//             }
//             const data = await response.json();
//             setEmployees(data);
//         } catch (error) {
//             console.error('Error fetching employees:', error);
//         }
//     };

//     const handleFileChange = (e) => {
//         setValues({ ...values, file: e.target.files[0] });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const formData = new FormData();
//             formData.append('file', values.file);

//             const otherData = {
//                 InventoryTypeId: values.InventoryTypeId,
//                 InventoryName: values.InventoryName,
//                 employeeId: values.employeeId,
//                 CreatedBy: values.CreatedBy
//             };

//             formData.append('otherData', JSON.stringify(otherData));

//             const res = await axios.put(`https://localhost:7166/api/inventory/update/${initialData.id}`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             console.log(res);
//             handleClose();
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return (
//         <div className="popup">
//             <div className="popup-inner">
//                 <form onSubmit={handleSubmit}>
//                     <div className="InventorySelect">
//                         <label className='Inventory-label'>Select inventory type:</label>
//                         <div className='mb-2'>
//                             <label htmlFor="InventoryTypeId">Inventory Type ID:</label>
//                             <input
//                                 type="number"
//                                 name="InventoryTypeId"
//                                 className='form-control'
//                                 placeholder="Enter Inventory Type ID"
//                                 value={values.InventoryTypeId}
//                                 onChange={e => setValues({ ...values, InventoryTypeId: e.target.value })}
//                             />
//                         </div>
//                     </div>

//                     <div className="employeeSelect">
//                         <label className ='inventory-label'>Assign to: </label>
//                         <div className='mb-3'>
//                             <label htmlFor="employeeId">Employee ID:</label>
//                             <input
//                                 type ="number"
//                                 name ="employeeId"
//                                 className='form-control'
//                                 placeholder="Enter Employee ID"
//                                 value={values.employeeId}
//                                 onChange={e => setValues({ ...values, employeeId: e.target.value })}
//                             />
//                         </div>
//                     </div>

//                     <div className = 'Inventoryname'>
//                         <label className = "InventoryName-label">Inventory Name:</label><br/>
//                         <input
//                             type="text"
//                             name="InventoryName"
//                             className='form-control'
//                             placeholder="Enter Inventory Name"
//                             value={values.InventoryName}
//                             onChange={e => setValues({ ...values, InventoryName: e.target.value })}
//                         />
//                     </div>

//                     <div className='FileInput'>
//                         <label htmlFor="file">Choose file:</label><br />
//                         <input type="file" id="file" name="file" onChange={handleFileChange}/>
//                     </div>

//                     <div >
//                         <label >Created By:</label><br/>
//                         <input
//                             type="number"
//                             name="CreatedBy"
//                             placeholder="Enter Created By"
//                             value={values.CreatedBy}
//                             onChange={e => setValues({ ...values, CreatedBy: e.target.value })}
//                         />
//                     </div>

//                     <div className="button-submit">
//                         <button type="submit">Update Inventory</button>
//                     </div>
//                     <div className="button-close">
//                         <button onClick={handleClose}>Cancel</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default CardComponent;

import React, { useState, useEffect } from 'react';
import './popup.css'; // Import your CSS file
import axios from 'axios';

function CardComponent({initialData,selectedEditId,handleClose}) {
    const [values, setValues] = useState({
        InventoryTypeId: initialData.InventoryTypeId,
        InventoryName: initialData.InventoryName,
        employeeId: initialData.employeeId,
        CreatedBy: initialData.CreatedBy,
        file: null // to store the selected file
    });
    const [inventoryTypes, setInventoryTypes] = useState([]);
    const [employees, setEmployees] = useState([]);
    
   


    useEffect(() => {
        fetchInventoryTypes();
        fetchEmployees();
    }, []);

    const fetchInventoryTypes = async () => {
        try {
            const response = await fetch('https://localhost:7166/api/inventory_type/inventory_types');
            if (!response.ok) {
                throw new Error('Failed to fetch inventory types');
            }
            const inventoryTypes = await response.json();
            setInventoryTypes(inventoryTypes);
        } catch (error) {
            console.error('Error fetching inventory types:', error);
        }
    };

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

    const handleFileChange = (e) => {
        setValues({ ...values, file: e.target.files[0] });
    };

    const handleImageChange = (e) => {
        setValues({ ...values, image: e.target.files[0]})
    }

   
   

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('file', values.file);

            const otherData = {
                InventoryTypeId: values.InventoryTypeId,
                InventoryName: values.InventoryName,
                employeeId: values.employeeId,
                CreatedBy: values.CreatedBy
            };

            formData.append('otherData', JSON.stringify(otherData));

            const res = await axios.put(`https://localhost:7166/api/inventory/update/${selectedEditId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(res);
            handleClose();

        } catch (err) {
            console.log(err);
        }
    };
  
    const handleCancel = () => {
        handleClose(); // Call the handleClose function to close the popup window
    };
   

    return (
        <div className="popup">
            <div className="popup-inner">
                <form onSubmit={handleSubmit}>
                    <div className="InventorySelect">
                        <label className='Inventory-label'>Select inventory type:</label>
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
                    </div>

                    <div className="employeeSelect">
                        <label className ='inventory-label'>Assign to: </label>
                        <div className='mb-3'>
                            <label htmlFor="employeeId">Employee ID:</label>
                            <input
                                type ="number"
                                name ="employeeId"
                                className='form-control'
                                placeholder="Enter Employee ID"
                                value={values.employeeId}
                                onChange={e => setValues({ ...values, employeeId: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className = 'Inventoryname'>
                        <label className = "InventoryName-label">Inventory Name:</label><br/>
                        <input
                            type="text"
                            name="InventoryName"
                            className='form-control'
                            placeholder="Enter Inventory Name"
                            value={values.InventoryName}
                            onChange={e => setValues({ ...values, InventoryName: e.target.value })}
                        />
                    </div>

                    <div className='FileInput'>
                        <label htmlFor ="file">Choose file:</label><br/>
                        <input type="file" id="file" name="file" onChange={handleFileChange}/>
                    </div>
                    <div className='FileInput'>
                        <label htmlFor ="file">Choose file:</label><br/>
                        <input type="file" id="file" name="file" onChange={handleImageChange}/>
                    </div>

                    <div>
                        <label >Created By:</label><br/>
                        <input
                            type="number"
                            name="CreatedBy"
                            placeholder="Enter Created By"
                            value={values.CreatedBy}
                            onChange={e => setValues({...values, CreatedBy: e.target.value})}
                        />
                    </div>

                    <div className="button-submit">
                        <button type="submit">Update Inventory</button>
                    </div>
                    <div className="button-close">
                        <button onClick={handleCancel} >Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CardComponent;

