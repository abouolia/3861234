import styled from "styled-components";
import { LandviewSection } from "./LandviewSection";

export const QuestionSectionLeft = styled.div`
  padding-right: 57.5px;
  width: 50%;
`;

export const QuestionSectionRight = styled.div`
  padding-left: 57.5px;
  width: 50%;
`;

export const QuestionTitle = styled.h1`
  font-size: 32px;
  line-height: 1.2;
  letter-spacing: -1px;
  color: #2b2b2b;
  margin: 0;
`;

export const QuestionIndex = styled.div`
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 1.42;
  letter-spacing: 0.2em;
  color: #ff5a5f;
  text-transform: uppercase;
  font-weight: 700;
`;

export const QuestionPicture = styled.div`
  img {
    max-width: 100%;
  }
`;

export const QuestionSectionRoot = styled(LandviewSection)`
  display: flex;
  max-width: 1144px;
  padding-left: 25px;
  padding-right: 25px;
  margin: 0 auto;
`;

export const QuestionVerCenter = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
`;

export const QuestionOptions = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  padding-top: 30px;
`;
