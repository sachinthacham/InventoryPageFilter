import React from 'react'
import './DisplayValue.css'

export default function DisplayValue({value}) {
  return (
    
        <div className="inputBox">
            <input type="text" value={value} readonly />
            <span>selected inventory type</span>
            
        </div>
       
      
   
  )
}