import React from 'react';
import ReactModal from 'react-modal';
import { IoClose } from 'react-icons/io5';  // Importing the close icon from Io5 set


const Modal = ({ isOpen, onRequestClose, children }) => {
  return (
    <ReactModal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          zIndex: 99999999
        },
        content: {
          color: 'lightsteelblue',
          height: '90vh',
          width: '70%',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }
      }}
    >
        <IoClose 
        size={30} 
        style={{ 
          position: 'absolute', 
          top: '10px', 
          right: '10px', 
          cursor: 'pointer' 
        }}
        onClick={onRequestClose}
      />
      {children}
    </ReactModal>
  );
};

export default Modal;
