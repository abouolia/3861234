import styled from 'styled-components';
import { SlideDownButton } from '../../components/SlideDownButton';
import { LineVertical } from '../../components/LineVertical';

export const IntroSectionRoot = styled.div`
  max-width: 555px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 25px;
  padding-right: 25px;
  height: 100%;

  display: flex;
  text-align: center;
`;

export const IntroSectionInner = styled.div`
  background: #fff;
  margin-top: auto;
  margin-bottom: auto;
`;

export const IntroDesc = styled.p`
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: normal;
  color: #2b2b2b;
  margin-bottom: 118.4px;
`;

export const IntroTitle = styled.h1`
  font-size: 64px;
  line-height: 1;
  color: #2b2b2b;
`;

export const IntroLogo = styled.div`
  img {
    max-width: 63.4px;
  }
`;

export const IntroTakeQuiz = styled.div`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.42;
  letter-spacing: 0.2em;
  color: #ff5a5f;
  margin-bottom: 16px;
  cursor: pointer;
  text-transform: uppercase;
`;

export const IntroSlideDownButton = styled(SlideDownButton)``;

export const IntroLineVertical = styled(LineVertical)`
  z-index: -1;
  top: 50%;
`;
