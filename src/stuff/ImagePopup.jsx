import React, { useState } from 'react';
import './ImagePopup.css'; // Import your CSS file

function ImageThumbnail({ imageUrl }) {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    return (
        <div>
            <img src={imageUrl} alt="Thumbnail" onClick={handleClick} className="thumbnail-image"/>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <img src={imageUrl} alt="Full Size" className="modal-image" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImageThumbnail;
