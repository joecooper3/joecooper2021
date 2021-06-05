import gsap from "gsap";
import Matter from "matter-js";
import { NextRouter } from "next/router";

import { Shape, convertHeightUnits, breakRopes } from "@utils/homepage";

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

const getLogoLetters = (el: HTMLHeadingElement) => {
  const logoRows = [el.children[0], el.children[1]];
  const rowChildren = logoRows.map((row) => row.children);
  const rowChildrenArr = Array.from(rowChildren);
  const containerArrs = rowChildrenArr.map((item) => Array.from(item));
  const allContainers = [...containerArrs[0], ...containerArrs[1]];
  const letterEls = allContainers.map((item) => item.children[0]);
  return letterEls;
};

const recursiveWallMoving = (
  router: NextRouter,
  engine: Matter.Engine,
  initTimestamp: number,
  wall: Matter.Body
) => {
  if (wall.position.x < 0) {
    setTimeout(() => {
      router.push("/work");
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
    () => recursiveWallMoving(router, engine, initTimestamp, wall),
    10
  );
};

export const exitAnimation = (
  router: NextRouter,
  ropeArr: Matter.Composite[],
  wall: Matter.Body,
  engine: Matter.Engine,
  logo: HTMLHeadingElement,
  subCopy: HTMLParagraphElement,
  buttonContainer: HTMLDivElement
): void => {
  const tl = gsap.timeline({
    onComplete: () => {
      setTimeout(() => {
        recursiveWallMoving(router, engine, engine.timing.timestamp, wall);
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
};
