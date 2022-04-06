import React from 'react';
import { SlideButtonBase } from './SlideButtonBase';
import { ArrowDown } from '../icons';

export function SlideDownButton({ ...props }) {
  return (
    <SlideButtonBase {...props}>
      <ArrowDown />
    </SlideButtonBase>
  );
}
