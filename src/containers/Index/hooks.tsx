import React from 'react';
import { useFormikContext } from 'formik';

export const useQuestionsForm = () => {
  const { values } = useFormikContext();

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
