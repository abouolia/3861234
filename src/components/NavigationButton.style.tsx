import styled from "styled-components";

export const NavButtonRoot = styled.div`
  display: block;
  padding: 0;
  text-align: right;
  position: fixed;
  right: 0;
  margin: 51px 34px 0 0;
  z-index: 10000;
`;

export const NavToggle = styled.div`
  width: 20px;
  height: 25px;
  display: block;
  position: relative;
  cursor: pointer;
`;

export const NavToggleIcon = styled.div`
  border-bottom: 3px solid #4a4a4a;
  display: block;
  height: 3px;
  padding-top: 8px;

  &::before,
  &::after {
    border-top: 3px solid #4a4a4a;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
  }
  &::before {
    top: 4px;
  }
  &::after {
    bottom: 4px;
  }
`;
