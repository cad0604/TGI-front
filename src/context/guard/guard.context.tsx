"use client";
import React, { createContext, useContext, useEffect } from "react";

const GuardContext = createContext<undefined>(undefined);

export const GuardContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const systemGroup = ["0", "1", "3"];
  const roles = ["pmfwmfwfwnwfwnwnfwfwf"];
  const contextValue = undefined;
  return (
    <GuardContext.Provider value={contextValue}>
      {children}
    </GuardContext.Provider>
  );
};
