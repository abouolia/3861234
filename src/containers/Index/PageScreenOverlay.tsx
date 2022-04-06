import React from "react";
import {
  ScreenOverlay,
  ScreenOverlayContent,
  ScreenMenu,
  ScreenMenuItem,
  PageScreenOverlayFade
} from "../../components";
import { useApplicationContext } from "../../contexts";

interface PageScreenOverlayTransitionProps {
  isOpen: boolean;
  children: JSX.Element | JSX.Element[];
}

/**
 * Animated page screen overlay.
 */
function PageScreenOverlayTransition({
  isOpen,
  children
}: PageScreenOverlayTransitionProps) {
  return (
    <PageScreenOverlayFade in={isOpen}>
      <ScreenOverlay>{children}</ScreenOverlay>
    </PageScreenOverlayFade>
  );
}

/**
 * Landing page screen overlay.
 * @returns {JSX.Element}
 */
export function PageScreenOverlay(): JSX.Element {
  const { isOverlayOpen } = useApplicationContext();

  return (
    <PageScreenOverlayTransition isOpen={isOverlayOpen}>
      <ScreenOverlayContent>
        <ScreenMenu>
          <ScreenMenuItem href="#">Home</ScreenMenuItem>
          <ScreenMenuItem href="#">Travel Personalities</ScreenMenuItem>
          <ScreenMenuItem href="#">Book a Trip</ScreenMenuItem>
        </ScreenMenu>
      </ScreenOverlayContent>
    </PageScreenOverlayTransition>
  );
}
