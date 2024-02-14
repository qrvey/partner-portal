import React, { useState } from 'react';
import './NotificationSidebar.css';
import EmailQueryModal from '../EmailQueryModal/EmailQueryModal'; // Asume que este es tu componente modal para el email
import NotificationModal from '../NotificationModal/NotificationModal'; 

function NotificationSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');


  const handleEmailQuery = (email) => {
    setUserEmail(email); // Guarda el email capturado
    setIsEmailModalOpen(false); // Cierra el modal de consulta de email
    setIsNotificationModalOpen(true); // Abre el modal de notificaciones
  };
  
  // Ejemplo de array de notificaciones:
  const notifications = [
    {
      title: "Qrvey 8.3",
      description: "Version 8.3 of the Qrvey platform is now available to customers. This version includes several new features and performance improvements.",
      link: "/docs/release-notes/v8/release-last"
    },
    {
      title: "NodeJS Deprecation",
      description: "AWS has announced that it is deprecating NodeJS 12, 14, and 16. To avoid any issues as a result of this deprecation, upgrade your instances of the Qrvey platform as described in this announcement.",
      link: "/docs/release-notes/announcements"
    },
  ];





  return (
    <div>
      <button className='notifications-component' onClick={() => setIsOpen(!isOpen)}>
        <i className="fas fa-bell"></i>
      </button>
      <div className={`notification-sidebar ${isOpen ? 'open' : ''}`}>
        <div className='notification-header'>
          <i className="fas fa-bell"></i>
          <p>What’s New</p>
        </div>
        <button className="close-btn" onClick={() => setIsOpen(false)}>X</button>
        <div className='notification-list'>
          {notifications.map((notification, index) => (
            <div key={index} className='notification-content'>
              <div className='notification-list-header'>
                <div className='highlights-icons icon-release'></div>
                <b>{notification.title}</b>
              </div>
              <div className='notification-list-content'>
                {notification.description}
              </div>
              <a href={notification.link} className='notification-list-link'>Learn More</a>
            </div>
          ))}
        </div>
        <button style={{color: 'black'}} onClick={() => setIsEmailModalOpen(true)}>Notification Settings</button>
      </div>
      <EmailQueryModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} onEmailSubmit={handleEmailQuery} />
      <NotificationModal isOpen={isNotificationModalOpen} onClose={() => setIsNotificationModalOpen(false)} userEmail={userEmail} /* Aquí pasarías las props necesarias */ />
    </div>
  );
}

export default NotificationSidebar;
