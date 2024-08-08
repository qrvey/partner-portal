import React, { useState } from "react";
import "./NotificationSidebar.css";
import EmailQueryModal from "../EmailQueryModal/EmailQueryModal"; // Asume que este es tu componente modal para el email
import NotificationModal from "../NotificationModal/NotificationModal";
import { Toaster } from "react-hot-toast";

function NotificationSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleEmailQuery = (email) => {
    setUserEmail(email);
    setIsEmailModalOpen(false);
    setIsNotificationModalOpen(true);
  };

  const notifications = [
    {
      title: "Required Update for 8.5.1",
      description:
        "Attention 8.5.1 customers: for any 8.5.1 instance deployed prior to 08/05/2024, an update is required to ensure you are running the latest images.",
      link: "/docs/release-notes/announcements",
    },
    {
      title: "Qrvey 8.6",
      description:
        "Version 8.6 of the Qrvey platform is now available to customers. This version includes several new feature enhancements and performance improvements.",
      link: "/docs/release-notes/v8/release-last",
    },
    {
      title: "Qrvey 8.5",
      description:
        "Version 8.5 (LTS) of the Qrvey platform is now available to customers. This version includes several new features and performance improvements.",
      link: "/docs/release-notes/v8/release-8.5",
    },
    {
      title: "End-of-life Schedule",
      description:
        "We've added a new article that lists the features and endpoints that have been scheduled for deprecation. All features and endpoints will be supported for (1) year after the release date of the LTS version that contains the alternative.",
      link: "/docs/release-notes/end-of-life",
    },
  ];

  return (
    <div>
      <button
        className="notifications-component"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-bell"></i>
      </button>
      <div className={`notification-sidebar ${isOpen ? "open" : ""}`}>
        <div className="notification-header">
          <i className="fas fa-bell"></i>
          <p>What’s New</p>
        </div>
        <button className="close-btn" onClick={() => setIsOpen(false)}></button>
        <div className="notification-list">
          {notifications.map((notification, index) => (
            <div key={index} className="notification-content">
              <div className="notification-list-header">
                <div className="highlights-icons icon-release"></div>
                <b>{notification.title}</b>
              </div>
              <div className="notification-list-content">
                {notification.description}
              </div>
              <a href={notification.link} className="notification-list-link">
                Learn More
              </a>
            </div>
          ))}
        </div>
        <button
          className="notifications-modal"
          onClick={() => setIsEmailModalOpen(true)}
        >
          Notification Settings
        </button>
      </div>
      <EmailQueryModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        onEmailSubmit={handleEmailQuery}
      />
      <NotificationModal
        isOpen={isNotificationModalOpen}
        onClose={() => setIsNotificationModalOpen(false)}
        userEmail={userEmail}
      />
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
          },
        }}
        containerStyle={{
          zIndex: 999999999999,
        }}
      />
    </div>
  );
}

export default NotificationSidebar;
