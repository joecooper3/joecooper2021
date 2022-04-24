import gsap from "gsap";
import Matter from "matter-js";
import { NextRouter } from "next/router";

import { Shape, convertHeightUnits, breakRopes } from "@utils/homepage";

export type exitAnimArgs = {
  router: NextRouter;
  ropeArr: Matter.Composite[];
  wall: Matter.Body;
  engine: Matter.Engine;
  logo: HTMLHeadingElement;
  subCopy: HTMLParagraphElement;
  buttonContainer: HTMLDivElement;
  mobileWall: HTMLDivElement;
};

export const pulsate = (
  rope: Matter.Composite,
  userHeight: number,
  breakFunc
) => {
  rope.bodies.forEach((shape: Shape) => {
    const tl = gsap.timeline();

    shape.activeTL = tl;
    tl.to(shape.render, {
      lineWidth: convertHeightUnits(5, userHeight),
      strokeStyle: "rgba(12, 60, 180, 0.15)",
      duration: 0.3,
      repeat: 3,
      yoyo: true,
    });
    tl.to(shape.render, {
      lineWidth: convertHeightUnits(10, userHeight),
      strokeStyle: "rgba(12, 60, 180, 0.15)",
      duration: 0.2,
      repeat: 7,
      yoyo: true,
    });
    tl.add(() => {
      breakFunc([rope]);
    });
  });
};

export const stopPulsating = (rope: Matter.Composite) => {
  rope.bodies.forEach((shape: Shape) => {
    if (shape.activeTL) {
      shape.activeTL.pause();
      shape.activeTL = null;
      gsap.to(shape.render, {
        lineWidth: 1,
        strokeStyle: "rgba(12, 60, 180, 1)",
      });
    }
  });
};

export const getLogoLetters = (el: HTMLHeadingElement) => {
  const logoRows = [el.children[0], el.children[1]];
  const rowChildren = logoRows.map((row) => row.children);
  const rowChildrenArr = Array.from(rowChildren);
  const containerArrs = rowChildrenArr.map((item) => Array.from(item));
  const allContainers = [...containerArrs[0], ...containerArrs[1]];
  const letterEls = allContainers.map((item) => item.children[0]);
  console.log(letterEls);
  return letterEls;
};

export const getLogoLettersHeader = (el: HTMLHeadingElement) => {
  const letterContainers = Array.from(el.children);
  const letterEls = letterContainers.map((item) => item.children[0]);
  console.log(letterEls);
  return letterEls;
};

const recursiveWallMoving = (
  href: string,
  router: NextRouter,
  engine: Matter.Engine,
  initTimestamp: number,
  wall: Matter.Body
) => {
  if (wall.position.x < 0) {
    setTimeout(() => {
      router.push(href);
    }, 800);
    return;
  }
  const VELOCITY = 0.0125;
  const currentTimestamp = engine.timing.timestamp;
  Matter.Body.translate(wall, {
    x: -VELOCITY * (currentTimestamp - initTimestamp),
    y: 0,
  });
  setTimeout(
    () => recursiveWallMoving(href, router, engine, initTimestamp, wall),
    10
  );
};

export const exitAnimation = (href: string, args: exitAnimArgs): void => {
  const {
    router,
    ropeArr,
    wall,
    engine,
    logo,
    subCopy,
    buttonContainer,
    mobileWall,
  } = args;
  const tl = gsap.timeline({
    onComplete: () => {
      setTimeout(() => {
        if (engine) {
          recursiveWallMoving(
            href,
            router,
            engine,
            engine.timing.timestamp,
            wall
          );
        } else {
          router.push(href);
        }
      }, 500);
    },
  });
  const logoLetters = getLogoLetters(logo);
  breakRopes(ropeArr);
  tl.to(logoLetters, {
    x: -100,
    duration: 1,
    opacity: 0,
  });
  tl.to(subCopy.children, { opacity: 0, y: -50 }, "<");
  tl.to(buttonContainer, { opacity: 0, y: -35 }, "<");
  // mobile only
  if (!engine) {
    tl.to(mobileWall, { top: 0, duration: 0.9 }, "-=0.75");
  }
};
