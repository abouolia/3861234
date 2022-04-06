import styled from "styled-components";

export const QuestionRadio = styled.div`
  margin-right: 10px;
  position: absolute;
`;

interface QuestionOptionProps {
  isChecked?: boolean;
}

export const QuestionOptionLabel = styled.div`
  padding-left: 40px;
  font-size: 18px;
  line-height: 1.22;
  letter-spacing: -0.2px;
  color: #444;
`;
export const QuestionOptionRoot = styled.li<QuestionOptionProps>`
  border: 2px solid transparent;
  border-bottom: 2px solid rgba(238, 238, 238, 0.4);

  &:first-child {
    border-top: 2px solid rgba(238, 238, 238, 0.4);
  }
  &:hover {
    border: 2px solid #ff717b;
  }

  ${(props) =>
    props.isChecked &&
    `
    border: 2px solid rgba(255,90,95,.8);
    background-color: rgba(255,90,95,.8);
    color: #fff;

    & ${QuestionOptionLabel} {
      color: #fff;
    }
`}
`;

export const QuestionOptionAnchor = styled.button`
  display: flex;
  padding: 28px 43px 32px 31px;
  position: relative;
  background: transparent;
  border: 0;
  text-align: inherit;
  font-weight: inherit;
  color: inherit;

  svg {
    fill: currentColor;
  }
`;
