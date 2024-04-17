import React, { useState } from 'react';
import './CheckFileInput.css'; // Import your CSS file

function CustomFileInput() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    return (
        <div className="custom-file-input">
            <label htmlFor="file-input" className="file-label">
                {/* Customize the button appearance */}
                Choose File
            </label>
            <input
                type="file"
                id="file-input"
                className="file-input"
                onChange={handleFileChange}
            />
            {/* Display the selected file name */}
            <div className="file-display">{selectedFile ? selectedFile.name : "No file chosen"}</div>
        </div>
    );
}

export default CustomFileInput;
