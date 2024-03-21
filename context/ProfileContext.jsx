"use client"

import React, { createContext, useContext, useState } from 'react';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <ProfileContext.Provider value={{ profileOpen, setProfileOpen }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
