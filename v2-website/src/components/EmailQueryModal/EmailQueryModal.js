import React, { useState } from 'react';
import Modal from 'react-modal';
import './EmailQueryModal.css';

const EmailQueryModal = ({ isOpen, onClose, onEmailSubmit }) => {
  const [userEmail, setUserEmail] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateEmail(email)) {
      onEmailSubmit(email);
      setEmailError(''); 
    } else {
      setEmailError('Please enter a valid email address.');
    }
  };

  return (
    <Modal style={{
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 9999
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
    }} isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
      <button className='close-btn-email-modal' onClick={onClose}>
      </button>
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
        {emailError && <div style={{color: 'red'}}>{emailError}</div>}
        <button style={{color:'#FF5300'}} type="submit">OK</button>
      </form>
    </Modal>
  );
};

export default EmailQueryModal;
