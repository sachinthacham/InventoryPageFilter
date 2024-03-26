import React, { useState } from 'react';
import './DropdownMenu.css'; // Import the CSS file for styling

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-container">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                Click me
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    <li className="dropdown-item">Item 1</li>
                    <li className="dropdown-item">Item 2</li>
                    <li className="dropdown-item">Item 3</li>
                </ul>
            )}
        </div>
    );
}

export default DropdownMenu;
