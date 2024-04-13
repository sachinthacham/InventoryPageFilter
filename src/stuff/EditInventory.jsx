// import React, { useState, useEffect } from 'react';
// import './popup.css'; // Import your CSS file
// import axios from 'axios';

// function CardComponent({
//     inventoryName,
//     inventoryTypeId,
//     employeeId,
//     fileUrl,
//     imageUrl,
//     selectedEditId,
//     handleClose}) 
// {
//     const [values, setValues] = useState({
//         InventoryTypeId: inventoryTypeId,
//         InventoryName: inventoryName,
//         employeeId: employeeId,
//         CreatedBy: 2,
//         Deleted: false,
//         file: null,
//         image: null // to store the selected file
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setValues(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleFileChange = (e) => {
//         setValues({ ...values, file: e.target.files[0] });
//     };

//     const handleImageChange = (e) => {
//         setValues({ ...values, image: e.target.files[0]})
//     };

//         const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const formData = new FormData();
//             formData.append('file', values.file);
//             formData.append('image',values.image);

//             const otherData = {
//                 InventoryTypeId: values.InventoryTypeId,
//                 InventoryName: values.InventoryName,
//                 employeeId: values.employeeId,
//                 CreatedBy: 2,
//                 Deleted:values.Deleted
//             };

//             formData.append('otherData', JSON.stringify(otherData));

//             const res = await axios.put(`https://localhost:7166/api/inventory/update/${selectedEditId}`, formData, {
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

//     const handleCancel = () => {
//         handleClose();
//     };


  
//   // Extracting just the filename from the URL
//   let filename = imageUrl.split('/').pop();
//   // Removing the UUID part
//   filename = filename.replace(/^[^-]+-[^-]+-[^-]+-[^-]+-/, '');

//     return (
//         <div className="popup">
//             <div className="popup-inner">
//                 <form onSubmit={handleSubmit}>
//                     <div className="InventorySelect">
//                         <label className='Inventory-label'>Select inventory type:</label>
//                         <div className='mb-2'>
//                             <label htmlFor="InventoryTypeId">Inventory Type ID:</label>
//                             <input
//                                 type="text"
//                                 name="InventoryTypeId"
//                                 className='form-control'
//                                 placeholder="Enter Inventory Type ID"
//                                 value={values.InventoryTypeId}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>

//                     <div className="employeeSelect">
//                         <label className='inventory-label'>Assign to:</label>
//                         <div className='mb-3'>
//                             <label htmlFor="employeeId">Employee ID:</label>
//                             <input
//                                 type="text"
//                                 name="employeeId"
//                                 className='form-control'
//                                 placeholder="Enter Employee ID"
//                                 value={values.employeeId}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>

//                     <div className='Inventoryname'>
//                         <label className="InventoryName-label">Inventory Name:</label><br />
//                         <input
//                             type="text"
//                             name="InventoryName"
//                             className='form-control'
//                             placeholder="Enter Inventory Name"
//                             value={values.InventoryName}
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div className='FileInput'>
//                         <label htmlFor="file">Choose file:</label><br />
//                         <input type="file" id="file" name="file" onChange={handleFileChange}/>
//                     </div>

//                     <div className='imageInput'>
//                         <label htmlFor="image">Choose image:</label><br/>
//                         <input type="file" id="image"  name="image" onChange={handleImageChange}/>
//                         <label>{filename}</label>
//                         {/* <div className="file-display">{selectedFile ? selectedFile.name : "No file chosen"}</div> */}

//                          {/* <img src={"https://localhost:7166/" + imageUrl} style={{ width: "50px", height: "50px" }} />  */}
//                     </div>

//                     <div className="button-submit">
//                         <button type="submit">Update Inventory</button>
//                     </div>
//                     <div className="button-close">
//                         <button onClick={handleCancel}>Cancel</button>
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

function CardComponent({
    inventoryName,
    inventoryTypeId,
    employeeId,
    fileUrl,
    imageUrl,
    selectedEditId,
    handleClose}) 
{
    const [values, setValues] = useState({
        InventoryTypeId: inventoryTypeId,
        InventoryName: inventoryName,
        employeeId: employeeId,
        CreatedBy: 2,
        Deleted: false,
        file: null,
        image:null, // Set initial image filename if available
        selectedImage: imageUrl ? imageUrl.split('/').pop() : null,
        selectedFile: fileUrl ? fileUrl.split('/').pop() : null
    });
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setValues({ ...values, file: file , selectedFile: file?.name});
    };

    const handleImageChange = (e) => {
        const img = e.target.files[0];
        setValues({ ...values, image: img, selectedImage: img?.name }); // Update both state properties
      };
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('file', values.file);
            formData.append('image',values.image);

            const otherData = {
                InventoryTypeId: values.InventoryTypeId,
                InventoryName: values.InventoryName,
                employeeId: values.employeeId,
                CreatedBy: 2,
                Deleted:values.Deleted
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
        handleClose();
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
                                type="text"
                                name="InventoryTypeId"
                                className='form-control'
                                placeholder="Enter Inventory Type ID"
                                value={values.InventoryTypeId}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="employeeSelect">
                        <label className='inventory-label'>Assign to:</label>
                        <div className='mb-3'>
                            <label htmlFor="employeeId">Employee ID:</label>
                            <input
                                type="text"
                                name="employeeId"
                                className='form-control'
                                placeholder="Enter Employee ID"
                                value={values.employeeId}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className='Inventoryname'>
                        <label className="InventoryName-label">Inventory Name:</label><br />
                        <input
                            type="text"
                            name="InventoryName"
                            className='form-control'
                            placeholder="Enter Inventory Name"
                            value={values.InventoryName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='FileInput'>
                       
                        <input type="file" id="file" name="file" onChange={handleFileChange} style={{color:"white",position:"relative",left:"100px",top:"200px"}}/>
                        <label>{values.selectedFile || "No image selected"}</label>
                    </div>

                    <div className="imageInput">
        
        <input type="file" id="image" name="image" onChange={handleImageChange} style={{color:"white"}}/>
        <label>{values.selectedImage || "No image selected"}</label> {/* Display selected filename or placeholder */}
      </div>

                    <div className="button-submit">
                        <button type="submit">Update Inventory</button>
                    </div>
                    <div className="button-close">
                        <button onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CardComponent;

