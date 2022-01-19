import gsap from "gsap";

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
