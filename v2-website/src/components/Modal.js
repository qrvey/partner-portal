import React from 'react';
import ReactModal from 'react-modal';
import { IoClose } from 'react-icons/io5';  // Importing the close icon from Io5 set


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
          height: 'min-content',
          maxHeight: '90vh',
          width: '50%',
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
        <div style={{ display: "flex", fontWeight:'bold', size:"13px", color:"#35373F" }}>{content.title1}<div style={{ padding: "5px", backgroundColor: content.color1, marginLeft: "10px", borderRadius: "5px", width: "20px", height: "20px", marginTop:"2px" }}></div></div>
        <img src={content.image1} alt={content.title1} height={"70%"} />

        <div style={{ display: "flex", fontWeight:"bold", size:"13px", color:"#35373F", marginTop:"20px" }}>{content.title2}<div style={{ padding: "5px", backgroundColor: content.color2, marginLeft: "10px", borderRadius: "5px", width: "20px", height: "20px", marginTop:"2px" }}></div></div>
        <img src={content.image2} alt={content.title2} />
      </div>
    </ReactModal>
  );
};

export default Modal;
