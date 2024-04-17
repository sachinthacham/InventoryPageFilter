
// import React, { useState,useEffect } from 'react';
// import './popup.css'; // Import your CSS file
// import axios from 'axios'; 
// import InventoryTypeSelect from './InventoryTypeFilterComponent'
// import EmployeeSelect from './EmployeeFilterComponent';
// import AdvancedButton from './AdvancedButton';

// function CardComponent({ handleClose }) {
//     const [values, setValues] = useState({
//         InventoryTypeId: '',
//         InventoryName: '',
//         employeeId: '',
//         CreatedBy: '',
//         Deleted: false
//     });
//     const [inventoryTypes, setInventoryTypes] = useState([]);
// const [selectedInventoryTypeId, setSelectedInventoryTypeId] = useState('');
// const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
// const [employees, setEmployees] = useState([]);

// useEffect(() => {
  
//     fetchInventoryTypes();
//     fetchEmployees();
    
//   }, [selectedInventoryTypeId,selectedEmployeeId]);
  
//   const fetchInventoryTypes = async () => {
//     try {
//         const response = await fetch('https://localhost:7166/api/inventory_type/inventory_types');
//         if (!response.ok) {
//             throw new Error('Failed to fetch inventory types');
//         }
//         const data = await response.json();
//         setInventoryTypes(data);
//     } catch (error) {
//         console.error('Error fetching inventory types:', error);
//     }
//   };
    
//   const fetchEmployees = async () => {
//     try {
//         const response = await fetch('https://localhost:7166/api/employee/Employee');
//         if (!response.ok) {
//             throw new Error('Failed to fetch employees');
//         }
//         const data = await response.json();
//         setEmployees(data);
//     } catch (error) {
//         console.error('Error fetching employees:', error);
//     }
// };
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const res = await axios.post("https://localhost:7166/api/inventory/add", values);
//             console.log(res);
//             handleClose();
//         } catch (err) {
//             console.log(err);
//         }
//     };
//     const handleEmployeeChange = (selectedEmployeeId) => {
        
//         setSelectedEmployeeId(selectedEmployeeId);
//     };

//     const handleInventoryTypeChange = (selectedInventoryTypeId) => {
       
//         setSelectedInventoryTypeId(selectedInventoryTypeId);
//     };
//     return (
//         <div className="popup">
//             <div className="popup-inner">
//                 <form onSubmit={handleSubmit}>
//                   <div  className="InventorySelect">
//                     <label className='Inventory-label'>Select inventory type:</label>
//                   <InventoryTypeSelect
//              inventoryTypes={inventoryTypes} 
//              selectedInventoryTypeId={selectedInventoryTypeId} 
//              handleInventoryTypeChange={handleInventoryTypeChange}
            
//               />
//                   </div>
                    
          
//                 <div className="employeeSelect">
//                     <label className='inventory-label'>Assign to: </label>
//                      <EmployeeSelect
//                 employees={employees}
//                 selectedEmployeeId={selectedEmployeeId}
//                 handleEmployeeChange={handleEmployeeChange}
                
//             /></div>
           

//                     <div className='Inventoryname'>
//                         <label className="InventoryName-label">Inventory Name:</label><br/>
//                         <input
//                             type="text"
//                             name="InventoryName"
//                             className='form-control'
//                             placeholder="Enter Inventory Name"
//                             value={values.InventoryName}
//                             onChange={e => setValues({ ...values, InventoryName: e.target.value })}
//                         />
//                     </div>


                 
//                    <div className = "button-submit">
//                         <AdvancedButton type = "submit" >Add New Inventory</AdvancedButton>
//                    </div>
//                     <div className="button-close">
//                         <AdvancedButton onClick={handleClose} >cancle</AdvancedButton>
//                     </div>
                   
                  
                    
//                 </form>
//             </div>
//         </div>
//     );
// }
// import React, { useState, useEffect } from 'react';
// import './popup.css'; // Import your CSS file
// import axios from 'axios';

// function CardComponent({ handleClose }) {
//     const [values, setValues] = useState({
//         InventoryTypeId: '',
//         InventoryName: '',
//         employeeId: '',
//         CreatedBy: 2,
//         Deleted: false,
//         file: null,
//         image:null // to store the selected file
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
//         setValues({...values, image:e.target.files[0]})
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const formData = new FormData();
//             formData.append('file', values.file)
//             formData.append('image',values.image);

//             const otherData = {
//                 InventoryTypeId: values.InventoryTypeId,
//                 InventoryName: values.InventoryName,
//                 employeeId: values.employeeId,
//                 CreatedBy: 2,
//                 Deleted: values.Deleted
//             };

//             formData.append('otherData', JSON.stringify(otherData));

//             const res = await axios.post("https://localhost:7166/api/inventory/add", formData, {
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
                               
//                                 name="InventoryTypeId"
//                                 className='form-control'
//                                 placeholder="Enter Inventory Type ID"
//                                 value={values.InventoryTypeId}
//                                 onChange={e => setValues({ ...values, InventoryTypeId: e.target.value })}
//                             />
//                         </div>
//                     </div>

//                     <div className="employeeSelect">
//                         <label className='inventory-label'>Assign to: </label>
//                         <div className='mb-3'>
//                             <label htmlFor="employeeId">Employee ID:</label>
//                             <input
                                
//                                 name ="employeeId"
//                                 className='form-control'
//                                 placeholder="Enter Employee ID"
//                                 value={values.employeeId}
//                                 onChange={e => setValues({ ...values, employeeId: e.target.value })}
//                             />
//                         </div>
//                     </div>

//                     <div className='Inventoryname'>
//                         <label className="InventoryName-label">Inventory Name:</label><br/>
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
//                     <div className='imageInput'>
//                         <label htmlFor="file">Choose file:</label><br />
//                         <input type="file" id="file" name="file" onChange={handleFileChange}/>
//                     </div>

                   

//                     <div className="button-submit">
//                         <button type="submit" onClick={handleClose} >Add New Inventory</button>
//                     </div>
//                     <div className="button-close">
//                         <button onClick={handleClose} >Cancel</button>
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
import EmployeeSelect from './EmployeeFilterComponent';
import InventoryTypeSelect from './InventoryTypeFilterComponent';
import  InputField from '../Assests/InputField'
import DisplayValue from '../Assests/DisplayValue'
import FileInput from '../Assests/FileInput'
import  AdvancedButton from '../stuff/AdvancedButton'
import ImageInput from '../Assests/ImageInput'


function CardComponent({ handleClose }) {
    const [values, setValues] = useState({
        InventoryTypeId: '',
        InventoryName: '',
        employeeId: '',
        CreatedBy: 2,
        Deleted: false,
        file: null,
        image: null // to store the selected image file
    });

    const [inventoryTypes, setInventoryTypes] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
    const [selectedInventoryTypeId, setSelectedInventoryTypeId] = useState('');

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
            const data = await response.json();
            setInventoryTypes(data);
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
        const file = e.target.files[0];
        setValues({ ...values, file: file });
    };
    
    const handleImageChange = (e) => {
        const img = e.target.files[0];
        setValues({ ...values, image: img }); // Update both state properties
    };
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('file', values.file);
            formData.append('image', values.image);

            const otherData = {
                InventoryTypeId:selectedInventoryTypeId,
                InventoryName: values.InventoryName,
                employeeId:selectedEmployeeId,
                CreatedBy: 2,
                Deleted: values.Deleted
            };

            formData.append('otherData', JSON.stringify(otherData));

            const res = await axios.post("https://localhost:7166/api/inventory/add", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(res);
            handleClose();
            // Reset form values
            setValues({
                InventoryTypeId: 5,
                InventoryName: '',
                employeeId: 4,
                CreatedBy: 2,
                Deleted: false,
                file: null,
                image: null
            });
        } catch (err) {
            console.log(err);
        }
    };

    const handleEmployeeChange = (selectedEmployeeId) => {
        
        setSelectedEmployeeId(selectedEmployeeId);
    };

    const handleInventoryTypeChange = (selectedInventoryTypeId) => {
       
        setSelectedInventoryTypeId(selectedInventoryTypeId);
    };

    const getInventoryTypeName = (selectedInventoryTypeId) => {
        const inventory = inventoryTypes.find(type => type.inventoryTypeId === selectedInventoryTypeId);
        return inventory ? inventory.inventoryType : '';
    };

    const getEmployeeName = (selectedEmployeeId) => {
        const employee = employees.find(employee => employee.employeeId === selectedEmployeeId);
        return employee ? employee.firstName +" " + employee.lastName: ''; 
    }

    


    return (
        <div className="popup">
            <div className="popup-inner">
                <form onSubmit={handleSubmit}>
                    <h3 className='Add-Inventory-heading'>Add Inventory</h3>
                  
                       
                       
                      
                       
                           
                            <div className='InventorySelect'>
                                <InventoryTypeSelect
                                inventoryTypes={inventoryTypes} 
                                selectedInventoryTypeId={selectedInventoryTypeId} 
                                handleInventoryTypeChange={handleInventoryTypeChange}
                                />
                            </div>
                               
                       
                  

                    
                        
                        
                       
                        
                            <div className='employeeSelect'>
                                <EmployeeSelect
                                    employees={employees}
                                    selectedEmployeeId={selectedEmployeeId}
                                    handleEmployeeChange={handleEmployeeChange}
                                />
                            
                       
                    </div>

                    <div className='Inventoryname'>
                             <InputField
                                placeholder="Enter Inventory Name"
                                value={values.InventoryName}
                                onChange={e => setValues({ ...values, InventoryName: e.target.value })}
                            
                                
                            />  
                     </div>  
                     <div className='InventoryType-fill'>
                            <DisplayValue
                                placeholder="Selected Inventory Type"
                                type="text"
                                name="Inventory type"
                                value={getInventoryTypeName(selectedInventoryTypeId)}
                                
                            /> 
                     </div>
                       <div className='Employee-fill'>
                   <DisplayValue
                                placeholder="Assigned To"
                                type="text"
                                name="employee"
                                value={getEmployeeName(selectedEmployeeId)}
                                
                            /> 
                     </div>    
                       
                     {/* <label className ='Inventory-label'>Inventory Type ID:{getInventoryTypeName(selectedInventoryTypeId)}</label>
                     <label className='employee-label'>Assign to: {getEmployeeName(selectedEmployeeId)}</label> */}
                    {/* <div className='FileInput'>
                        <label htmlFor="file">Choose file:</label><br/>
                        <input type="file" id="file" name="file" onChange={handleFileChange}/>
                    </div> */}
                    
                    <div className='FileInput'>
    <div>
        <label htmlFor="fileInput" className="custom-file-upload">
            Choose file
        </label>
    </div>
    <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        style={{ display: "none", border: "2px solid #d44694" }}
    />
    <input
        type='text'
        readOnly
        value={values.file ? values.file.name : "No Files selected"}
        className="custom-file-upload2"
        style={{ border: "2px solid #d44694" }}
    />
</div>

                   
                   

<div className='imageInput'>
    <div>
        <label htmlFor="imageFile" className="custom-file-upload">
            Choose image
        </label>
    </div>
    <input
        type="file"
        id="imageFile"
        name="imageFile"
        onChange={handleImageChange}
        style={{ display: "none", border: "2px solid #d44694" }}
    />
    <input
        type='text'
        readOnly
        value={values.image ? values.image.name : "No images selected"}
        className="custom-file-upload2"
        style={{ border: "2px solid #d44694" }}
    /> 
</div>
                



                  

                   

                    <div className = "button-submit">
                    <AdvancedButton
                        type="submit"
                    >Submit</AdvancedButton>
                       
                    </div>
                    <div className="button-close">
                       
                        <AdvancedButton
                        onClick={handleClose}
                        type="submit"
                        
                    >Cancel</AdvancedButton>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CardComponent;
     

   
