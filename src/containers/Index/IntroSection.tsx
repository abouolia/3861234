import React from 'react';
import { LandviewSection } from '../../components';
import {
  IntroLineVertical,
  IntroSectionRoot,
  IntroSectionInner,
  IntroLogo,
  IntroTitle,
  IntroDesc,
  IntroTakeQuiz,
  IntroSlideDownButton,
} from './IntroSection.style';
import { LogoUrl } from '../../data';
import { useQuestionsNavigator } from '../../contexts';

/**
 * Introduction section
 * @returns {JSX.Element}
 */
export function IntroSection(): JSX.Element {
  const questionsNavigator = useQuestionsNavigator();

  // Handle slide down button.
  const handleSlideDownBtn = React.useCallback(() => {
    questionsNavigator.moveToFirstQuestion();
  }, []);

  return (
    <LandviewSection id={'intro'}>
      <IntroLineVertical />

      <IntroSectionRoot>
        <IntroSectionInner>
          <IntroLogo>
            <img src={LogoUrl} alt={'BuildAppeal Logo'} />
          </IntroLogo>
          <IntroTitle>Build Appeal Trip Matcher</IntroTitle>
          <IntroDesc>
            Can’t decide where to roam this year? We’ve got you covered. Take
            our quiz to find out your Travel Personality – and we’ll take care
            of the rest.
          </IntroDesc>

          <IntroTakeQuiz>Take the quiz!</IntroTakeQuiz>
          <IntroSlideDownButton onClick={handleSlideDownBtn} />
        </IntroSectionInner>
      </IntroSectionRoot>
    </LandviewSection>
  );
}
