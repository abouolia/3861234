import React from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import {
  IntroSection,
  PageNavigationButton,
  PageScreenOverlay,
  QuestionsSectionsForm,
  StickySlideButtons,
} from '../containers/Index';
import { QuestionsNavigatorProvider } from '../contexts/QuestionsNavigatorContext';

const IndexPageRoot = styled.div``;

const IndexPage: NextPage = () => {
  // Avoid to start scrolling the page from the middle when refresh the page.
  React.useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <IndexPageRoot>
      <QuestionsNavigatorProvider>
        <PageNavigationButton />
        <PageScreenOverlay />
        <IntroSection />
        <QuestionsSectionsForm />
        <StickySlideButtons />
      </QuestionsNavigatorProvider>
    </IndexPageRoot>
  );
};

export default IndexPage;
