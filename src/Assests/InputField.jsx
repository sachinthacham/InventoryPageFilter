import React from 'react'
import './InputField.css'

export default function InputField({placeholder, value, onChange}) {
  return (
    
        <div className="inputBox">
            <input type="text"   value={value}  onChange={onChange} />
            <span>{placeholder}</span>
            
        </div>
       
      
   
  )
}

