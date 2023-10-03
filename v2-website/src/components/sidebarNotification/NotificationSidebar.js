import React, { useState } from 'react';
import './NotificationSidebar.css';

function NotificationSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Ejemplo de array de notificaciones:
  const notifications = [
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
      </div>
    </div>
  );
}

export default NotificationSidebar;
