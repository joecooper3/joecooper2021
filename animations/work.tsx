import gsap from "gsap";
import { NextRouter } from "next/router";

export type workExitAnimArgs = {
  router: NextRouter;
  squareContainer: HTMLDivElement;
  squareText: HTMLHeadingElement;
  workList: HTMLUListElement;
  isDesktop: boolean;
};

export const spinningSquareEnter = (
  container: HTMLDivElement,
  text: HTMLHeadingElement,
  isDesktop: boolean
): void => {
  gsap.to(container, {
    y: 0,
    ease: "elastic.out(0.5, 0.2)",
    duration: 3.0,
    startAt: { y: -500 },
  });
  gsap.to(text, {
    scaleX: 1,
    duration: 2.5,
    ease: "elastic.out(0.5, 0.2)",
    startAt: { scaleX: 1.5 },
    delay: 0.3,
  });

  if (!isDesktop) {
    gsap.to(text, {
      opacity: 0,
      delay: 3.0,
      duration: 0.5,
      y: -20,
    });
  }
};

export const workListEnter = (
  listArr: HTMLUListElement,
  isDesktop: boolean
): void => {
  const delay = isDesktop ? 1 : 3;

  gsap.to(listArr.children, {
    pointerEvents: "none",
  });
  gsap.to(listArr.children, {
    y: 0,
    opacity: 1,
    duration: 1,
    pointerEvents: "auto",
    delay: delay,
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

export const previewImageExit = (container: HTMLDivElement) => {
  gsap.to(container, {
    opacity: 0,
    y: -500,
    rotation: -40,
  });
};

export const pageExit = (
  href: string,
  color: string,
  args: workExitAnimArgs
) => {
  const { router, squareContainer, squareText, workList, isDesktop } = args;

  const tl = gsap.timeline({
    onComplete: () => {
      setTimeout(() => {
        router.push(href);
      }, 500);
    },
  });

  if (color === "tan") {
    const duration = isDesktop ? 2 : 1.25;
    const scale = isDesktop ? 8 : 4;

    tl.to(squareText, {
      opacity: 0,
    });
    tl.to(squareContainer, {
      scale: scale,
      duration: duration,
    });

    if (!isDesktop) {
      tl.to(
        workList.children,
        {
          opacity: 0,
          y: -50,
        },
        "<"
      );
    }
  } else {
    tl.to(squareContainer, {
      y: -50,
      duration: 0.2,
    });
    tl.to(squareContainer, {
      y: "80vh",
      duration: 0.4,
    });
    tl.to(
      workList.children,
      {
        stagger: 0.1,
        opacity: 0,
        y: -50,
      },
      "<"
    );
  }
};
