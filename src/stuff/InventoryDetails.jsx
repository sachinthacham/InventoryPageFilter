// import React, { useState,useEffect } from 'react';
// import './ExpandCard.css';
// import DeleteIcon from '../Assests/DeleteIcon';
// import  EditIcon  from '../Assests/EditIcon'
// import CardComponent2 from './CardComponent2';

// const InventoryCard = ({ inventories}) => {
    

//     const [selectedInventoryId, setSelectedInventoryId] = useState();
//     const [selectedInventoryDetails, setSelectedInventoryDetails] = useState(null);
//     const [editFormVisible, setEditFormVisible] = useState(false);
//     const [inventoryDataToEdit, setInventoryDataToEdit] = useState(null);


 

  

  
   
//     useEffect(() => {
//         if (selectedInventoryId) {
//             fetchInventoryDetails();
//         }
//     }, [selectedInventoryId]);


//     const fetchInventoryDetails = async () => {
//         try {
//             const url3 = `https://localhost:7166/api/inventory/inventory/${selectedInventoryId}`;
//             const response = await fetch(url3);
//             if (!response.ok) {
//                 throw new Error('Failed to fetch inventory details');
//             }

//             const data = await response.json();
//             setSelectedInventoryDetails(data);
//         } catch (error) {
//             console.error('Error fetching inventory details:', error);
//         }
//     };

//   const [expandedInventoryId, setExpandedInventoryId] = useState(null);

//   const toggleExpansion = (inventoryId) => {
//     setExpandedInventoryId(inventoryId === expandedInventoryId ? null : inventoryId);
//   };

//   const handleInventoryChange = (inventoryId) => {
//     setSelectedInventoryId(inventoryId);
//   };
 
//   const handleCardClick = (inventoryId) => {
//     toggleExpansion(inventoryId);
//     handleInventoryChange(inventoryId);
//   };
//   const handleEditClick = (inventoryData) => {
//     setInventoryDataToEdit(inventoryData);
//     setEditFormVisible(true);
// };
 

//   return (
//     <div className="inventory-card-container">
//       {inventories.map((inventory) => (
//         <div
//           key={inventory.inventoryId}
//           className={`inventory-card ${expandedInventoryId === inventory.inventoryId ? 'expanded' : ''}`}
//           onClick={() => handleCardClick(inventory.inventoryId)}
         
//         >
//           <ul >
//             <li  className ='inventorylist_init'>
//               {inventory.inventoryName} 
              
//               {inventory.inventoryType}
             
//             <div className='button_arrange'>
//               <button ><DeleteIcon size="30px" color="red"/></button>

//               {editFormVisible ? (
//                 <CardComponent2 
//                     handleClose = {() => setEditFormVisible(false)} 
//                     initialData = {inventoryDataToEdit}
//                     handleEditClick = {handleEditClick} 
//                 />
//             ) : (
//                 <button onClick={() => handleEditClick(inventoryData)}>Edit</button>
//             )}
//             </div>
            
//         </li>
//             {expandedInventoryId === inventory.inventoryId &&
//               selectedInventoryDetails &&
//               selectedInventoryDetails.inventoryId === inventory.inventoryId && ( // Ensure details match inventory
//                 <div className="details">
//                   <p>Inventory Name: {selectedInventoryDetails.inventoryName}</p>
//                   <p>Inventory Type ID: {selectedInventoryDetails.inventoryTypeId}</p>
//                   <div>
//           <h3>Image:</h3>
//           <img src={selectedInventoryDetails.fileUrl} alt="Inventory" style = {{ maxWidth: '50px' }} />
//         </div>
                  

                  

                  
                  
//                 </div>
//               )}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default InventoryCard;


//import DeleteIcon from '../Assests/DeleteIcon';
//import EditIcon from '../Assests/EditIcon';
// import React, { useState, useEffect } from 'react';
// import './ExpandCard.css';
// import CardComponent  from './EditInventory';


// const InventoryCard = ({ inventories }) => {
//     const [selectedInventoryId, setSelectedInventoryId] = useState();
//     const [selectedInventoryDetails, setSelectedInventoryDetails] = useState(null);
//     const [selectedEditDetails,setselectedEditDetails] = useState();
//     const[selectedEditId,setselectedEditId] = useState();
    

   

//     useEffect(() => {
//         if (selectedInventoryId||selectedEditId) {
//             fetchInventoryDetails();
//         }
//     }, [selectedInventoryId,selectedEditId]);

//     const fetchInventoryDetails = async () => {
//         try {
//             const url3 = `https://localhost:7166/api/inventory/inventory/${selectedInventoryId}`;
//             const response = await fetch(url3);
//             if (!response.ok) {
//                 throw new Error('Failed to fetch inventory details');
//             }

//             const data = await response.json();
//             setSelectedInventoryDetails(data);
//             setselectedEditDetails(data);
//         } catch (error) {
//             console.error('Error fetching inventory details:', error);
//         }
//     };

//     const [expandedInventoryId, setExpandedInventoryId] = useState(null);

//     const toggleExpansion = (inventoryId) => {
//         setExpandedInventoryId(inventoryId === expandedInventoryId ? null : inventoryId);
//     };

//     const handleInventoryChange = (inventoryId) => {
//         setSelectedInventoryId(inventoryId);
//     };

//     const handleCardClick = (inventoryId) => {
//         toggleExpansion(inventoryId);
//         handleInventoryChange(inventoryId);
//     };

//     const handleInventoryEditChange = (inventoryId) => {
//         setselectedEditId(inventoryId);
//     };


//     const handleEdit = (selectedEditDetails) => {
//       setSelectedInventoryId(selectedEditDetails.inventoryId);
//       handleInventoryEditChange(selectedEditDetails.inventoryId)
//     }

  
//     const handleClose = () => {
//       setSelectedInventoryId(null);
//   };


//     return (
//         <div className="inventory-card-container">
//             {inventories.map((inventory) => (
//                 <div
//                     key={inventory.inventoryId}
//                     className={`inventory-card ${expandedInventoryId === inventory.inventoryId ? 'expanded' : ''}`}
//                     onClick={() => handleCardClick(inventory.inventoryId)}
//                 >
//                     <ul>
//                         <li className="inventorylist_init">
//                             {inventory.inventoryName}
//                             {inventory.inventoryType}
//                             <div className="button_arrange">
//                                 <button >delete</button>
//                                 <button onClick={()=>handleEdit(inventory)} > Edit </button>
//                             </div>
//                         </li>
//                         {expandedInventoryId === inventory.inventoryId &&
//                             selectedInventoryDetails &&
//                             selectedInventoryDetails.inventoryId === inventory.inventoryId && (
//                                 <div className="details">
//                                     <p>Inventory Name: {selectedInventoryDetails.inventoryName}</p>
//                                     <p>Inventory Type ID: {selectedInventoryDetails.inventoryTypeId}</p>
//                                     <div>
//                                         <h3>Image:</h3>
//                                         <img src={selectedInventoryDetails.fileUrl} alt="Inventory" style={{ maxWidth: '50px' }} />
//                                     </div>
//                                 </div>
//                             )}
//                     </ul>
//                 </div>
//             ))}
//              {selectedEditDetails && (
//                 <CardComponent handleClose={handleClose} initialData={selectedEditDetails} />
//             )}
           
//         </div>
//     );
// };

// export default InventoryCard;

// import React, { useState, useEffect } from 'react';
// import './popup.css'; // Import your CSS file
// import axios from 'axios';
// import CardComponent  from './EditInventory';

// const InventoryCard = ({ inventories }) => {
//     const [selectedInventoryId, setSelectedInventoryId] = useState(null);
//     const [selectedInventoryDetails, setSelectedInventoryDetails] = useState(null);
//     const [selectedEditId, setSelectedEditId] = useState();
//     const [expandedInventoryId, setExpandedInventoryId] = useState(null);
//     const [showPopup, setShowPopup] = useState(false);
    
   
  

//     useEffect(() => {
//         if (selectedInventoryId) {
//             fetchInventoryDetails();
//         }
//     }, [selectedInventoryId]);

//     const fetchInventoryDetails = async () => {
//         try {
//             const url3 = `https://localhost:7166/api/inventory/inventory/${selectedInventoryId}`;
          
//             const response = await fetch(url3);
//             if (!response.ok) {
                
//                 throw new Error('Failed to fetch inventory details');
//             }

//             const data = await response.json();
//             setSelectedInventoryDetails(data);
//         } catch (error) {
            
//             console.error('Error fetching inventory details:', error);
//         }
//     };

    

//     const toggleExpansion = (InventoryId) => {
        
//         setExpandedInventoryId(InventoryId === expandedInventoryId ? null :InventoryId);
//     };

   

//     const handleInventoryChange = (selectedInventoryId) => {
//         setSelectedInventoryId(selectedInventoryId);
//     };

//     const handleCardClick = (selectedInventoryId) => {
       
//         toggleExpansion(selectedInventoryId);
//         handleInventoryChange(selectedInventoryId);
       
//     };
    
    
//     const handleEditClick = (selectedEditId) => {
        
//             setSelectedEditId(selectedEditId); 
//             handleOpen();
        
//     };
   
//     const handleOpen = () => {
//         setShowPopup(!showPopup);
//     }

    
//     return (
//         <>
//         <div className = "inventory-card-container">
//             {inventories.map((inventory) => (
                
              
                
//                 <div
                    
//                     key={inventory.inventoryId}
//                     className={`inventory-card ${expandedInventoryId === inventory.inventoryId ? 'expanded': ''}`}
//                     onClick={() => handleCardClick(inventory.inventoryId)}
//                 >
//                     <div>
//                     <ul>
//                         <li className="inventorylist_init">
                            
                            
//                             {inventory.inventoryName}
//                             {inventory.inventoryType}
//                             <div className="button_arrange">
//                                 <button >delete</button>
//                                 <button onClick={() => handleEditClick(inventory.inventoryId)}> Edit </button>
//                             </div>
                          
//                         </li>
                        
//                         {expandedInventoryId === inventory.inventoryId &&
//                             selectedInventoryDetails &&
//                             selectedInventoryDetails.inventoryId === inventory.inventoryId && (
//                                 <div className="details">
//                                     <p>Inventory Name: {selectedInventoryDetails.inventoryName}</p>
//                                     <p>Inventory Type ID: {selectedInventoryDetails.inventoryTypeId}</p>
                                    
//                                     <div>
//                                         <h3>Image:</h3>
//                                          <iframe src={"https://localhost:7166/" + selectedInventoryDetails.fileUrl} style={{maxWidth:'100px',position:"relative",left:"100px"}}>my pdf</iframe> 
                                        

//                                         {/* <img src={selectedInventoryDetails.fileUrl} } /> */}
//                                     </div>
//                                     <div>
//                                         <img src = {"https://localhost:7166/" + selectedInventoryDetails.imageUrl}  alt = "Inventory" style = {{ maxWidth: '100px' }}/>
//                                     </div>
//                                 </div>
//                             )}
//                     </ul>
//                     </div>
//                 </div>
                
//             ))}
            
//         </div>
//         <div>
//         {selectedInventoryDetails && selectedEditId && showPopup &&(
//         <CardComponent initialData={selectedInventoryDetails} selectedEditId={selectedEditId} showPopup={showPopup}/>
//     )}
//         </div>
//         </>
        
//     );
// };

// export default InventoryCard;


import React, { useState, useEffect } from 'react';
import './popup.css'; // Import your CSS file
import axios from 'axios';
import CardComponent from './EditInventory';
import ImagePopup from './ImagePopup';
import PdfViewer from './PdfView'

const InventoryCard = ({ inventories }) => {
    const [selectedInventoryId, setSelectedInventoryId] = useState(null);
    const [selectedInventoryDetails, setSelectedInventoryDetails] = useState(null);
    const [selectedEditId, setSelectedEditId] = useState();
    const [expandedInventoryId, setExpandedInventoryId] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [showModal, setShowModal] = useState(false);
   

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

    const handleClick = () => {
        setShowModal(true);
    };

    const toggleExpansion = (InventoryId) => {
        setExpandedInventoryId(InventoryId === expandedInventoryId ? null : InventoryId);
    };

    const handleInventoryChange = (selectedInventoryId) => {
        setSelectedInventoryId(selectedInventoryId);
    };

    const handleCardClick = (selectedInventoryId) => {
        toggleExpansion(selectedInventoryId);
        handleInventoryChange(selectedInventoryId);
    };

    const handleEditClick = (selectedEditId) => {
        setSelectedEditId(selectedEditId);
        setShowPopup(true); // Set showPopup to true to open the popup
    };

    const handleClosePopup = () => {
        setShowPopup(false); // Set showPopup to false to close the popup
    };

    
    return (
     <>   
        <div className="inventory-card-container">
                {inventories.map((inventory) => (
                    <>
                        <div
                            key={inventory.inventoryId}
                            className='initial-card'
                            onClick={() => handleCardClick(inventory.inventoryId)}
                        >
                            <div>
                                <ul>
                                    <li className="inventorylist_init">
                                        {inventory.inventoryName}
                                        {inventory.inventoryType}
                                        
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`inventory-card ${expandedInventoryId === inventory.inventoryId ? 'expanded' : ''}`}>
                        {expandedInventoryId === inventory.inventoryId &&
                        selectedInventoryDetails &&
                        selectedInventoryDetails.inventoryId === inventory.inventoryId && (
                            <div className="details">
                                <div className="button_arrange">
                                    <button >delete</button>
                                    <button onClick={() => handleEditClick(inventory.inventoryId)}>Edit</button>
                                </div>
                                <p>Inventory Name: {selectedInventoryDetails.inventoryName}</p>
                                <p>Inventory Type ID: {selectedInventoryDetails.inventoryTypeId}</p>
                                <div>
                                    <h3>File:</h3>
                                    {/* <img src={"https://localhost:7166/"+"uploads/60ac5160-0411-42bd-bca0-87da4291182e_async await in js.png"}/> */}
                                    {/* <i src={"https://localhost:7166/" + selectedInventoryDetails.fileUrl} style={{ maxWidth: '100px', position: "relative", left: "100px" }}>my pdf</iframe> */}
                                    <PdfViewer  pdfUrl={"https://localhost:7166/" + selectedInventoryDetails.fileUrl} thumbnailUrl = {"https://localhost:7166/"+"uploads/60ac5160-0411-42bd-bca0-87da4291182e_async await in js.png"}/>
                                </div>
                                <div>
                                    <h3>Image:</h3>
                                    
                                   <ImagePopup imageUrl = {"https://localhost:7166/" + selectedInventoryDetails.imageUrl}/>
                                </div>
                            </div>
                        )}
                        
                        </div>           
                            
                    </>
                    
                ))}
        
        
                
        </div>
        <div>
        {selectedInventoryDetails && selectedEditId && showPopup && (
            <CardComponent initialData={selectedInventoryDetails} selectedEditId={selectedEditId} handleClose={handleClosePopup} />
        )}
        </div>
    </>
    
    );
};

export default InventoryCard;



