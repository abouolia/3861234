import React from 'react';
import { useQuestionsFormContext } from './QuestionsSectionsFormik';

interface UnansweredQuestionForm {
  getNextUnansweredIndex: (fromIndex: number) => number;
  getBackwardUnansweredIndex: (fromIndex: number) => number;
  getUnansweredIndex: (fromIndex: number) => number | null;
}

/**
 * Retrieves questions form API to get the next, backward unanswered question.
 * @returns {UnansweredQuestionForm}
 */
export const useQuestionsForm = (): UnansweredQuestionForm => {
  const { values } = useQuestionsFormContext();

  // Retrieves the next index of unanswered question.
  const getNextUnansweredIndex = React.useCallback(
    (fromIndex: number) => {
      const nextUnansweredIndex = values.questions.findIndex(
        (question, index) =>
          fromIndex < index && typeof question.selected === 'undefined'
      );
      return nextUnansweredIndex;
    },
    [values]
  );

  // Retrieves the backward index of unanswered question.
  const getBackwardUnansweredIndex = React.useCallback(
    (fromIndex: number) => {
      const nextUnansweredIndex = values.questions.findIndex(
        (question, index) =>
          fromIndex > index && typeof question.selected === 'undefined'
      );
      return nextUnansweredIndex;
    },
    [values]
  );

  // Retrieves the next or backward index of unanswered question.
  const getUnansweredIndex = React.useCallback(
    (fromIndex: number) => {
      const nextIndex = getNextUnansweredIndex(fromIndex);
      const prevIndex = getBackwardUnansweredIndex(fromIndex);

      return nextIndex !== -1 ? nextIndex : prevIndex !== -1 ? prevIndex : null;
    },
    [getNextUnansweredIndex]
  );

  return {
    getUnansweredIndex,
    getNextUnansweredIndex,
    getBackwardUnansweredIndex,
  };
};
