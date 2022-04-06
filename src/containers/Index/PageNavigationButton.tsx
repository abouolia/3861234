import React from "react";
import { NavigationButton } from "../../components";
import { useApplicationContext } from "../../contexts";

export function PageNavigationButton() {
  const { setOverlayOpen, isOverlayOpen } = useApplicationContext();

  const handleNavBtnClick = React.useCallback(() => {
    setOverlayOpen(!isOverlayOpen);
  }, [setOverlayOpen, isOverlayOpen]);

  return <NavigationButton onClick={handleNavBtnClick} />;
}
