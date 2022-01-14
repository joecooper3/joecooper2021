import gsap from "gsap";
import { getLogoLetters } from "@animations/homepage";

export const openNavigation = (nav: HTMLElement): void => {
  const navList = nav.children[0];
  const bottomLine = nav.children[1];

  gsap.to(nav, {
    opacity: 1,
    pointerEvents: "auto",
    duration: 0,
  });
  gsap.to(navList.children, {
    x: 0,
    opacity: 1,
    stagger: 0.15,
    startAt: {
      opacity: 0,
      x: 900,
    },
    duration: 1,
  });
  gsap.to(bottomLine, {
    width: "100%",
    duration: 1,
    startAt: {
      width: "0%",
    },
  });
};

export const closeNavigation = (nav: HTMLElement): void => {
  const navList = nav.children[0];
  const bottomLine = nav.children[1];

  const navListArr = Array.from(navList.children);
  const listReversed = navListArr.reverse();

  gsap.to(listReversed, {
    x: 900,
    stagger: 0.15,
    duration: 1,
  });

  gsap.to(bottomLine, {
    width: "0%",
    duration: 1,
  });
};

export const animateOutLogo = (container: HTMLDivElement): void => {
  const logoLetters = getLogoLetters(container);
  console.log(logoLetters)
  gsap.to(logoLetters, {
    x: -100,
    duration: 1,
    opacity: 0,
  });
};
