import React from 'react';
import { HideOn } from '../../components';
import { useQuestionsNavigator } from '../../contexts';
import {
  StickySlideBottomButton,
  StickySlideUpButton,
} from './StickySlideButtons.style';

/**
 * Sticky slide up/down buttons.
 * @returns {JSX.Element}
 */
export function StickySlideButtons(): JSX.Element {
  const questionsNavigator = useQuestionsNavigator();

  const handleBottomBtnClick = () => {
    questionsNavigator.moveToNextQuestion();
  };
  const handleTopBtnClick = () => {
    questionsNavigator.moveToPreviousQuestion();
  };
  return (
    <HideOn inverse divID="questions">
      <StickySlideBottomButton onClick={handleBottomBtnClick} />
      <StickySlideUpButton onClick={handleTopBtnClick} />
    </HideOn>
  );
}
