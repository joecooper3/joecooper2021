import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type EnterAnimationProps = {
  container: HTMLDivElement;
  headline: HTMLHeadingElement;
  whiteHeadline: HTMLHeadingElement;
  leadDeveloper: HTMLElement;
  copyContainer: HTMLDivElement;
};

export const enterAnimations = ({
  container,
  headline,
  whiteHeadline,
  leadDeveloper,
  copyContainer,
}: EnterAnimationProps): void => {
  const tl = gsap.timeline();
  tl.to([container, headline, whiteHeadline, leadDeveloper, copyContainer], {
    opacity: 0,
    duration: 0,
  });
  tl.to(container, {
    y: 0,
    opacity: 1,
    ease: "power2.out",
    duration: 0.45,
    startAt: { y: 300, opacity: 0 },
  });
  tl.to([headline, whiteHeadline], {
    y: 0,
    opacity: 1,
    ease: "power2.out",
    duration: 0.45,
    startAt: { y: 300, opacity: 0 },
  });
  if (leadDeveloper) {
    tl.to(leadDeveloper, {
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1.5,
      startAt: { y: 30, opacity: 0 },
    });
  }
  tl.to(copyContainer, {
    y: 0,
    opacity: 1,
    ease: "power2.out",
    duration: 0.45,
    startAt: { y: 300, opacity: 0 },
  });
};

type ImageEnterProps = {
  container: HTMLDivElement;
  imageContainer: HTMLDivElement;
};

export const ImageEnter = ({ container, imageContainer }: ImageEnterProps): void => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    imageContainer,
    {
      y: 500,
      opacity: 0,
    },
    {
      duration: 0.8,
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: container,
        start: "top 40%",
      },
    }
  );
};
