import React, { useState, useEffect } from 'react';
import InventoryCard from './InventoryDetails';
import './InventoryType.css';
import CardComponent from './PopupInventoryType'; 
import InventoryTypeCard from './InventoryTypeCard'
import AdvancedButton from './AdvancedButton'

function InventoryType() {
    
    const [inventoryTypes, setInventoryTypes] = useState([]);
   
    //const [selectedInventoryTypeId, setSelectedInventoryTypeId] = useState('');
   
    const [showPopup, setShowPopup] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [activePage, setActivePage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber); // Update current page
        setActivePage(pageNumber); // Update active page
    };

    useEffect(() => {
      
        fetchInventoryTypes();
      
    }, [currentPage] );

   
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
   

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }
    
  

    return (
        <div className='container'>
            <h2 className='heading'>Inventory Type Manager</h2>
            <div className='add-button'>
                <AdvancedButton onClick={togglePopup}>Add New Inventory Type</AdvancedButton>
            </div>
            
            <div className="search-bar" style={{backgroundColor:"green",width:"200px",position:"relative",}}>
                <input
                    type="text"
                    placeholder="Search by inventory name"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{width:"250px", height:"50px"}}
                />
            </div> 
           
            <InventoryTypeCard inventoryTypes={inventoryTypes}/>
           
            {showPopup && <CardComponent handleClose={togglePopup}/>} 
            <div className="pagination">
                {Array.from({ length: Math.ceil(inventoryTypes.length / itemsPerPage) }, (_, i) => i + 1).map(pageNumber => (
                    <button 
                        key={pageNumber} 
                        onClick={() => handleClick(pageNumber)}  
                        className={pageNumber === activePage ? 'active' : ''}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default InventoryType;
