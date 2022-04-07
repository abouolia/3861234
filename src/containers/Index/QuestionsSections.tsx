import React from 'react';
import { FieldArray } from 'formik';
import { useDeepCompareEffect } from 'react-use';

import { QuestionsSectionRoot } from './QuestionsSections.style';
import { QuestionSection } from './QuestionSection';
import { Questions } from '../../data';
import { useQuestionsFormContext } from './QuestionsSectionsFormik';

/**
 *
 * @returns {JSX.Element}
 */
function QuestionsFields() {
  const { values } = useQuestionsFormContext();

  return values.questions.map((question, index) => (
    <QuestionSection
      key={index}
      id={`question-${index + 1}`}
      title={question.question}
      leftImage={question.image}
      options={question.options.map((o) => ({ label: o.value }))}
      totalQuestionsLength={Questions.length}
      questionIndex={index}
    />
  ));
}

/**
 * Redirects the another page once all questions have answer.
 */
function useRedirectOnceAllQuestionsHaveAnswer() {
  const { submitForm, values } = useQuestionsFormContext();

  useDeepCompareEffect(() => {
    const noneAnswered = values.questions.filter(
      (question) => typeof question.selected === 'undefined'
    );
    if (noneAnswered.length === 0) {
      submitForm();
    }
  }, [values]);
}

/**
 * Questions sections binded with Formik array.
 * @returns {JSX.Element}
 */
export function QuestionsSectionsFields() {
  // Redirects the target page once all questions have answer.
  useRedirectOnceAllQuestionsHaveAnswer();

  return (
    <QuestionsSectionRoot id={'questions'}>
      <FieldArray
        name="questions"
        render={(arrayHelpers) => <QuestionsFields />}
      />
    </QuestionsSectionRoot>
  );
}
