import React from "react";

export const ApplicationContext = React.createContext();

interface ApplicationProviderProps {
  children: JSX.Element | JSX.Element[];
}

export function ApplicationProvider({ children }: ApplicationProviderProps) {
  const [isOverlayOpen, setOverlayOpen] = React.useState<boolean>(false);

  const value = {
    isOverlayOpen,
    setOverlayOpen
  };

  return <ApplicationContext.Provider value={value} children={children} />;
}

export const useApplicationContext = () => React.useContext(ApplicationContext);
