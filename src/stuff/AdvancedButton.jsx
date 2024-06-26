// AdvancedButton.js

import React from 'react';
import './AdvancedButton.css'; // Import the CSS file for styling

const AdvancedButton = ({ children, onClick,type }) => {
  return (
    <button type={type} className="advanced-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default AdvancedButton;
