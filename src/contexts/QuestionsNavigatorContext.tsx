import React from 'react';
import Scroll from 'react-scroll';

export const QuestionsNavContext = React.createContext();

interface ApplicationProviderProps {
  children: JSX.Element | JSX.Element[];
}

const configuration = {
  duration: 1500,
  delay: 0,
  smooth: 'easeInOutQuint',
};

export function QuestionsNavigatorProvider({
  children,
}: ApplicationProviderProps) {
  const questionIndex = React.useRef(-1);

  const moveToIntro = React.useCallback(() => {
    Scroll.scroller.scrollTo(`intro`, configuration);
  }, []);

  const moveToFirstQuestion = React.useCallback(() => {
    questionIndex.current = 1;
    const newIndex = questionIndex.current;

    Scroll.scroller.scrollTo(`question-${newIndex}`, configuration);
  }, []);

  const moveToIndexQuestionSection = React.useCallback((index: number) => {
    questionIndex.current = index;
    const newIndex = questionIndex.current;

    Scroll.scroller.scrollTo(`question-${newIndex}`, configuration);
  }, []);

  const moveToNextQuestion = React.useCallback(() => {
    const index = questionIndex.current;
    questionIndex.current = Math.min(index + 1, 8);

    const newIndex = questionIndex.current;

    Scroll.scroller.scrollTo(`question-${newIndex}`, configuration);
  }, []);

  const moveToPreviousQuestion = React.useCallback(() => {
    const index = questionIndex.current;
    questionIndex.current = Math.max(index - 1, 0);

    const newIndex = questionIndex.current;

    if (newIndex === 0) {
      return moveToIntro();
    }
    Scroll.scroller.scrollTo(`question-${questionIndex}`, configuration);
  }, []);

  const value = {
    questionIdnex: questionIndex.current,
    moveToFirstQuestion,
    moveToNextQuestion,
    moveToPreviousQuestion,
    moveToIndexQuestionSection
  };

  return <QuestionsNavContext.Provider value={value} children={children} />;
}

export const useQuestionsNavigator = () =>
  React.useContext(QuestionsNavContext);
