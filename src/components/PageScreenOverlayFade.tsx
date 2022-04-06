import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

export const FADE_TIMEOUT = 1000;

const StyledCSSTransition = styled(CSSTransition)`
  opacity: 0;
  display: none;

  &.appear {
    opacity: 0;
    z-index: 1;
  }
  &.appear.appear-active {
    opacity: 1;
    transition: opacity 200ms linear;
  }

  &.enter {
    opacity: 0;
    z-index: 1;
    display: block;
  }

  &.enter.enter-active {
    opacity: 1;
    transition: opacity 200ms linear;
  }
  &.enter-done {
    display: block;
    opacity: 1;
  }

  &.exit {
    opacity: 1;
    display: block;
  }

  &.exit.exit-active {
    opacity: 0;
    transition: opacity 200ms linear;
  }

  &.exit-done {
    opacity: 0;
    display: none;
  }
`;

const defaultProps = {
  in: false,
  timeout: FADE_TIMEOUT,
};

export function PageScreenOverlayFade(props) {
  return (
    <StyledCSSTransition {...props} timeout={200} className={'fade'}>
      {props.children}
    </StyledCSSTransition>
  );
}

PageScreenOverlayFade.defaultProps = defaultProps;
