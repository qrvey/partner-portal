import React, { useState } from 'react';
import './NotificationSidebar.css';

function NotificationSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Ejemplo de array de notificaciones:
  const notifications = [
    {
      title: "Download Manager",
      description: "Introduced in version 8.2, Download Manager provides a central location to access and manage exported files.",
      link: "#"
    },
    {
      title: "Formula Builder",
      description: "Version 8.2 enables you to create formulas using a standardized language that works with any database engine supported by the Qrvey platform.",
      link: "#"
    },
    {
      title: "Advanced Settings",
      description: "Provides advanced configuration options for your dataset, including the ability to set the number of shards allocated to the dataset’s ES index.",
      link: "#"
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
