import React, { useState } from 'react';
import './popup.css';
import DeleteIcon from '../Assests/DeleteIcon';
import EditIcon from '../Assests/EditIcon';
import  CardComponent_Type from './EditInventoryType'
import './TypeExpand.css';
import axios from 'axios';

const InventoryTypeCard = ({ inventoryTypes }) => {
    const [selectedInventoryType, setSelectedInventoryType] = useState(null);
    const [selectedEditId, setSelectedEditId] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [deleteId, setDeleteId] = useState();

    const handledelete = async (deleteinventoryType) => {
       
        try {
            const confirmed = window.confirm('Are you sure you want to delete this inventory type?');
            if(confirmed){
            const data = {
                inventoryType:deleteinventoryType,
                Deleted :true,
            };
            const response = await axios.put(`https://localhost:7166/api/inventory_type/delete/${deleteId}`, data);
            window.alert(`Inventory Type  deleted ${deleteinventoryType} successfully:`);
            
        }
        } catch (err) {
            window.alert('You cant delete this');
            console.error('Error updating inventory:', err);
        }
    };


  

    const handleDeleteClick = (deleteId,deleteinventoryType) => {
        
            setDeleteId(deleteId);
            handledelete(deleteinventoryType);
        
    };

    const handleEditClick = (inventoryTypeId, inventoryType) => {
        setSelectedInventoryType(inventoryType);
        setSelectedEditId(inventoryTypeId);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="inventory-card-container">
            {inventoryTypes.map((inventoryType) => (
                <div key={inventoryType.inventoryTypeId} className="initial-card">
                    
                    <div className='inventoryTypeName'>
                            {inventoryType.inventoryType}
                    </div>
                      

                    <div className="button_arrange">
                            <button style={{backgroundColor: "white", border: "white",padding: "0",height:"0" }} onClick={() => handleDeleteClick(inventoryType.inventoryTypeId,inventoryType.inventoryType)}>
                                <DeleteIcon className="deleteIcon" size="30px" color="red"/>
                            </button>
                            <button style={{ backgroundColor: "white", border: "white",height:"0"}} onClick={() => handleEditClick(inventoryType.inventoryTypeId, inventoryType)}>
                                <EditIcon className="editIcon" size="30px" color="black"/>
                            </button>
                    </div>  
                </div>
               ))}
                {selectedInventoryType && selectedEditId && showPopup && (
                   < CardComponent_Type 
                        inventoryType={selectedInventoryType.inventoryType} 
                       selectedEditId={selectedEditId} 
                       handleClose={handleClosePopup}
                       
                   />
               )}           
                
        </div>
    );
};

export default InventoryTypeCard;





// const handledelete = async () => {
       
//     try {
//         const confirmed = window.confirm('Are you sure you want to delete this inventory?');
//         if(confirmed){
//         const formData = new FormData();
//         const otherData = {
//             deleted:true,
//             deletedBy:3
//         };
//         formData.append('otherData', JSON.stringify(otherData));
//         const res = await axios.put(`https://localhost:7166/api/inventory/delete/${deleteId}`, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         });
//         console.log(res);
//         window.alert('Inventory deleted successfully');
//     }
//     } catch (err) {
//         console.log(err);
//     }
// };




