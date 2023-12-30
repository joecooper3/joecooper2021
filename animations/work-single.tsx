import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type EnterAnimationProps = {
  container: HTMLDivElement;
  headline: HTMLHeadingElement;
  whiteHeadline: HTMLHeadingElement;
  leadDeveloper: HTMLElement;
  copyContainer: HTMLDivElement;
  isDesktop: boolean;
};

export const enterAnimations = ({
  container,
  headline,
  whiteHeadline,
  leadDeveloper,
  copyContainer,
  isDesktop,
}: EnterAnimationProps): void => {
  const tl = gsap.timeline();
  tl.to([container, headline, whiteHeadline, leadDeveloper, copyContainer], {
    opacity: 0,
    duration: 0,
  });
  if (isDesktop) {
    tl.to(container, {
      y: 0,
      opacity: 1,
      scaleY: 1,
      ease: "power4.out",
      duration: 0.8,
      startAt: { y: 150, opacity: 0, scaleY: 1.3 },
    });
  }
  tl.to([headline, whiteHeadline], {
    y: 0,
    opacity: 1,
    ease: "power4.out",
    duration: 0.8,
    scaleY: 1,
    startAt: { y: 0, opacity: 0, scaleY: 1.3 },
  }, "<");
  if (!isDesktop) {
    tl.to(container, {
      y: 0,
      opacity: 1,
      ease: "power4.out",
      duration: 0.8,
      startAt: { y: 150, opacity: 0 },
    });
  }
  tl.to(
    copyContainer,
    {
      y: 0,
      opacity: 1,
      // ease: "power2.out",
      duration: 0.8,
      startAt: { y: 150, opacity: 0 },
    },
    "-=0.3"
  );
  if (leadDeveloper) {
    tl.to(leadDeveloper, {
      y: 0,
      opacity: 1,
      // ease: "power2.out",
      duration: 1.5,
      startAt: { y: 30, opacity: 0 },
    });
  }
};

type ImageEnterProps = {
  container: HTMLDivElement;
  imageContainer: HTMLDivElement;
};

export const ImageEnter = ({
  container,
  imageContainer,
}: ImageEnterProps): void => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    imageContainer,
    {
      scaleY: 1.5,
      y: 150,
      opacity: 0,
      transformOrigin: "top",
    },
    {
      scale: 1,
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: container,
        start: "50% bottom",
        // markers: true,
      },
    }
  );
};

type MobileImageEnterProps = {
  container: HTMLDivElement;
  imageContainers: HTMLDivElement[];
  isDesktop: boolean;
};

export const MobileImageEnter = ({
  container,
  imageContainers,
  isDesktop,
}: MobileImageEnterProps): void => {
  gsap.registerPlugin(ScrollTrigger);

  imageContainers.forEach((item, i) => {
    gsap.fromTo(
      item,
      {
        y: isDesktop ? 500 : 200,
        opacity: 0,
      },
      {
        duration: 0.8,
        opacity: 1,
        y: 0,
        delay: isDesktop ? i * 0.15 : 0,
        scrollTrigger: {
          trigger: isDesktop ? container : imageContainers[i],
          start: isDesktop ? "bottom 95%" : "top bottom",
        },
      }
    );
  });
};
