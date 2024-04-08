import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Modal from './Modal'; // Import your modal component

// Set up pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = ({ pdfUrl, thumbnailUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <img src={thumbnailUrl} alt="Thumbnail" className='thumbnail-image' onClick={openModal} style={{height:"80px",width:"80px"}}/>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <Document file={pdfUrl}>
          <Page pageNumber={2} />
          {/* Add more <Page> components if needed */}
        </Document>
      </Modal>
    </>
  );
};

export default PdfViewer;
