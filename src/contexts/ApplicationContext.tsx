import React from 'react';

export interface ApplicationContextProps {
  isOverlayOpen: boolean;
  setOverlayOpen?: (toggle: boolean) => void;
  toggleOverlay?: () => void;
}

const defaultApplicationContext = {
  isOverlayOpen: false,
};

export const ApplicationContext = React.createContext<ApplicationContextProps>(
  defaultApplicationContext
);

interface ApplicationProviderProps {
  children: JSX.Element | JSX.Element[];
}

export function ApplicationProvider({ children }: ApplicationProviderProps) {
  const [isOverlayOpen, setOverlayOpen] = React.useState<boolean>(false);

  const toggleOverlay = React.useCallback(() => {
    setOverlayOpen(!isOverlayOpen);
  }, [isOverlayOpen]);

  const value = {
    isOverlayOpen,
    toggleOverlay,
    setOverlayOpen,
  };

  return <ApplicationContext.Provider value={value} children={children} />;
}

export const useApplicationContext = () => React.useContext(ApplicationContext);
