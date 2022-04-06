import React from "react";
import { SlideButtonBase } from "./SlideButtonBase";
import { ArrowUp } from "../icons";

export function SlideUpButton({ ...props }) {
  return (
    <SlideButtonBase {...props}>
      <ArrowUp />
    </SlideButtonBase>
  );
}