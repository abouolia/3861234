import React from 'react';
import { scroller } from 'react-scroll';
import { Questions } from '../data';

export const QuestionsNavContext = React.createContext();

interface ApplicationProviderProps {
  children: JSX.Element | JSX.Element[];
}

const configuration = {
  duration: 1500,
  delay: 0,
  smooth: 'easeInOutQuint',
};

const MAX_LENGH = Questions.length;

export function QuestionsNavigatorProvider({
  children,
}: ApplicationProviderProps) {
  const questionIndex = React.useRef(-1);

  // Scroll to the intro section.
  const moveToIntro = React.useCallback(() => {
    scroller.scrollTo(`intro`, configuration);
  }, []);

  // Scroll to to the first question section.
  const moveToFirstQuestion = React.useCallback(() => {
    questionIndex.current = 1;
    const newIndex = questionIndex.current;

    scroller.scrollTo(`question-${newIndex}`, configuration);
  }, []);

  // Scroll to the given question index.
  const moveToIndexQuestionSection = React.useCallback((index: number) => {
    questionIndex.current = index;
    const newIndex = questionIndex.current;

    scroller.scrollTo(`question-${newIndex}`, configuration);
  }, []);

  // Scroll to the next question index.
  const moveToNextQuestion = React.useCallback(() => {
    const index = questionIndex.current;
    questionIndex.current = Math.min(index + 1, MAX_LENGH);

    const newIndex = questionIndex.current;

    scroller.scrollTo(`question-${newIndex}`, configuration);
  }, []);

  // Scroll to the previous question index.
  const moveToPreviousQuestion = React.useCallback(() => {
    const index = questionIndex.current;
    questionIndex.current = Math.max(index - 1, 0);

    const newIndex = questionIndex.current;

    if (newIndex === 0) {
      return moveToIntro();
    }
    scroller.scrollTo(`question-${newIndex}`, configuration);
  }, []);

  const value = {
    questionIdnex: questionIndex.current,
    moveToFirstQuestion,
    moveToNextQuestion,
    moveToPreviousQuestion,
    moveToIndexQuestionSection,
  };

  return <QuestionsNavContext.Provider value={value} children={children} />;
}

export const useQuestionsNavigator = () =>
  React.useContext(QuestionsNavContext);
