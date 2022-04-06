import styled from "styled-components";
import { SlideUpButton, SlideDownButton } from "../../components";

export const StickySlideUpButton = styled(SlideUpButton)`
  position: fixed;
  left: 50%;
  margin-left: -24px;
  z-index: 100;

  top: 40px;
`;
export const StickySlideBottomButton = styled(SlideDownButton)`
  position: fixed;
  left: 50%;
  margin-left: -24px;
  z-index: 100;

  bottom: 40px;
`;
