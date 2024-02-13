import React, { useState } from 'react';
import Modal from 'react-modal'; // Asegúrate de tener esta librería instalada
import './EmailQueryModal.css'

const EmailQueryModal = ({ isOpen, onClose, onEmailSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onEmailSubmit(email);
  };

  return (
    <Modal style={{
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 99999999
      },
      content: {
        color: 'black',
        height: 'max-content',
        maxHeight: '90vh',
        backgroundColor: 'white',
        width: '500px',
        maxWidth: '50%',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '30px',
        borderRadius: '20px',
      }
    }} isOpen={isOpen} onRequestClose={onClose}>
      <form className='EmailQueryModal-form' onSubmit={handleSubmit}>
        <h2>Notifications Preferences</h2>
        <p>Enter your email address to set notifications preferences</p>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder='Type Email'
        />
        <button style={{color:'#FF5300'}} type="submit">OK</button>
      </form>
    </Modal>
  );
};

export default EmailQueryModal;
