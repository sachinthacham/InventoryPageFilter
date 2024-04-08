import React, { useState, useEffect } from 'react';
import './popup.css'; // Import your CSS file
import axios from 'axios';
import CardComponent from './EditInventory';
import ImagePopup from './ImagePopup';
import PdfViewer from './PdfView';
import DeleteIcon from '../Assests/DeleteIcon'
import EditIcon from '../Assests/EditIcon'
import DropdownIcon from '../Assests/DropdownIcon'

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
        setSelectedInventoryDetails(selectedInventoryDetails);
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
                            //className='initial-card'
                            className={`initial-card ${expandedInventoryId === inventory.inventoryId ? 'expanded' : ''}`}
                            onClick={() => handleCardClick(inventory.inventoryId)}
                        >
                            <div>
                                <ul>
                                    <li className="inventorylist_init">
                                        <div className={`dropdownicon ${expandedInventoryId === inventory.inventoryId ? 'expanded' : ''}`} >
                                            <DropdownIcon/>
                                        </div>
                                   <div className='inventorylist_init-name'>
                                        {inventory.inventoryName}
                                    </div>   
                                        
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
                                    <button style={{width:"30px",backgroundColor:"white",border:"white"}} ><DeleteIcon className="deleteIcon" size="30px" color="red"/></button>
                                    <button style={{width:"30px",backgroundColor:"white",border:"white"}} onClick={() => handleEditClick(inventory.inventoryId)}><EditIcon className="editIcon"  size="30px" color="black"/></button>
                                </div>
                               
                                <p className='InventoryName-ex'>Inventory Name: {selectedInventoryDetails.inventoryName}</p>
                                <div className='InventoryType-ex'>
                                <p >Inventory Type ID: {selectedInventoryDetails.inventoryTypeId}</p>
                                </div>
                                <div className='AssignedEmployee'>
                                <p >Assigned to:{selectedInventoryDetails.employeeId}</p>
                                </div>

                               
                                <div className='InventoryFile-ex'>
                                    
                                    <PdfViewer  pdfUrl={"https://localhost:7166/" + selectedInventoryDetails.fileUrl} thumbnailUrl = {"https://localhost:7166/"+"uploads/60ac5160-0411-42bd-bca0-87da4291182e_async await in js.png"}/>
                                </div>
                                <div className='InventoryImage-ex'>
                                    
                                    
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
            <CardComponent 
            inventoryName={selectedInventoryDetails.inventoryName} 
            inventoryTypeId={selectedInventoryDetails.inventoryTypeId}
            employeeId={selectedInventoryDetails.employeeId}
            fileUrl={selectedInventoryDetails.fileUrl}
            imageUrl={selectedInventoryDetails.imageUrl}
            initialData={selectedInventoryDetails}
            selectedEditId={selectedEditId} 
            handleClose={handleClosePopup} />
        )}
        </div> 
          
    </>
    
    );
};

export default InventoryCard;






