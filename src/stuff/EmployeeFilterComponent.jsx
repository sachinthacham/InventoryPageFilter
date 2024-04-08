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

function EmployeeSelect({ employees, selectedEmployeeId, handleEmployeeChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (employeeId) => {
        selectedEmployeeId = employeeId ; 
        handleEmployeeChange(employeeId);
        setIsOpen(false); // Close the dropdown after selection
        
    };

    return (
        <div className="employee-select">
            <div className="dropdown-container">
            <button htmlFor = "employee" className = "dropdown-toggle" onClick = {toggleDropdown}>
                select a Employee
            </button>
            {isOpen && (
                <ul id="employee" className='dropdown-menu'>
                    {/* <li className='option-list' onClick={() => handleSelect('')}>
                        Select an employee
                    </li> */}
                    {employees.map(employee => (
                        <li key={employee.employeeId} value={employee.employeeId} className = 'dropdown-item' onClick = {() => handleSelect(employee.employeeId)}>
                            {employee.firstName} {employee.lastName}
                        </li>
                    ))}
                </ul>
            )}
            </div>
        </div>
    );
}

export default EmployeeSelect;


