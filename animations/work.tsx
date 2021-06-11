import gsap from "gsap";
import { NextRouter } from "next/router";

export const spinningSquareEnter = (
  container: HTMLDivElement,
  square: HTMLDivElement,
  text: HTMLHeadingElement
): void => {
  gsap.to(container, {
    y: 0,
    ease: "elastic.out(0.5, 0.2)",
    duration: 3.0,
    startAt: { y: -500 },
  });
  gsap.to(text, { opacity: 0.8, duration: 5, startAt: { opacity: 1 } });
};

export const workListEnter = (listArr: HTMLUListElement): void => {
  gsap.to(listArr.children, {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 1,
    stagger: 0.3,
    startAt: {
      y: 50,
    },
  });
};

export const previewImageEnter = (
  container: HTMLDivElement,
  image: HTMLDivElement
): void => {
  gsap.to(container, {
    opacity: 1,
    y: 0,
    rotation: 0,
    scaleX: 1,
    startAt: {
      opacity: 0,
      y: 500,
      rotation: 40,
      scaleX: 0.5,
    },
    duration: 0.5,
  });
  gsap.to(image, {
    scaleX: 1,
    startAt: {
      scaleX: 1.5,
    },
    duration: 0.8,
    ease: "sine.out",
  });
};

export const previewImageExit = (
  container: HTMLDivElement,
) => {
  gsap.to(container, {
    opacity: 0,
    y: -500,
    rotation: -40
  })
}
