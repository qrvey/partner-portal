import React from 'react';
import ReactModal from 'react-modal';
import { IoClose } from 'react-icons/io5';  // Importing the close icon from Io5 set
import "../VariablesModal/styles/varmodal.css";


const Modal = ({ isOpen, onRequestClose, content }) => {
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
          color: 'silver',
          height: 'max-content',
          maxHeight: '90vh',
          width: 'max-content',
          maxWidth: '45%',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '50px',
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
      <div>
        <div className='custom-modal--title'>{content.title1}<div className='custom-modal--color' style={{ backgroundColor: content.color1 }}></div></div>
        <img src={content.image1} alt={content.title1} />

        <div className='custom-modal--title custom-modal--margin-top'>{content.title2}<div className='custom-modal--color' style={{ backgroundColor: content.color2 }}></div></div>
        <img src={content.image2} alt={content.title2} />
      </div>
    </ReactModal>
  );
};

export default Modal;
