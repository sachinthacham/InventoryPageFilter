
import React, { useState } from 'react';
import './ExpandCard.css';
import DeleteIcon from '../Assests/DeleteIcon';
import EditIcon from '../Assests/EditIcon';

const InventoryCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`inventory-card ${expanded ? 'expanded' : ''}`} onClick={toggleExpansion}>
      <div className='first_apperarance'>
        <div className="title"> {item.name}</div>
        <div className='button-container'>
          <button>
            <DeleteIcon size="30px" />
          </button>
          <button>
            <EditIcon size="30px" />
          </button>
        </div>
      </div>

      {expanded && (
        <div className="details">
          <p>Category: {item.category}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>
        </div>
      )}
    </div>
  );
};

export default InventoryCard;



