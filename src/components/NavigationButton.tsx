import React from "react";
import {
  NavButtonRoot,
  NavToggle,
  NavToggleIcon
} from "./NavigationButton.style";

export function NavigationButton({ onClick }) {
  return (
    <NavButtonRoot onClick={onClick}>
      <NavToggle>
        <NavToggleIcon />
      </NavToggle>
    </NavButtonRoot>
  );
}
