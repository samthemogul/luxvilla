"use client"

import React, { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notificationOpen, setNotificationOpen] = useState(false);

  return (
    <NotificationContext.Provider value={{ notificationOpen, setNotificationOpen }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
