// import React from 'react';

// function EmployeeSelect({ employees, selectedEmployeeId, handleEmployeeChange }) {
//     return (
//         <>
//         <label htmlFor="employee" className='selectEmployee-label'>Select Employee:</label>
//         <select id="employee" value={selectedEmployeeId} onChange={handleEmployeeChange} className='selectEmployee-input'>
//             <option value="" className='option-list'> Select an employee </option>
//             {employees.map(employee => (
//                 <option key={employee.employeeId} value={employee.employeeId} className='option-list'> {employee.firstName} {employee.lastName} </option>
//             ))}
//         </select>
//         </>
//     );
// }

// export default EmployeeSelect;

import React, { useState } from 'react';
import './DropdownMenu.css'
import DropdownIcon2 from '../Assests/Dropdown2'

function EmployeeSelect({ employees, selectedEmployeeId, handleEmployeeChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (employeeId) => {
        selectedEmployeeId = employeeId;
        handleEmployeeChange(employeeId);
        setIsOpen(false); // Close the dropdown after selection
    };

    return (
        <div className="employee-select">
            <div className="dropdown-container">
                <div className="dropdown-toggle">
                    <label> Select an Employee </label>
                    <button htmlFor="employee" onClick={toggleDropdown}>
                        <DropdownIcon2 className="dropdown-button" size="30px" color="black"/> 
                    </button>
                </div>
                {isOpen && (
                    <ul id="employee" className='dropdown-menu'>
                        {employees.length > 3 ? ( // Check if employees length is greater than 3
                            <div className="scrollable-menu">
                                {employees.map(employee => (
                                    <li key={employee.employeeId} value={employee.employeeId} className='dropdown-item' onClick={() => handleSelect(employee.employeeId)}>
                                        {employee.firstName} {employee.lastName}
                                    </li>
                                ))}
                            </div>
                        ) : (
                            employees.map(employee => (
                                <li key={employee.employeeId} value={employee.employeeId} className='dropdown-item' onClick={() => handleSelect(employee.employeeId)}>
                                    {employee.firstName} {employee.lastName}
                                </li>
                            ))
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default EmployeeSelect;



