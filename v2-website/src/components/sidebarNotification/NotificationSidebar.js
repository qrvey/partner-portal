import React, { useState } from 'react';
import './NotificationSidebar.css';

function NotificationSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Ejemplo de array de notificaciones:
  const notifications = [
    {
      title: "Customizing the Appearance Using CSS",
      description: "This article provides guidelines for properly using CSS to customize the visual theme of embedded widgets.",
      link: "/docs/software-developer/customizing-css-variables"
    },
    {
      title: "Download Manager",
      description: "Introduced in version 8.2, Download Manager provides a central location to access and manage exported files.",
      link: "/docs/composer/Managing%20Your%20User%20Profile/download-manager"
    },
    {
      title: "Using Standardized Syntax",
      description: "Version 8.2 enables you to create formulas using a standardized language that works with any database engine supported by the Qrvey platform.",
      link: "/docs/composer/Working%20with%20Data/Datasets/Analyze/Formula%20Builder/formula-builder-standardized-syntax"
    },
    {
      title: "Introduction to the Qrvey Platform",
      description: "The Qrvey platform is an all-in-one analytics solution that enables SaaS providers to put cutting-edge analytics into the hands of their users. This article contains essential information required to understand how to work with the Qrvey platform.",
      link: "/docs/getting-started/intro-to-qrvey"
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
