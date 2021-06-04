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

export const exitAnimation = (
  router: NextRouter,
  ropeArr: Matter.Composite[],
  engine: Matter.Engine,
  logo: HTMLHeadingElement,
  subCopy: any,
  buttonContainer: any
): void => {
  const tl = gsap.timeline({
    onComplete: () => {
      setTimeout(() => {
        router.push("/work");
      }, 1500);
    },
  });
  const logoLetters = getLogoLetters(logo);
  breakRopes(ropeArr);
  tl.to(logoLetters, {
    x: -100,
    duration: 1
  });
  // tl.to(subCopy.children, { opacity: 0, y: -50, stagger: 0.15 }, "<");
  // tl.to(buttonContainer, { opacity: 0, y: -35 }, "-=0.5");
  tl.to(subCopy.children, { opacity: 0, y: -50}, "<");
  tl.to(buttonContainer, { opacity: 0, y: -35 }, "<");
  tl.to(engine.gravity, { x: -1, y: 0, delay: 1.2 });
};
