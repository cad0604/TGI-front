"use client";
import React, { createContext, useContext, useEffect } from "react";

const AuthenticationContext = createContext<undefined>(undefined);

export const AuthenticationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const contextValue = undefined;
  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};
