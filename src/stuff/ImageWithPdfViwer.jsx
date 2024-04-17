import React from 'react';

const ImageWithPDFViewer = ({ imageUrl2,  pdfUrl }) => {
  const handleImageClick = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div>
      <img src={imageUrl2} alt="PDF thumbnail" onClick={handleImageClick} height={"100px"} width={"100px"} />
    </div>
  );
};

export default ImageWithPDFViewer;
