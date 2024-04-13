import React from 'react'
import './FileInput.css'
function FileInput({button_label_1,onChange,button_label_2}) {
  return (
  
                    <div className='FileInput'>
                        <label htmlFor="file" className="custom-file-upload">
                            {button_label_1}
                        </label>
                        <label htmlFor="file" className="custom-file-upload2">
                            {button_label_2}
                        </label>
                         <input type="file" id="file" name="file" onChange={onChange} style={{ display: "none" }} />
                    </div>
      
  
  )
}

export default FileInput
