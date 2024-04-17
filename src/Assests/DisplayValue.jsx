import React from 'react'
import './DisplayValue.css'

export default function DisplayValue({value,placeholder}) {
  return (
    
        <div className="inputBox">
            <input type="text" value={value} readOnly />
            <span>{placeholder}</span>
            
        </div>
       
      
   
  )
}