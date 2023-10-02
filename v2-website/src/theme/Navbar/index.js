import React from 'react';
import Navbar from '@theme-original/Navbar';
import NotificationSidebar from '../../components/sidebarNotification/NotificationSidebar';

export default function NavbarWrapper(props) {
  return (
    <>
      <Navbar {...props} />
      <NotificationSidebar />
    </>
  );
}
