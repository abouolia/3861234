import styled from "styled-components";

export const ScreenOverlay = styled.div`
  position: fixed;
  z-index: 2000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  background-color: #fff;
`;

export const ScreenOverlayContent = styled.div`
  display: flex;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
`;

export const ScreenMenu = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  width: 100%;
`;

export const ScreenMenuItem = styled.a`
  display: block;
  font-size: 64px;
  line-height: 1.25;
  letter-spacing: -1.5px;
  color: #2b2b2b;
  margin-bottom: 0;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  padding: 4px 0;

  &:hover,
  &:focus {
    color: #ff5a5f;
  }
`;
