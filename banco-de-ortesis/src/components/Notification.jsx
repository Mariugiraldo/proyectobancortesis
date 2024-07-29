// src/components/Notification.jsx
import React from 'react';
import { MdOutlineNotifications } from "react-icons/md";

const Notification = ({ message }) => {
  return (
    <div>
      <MdOutlineNotifications className='h-6 w-6' />
    </div>
  );
};

export default Notification;
