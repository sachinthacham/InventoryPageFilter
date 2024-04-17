import React from 'react';
import './ImageInput.css';

function ImageInput({ button_label_1, onChange, button_label_3 }) {
    return (
        <div className='imageInput'>
    <div>
        <label htmlFor="imageFile" className="custom-file-upload">
            { button_label_1}
        </label>
    </div>
    <input
        type="file"
        id="imageFile"
        name="imageFile"
        onChange={onChange}
        style={{ display: "none", border: "2px solid #d44694" }}
    />
    <input
        type='text'
        id="imageFile"
        readOnly
        value={button_label_3}
        className="custom-file-upload2"
        style={{ border: "2px solid #d44694" }}
    /> 
</div>
    );
}

export default ImageInput;
