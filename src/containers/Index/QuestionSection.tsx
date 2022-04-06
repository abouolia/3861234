import React from "react";
import {
  QuestionSectionRoot,
  QuestionVerCenter,
  QuestionSectionLeft,
  QuestionIndex,
  QuestionPicture,
  QuestionSectionRight,
  QuestionTitle,
  LineVertical
} from "../../components";
import { QuestionOptionsField } from "./QuestionOptionsField";

interface QuestionSectionProps {
  id?: string;
  title: string;
  leftImage?: string;
  leftImageAlt?: string;
  options: { label: string }[];

  questionIndex: number;
  totalQuestionsLength: string | number;
}

export function QuestionSection({
  id,
  title,
  leftImage,
  leftImageAlt,
  options,

  questionIndex,
  totalQuestionsLength
}: QuestionSectionProps) {
  return (
    <QuestionSectionRoot id={id}>
      <QuestionVerCenter>
        <QuestionSectionLeft>
          <QuestionIndex>
            Question {questionIndex + 1} / {totalQuestionsLength}{" "}
          </QuestionIndex>
          <QuestionTitle>{title}</QuestionTitle>

          {leftImage && (
            <QuestionPicture>
              <img src={leftImage} alt={leftImageAlt} />
            </QuestionPicture>
          )}
        </QuestionSectionLeft>

        <QuestionSectionRight>
          <QuestionOptionsField
            options={options}
            questionIndex={questionIndex}
          />
        </QuestionSectionRight>
      </QuestionVerCenter>
      <LineVertical />
    </QuestionSectionRoot>
  );
}
