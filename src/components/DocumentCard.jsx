import React from 'react';

const DocumentCard = ({ document, onStatusChange, onDelete }) => {
  return (
    <div className="document-card" style={cardStyle}>
      <p>
        <strong>Status:</strong> {document.status}
      </p>
      <a href={document.fileLink} target="_blank" rel="noopener noreferrer">
        <button style={linkButtonStyle}>View Document</button>
      </a>
      <div style={buttonContainerStyle}>
        <button
          onClick={() => onStatusChange(document.id, 'validated')}
          style={buttonStyle}
        >
          Validate
        </button>
        <button
          onClick={() => onStatusChange(document.id, 'rejected')}
          style={buttonStyle}
        >
          Reject
        </button>
        <button onClick={() => onDelete(document.id)} style={buttonStyle}>
          Delete
        </button>
      </div>
    </div>
  );
};

const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  marginBottom: '15px',
  width: '300px',
};

const linkButtonStyle = {
  padding: '8px 15px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  textDecoration: 'none',
};

const buttonContainerStyle = {
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'space-between',
};

const buttonStyle = {
  padding: '6px 10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default DocumentCard;
