import gsap from "gsap";
import Matter from "matter-js";

import { Shape, convertHeightUnits } from "@utils/homepage";

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
      strokeStyle: 'rgba(12, 60, 180, 0.15)',
      duration: 0.3,
      repeat: 3,
      yoyo: true,
    });
    tl.to(shape.render, {
      lineWidth: convertHeightUnits(10, userHeight),
      strokeStyle: 'rgba(12, 60, 180, 0.15)',
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
      gsap.to(shape.render, { lineWidth: 1, strokeStyle: 'rgba(12, 60, 180, 1)' });
    }
  });
};
