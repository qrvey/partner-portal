import React, { useState } from 'react';
import Modal from './Modal';

const ModalButton = ({ content  }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const buttonStyles = {
    backgroundColor: 'transparent',
    color: '#FF5400',
    fontSize: '16px',
    padding: '0',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    outline: 'none'
  };

  const buttonHoverStyles = {
    color: '#FF5400'
  };

  const handleMouseOver = (e) => {
    Object.assign(e.target.style, buttonHoverStyles);
  };

  const handleMouseOut = (e) => {
    Object.assign(e.target.style, buttonStyles);
  };

  return (
    <div>
      <button 
        onClick={() => setModalOpen(true)}
        style={buttonStyles}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Example
      </button>
      <Modal isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)}  content={content}>
      </Modal>
    </div>
  );
};

export default ModalButton;
