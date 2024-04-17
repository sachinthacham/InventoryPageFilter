import React from 'react';

const PDFViewer = ({ pdfUrl }) => {
  return (
    <div>
      <embed src={pdfUrl} type="application/pdf" width="100%" height="600px" />
    </div>
  );
};

export default PDFViewer;
