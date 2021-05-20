import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import styled from "styled-components";

import { createChain } from "@utils/homepage";

export default function ChainShapes() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const {
      Composite,
      Body,
      Mouse,
      MouseConstraint,
      Engine,
      Runner,
      Render,
      World,
    } = Matter;
    const engine = Engine.create();

    let render = Render.create({
      element: containerRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        background: "rgba(0,0,0,0)",
        wireframes: false,
      },
    });

    // for collision detection between ropes
    const group = Body.nextGroup(true);
    const groupB = Body.nextGroup(true);
    const groupC = Body.nextGroup(true);

    const ropeA = createChain(75, 50, 8, group);
    const ropeB = createChain(190, 80, 7, group);
    const ropeC = createChain(305, 50, 8, group);

    World.add(engine.world, [ropeA, ropeB, ropeC]);
    Runner.run(engine);

    // after chains are done falling from sky, allow shapes from adjacent
    // chains to collide my loosening up collision filters
    setTimeout(() => {
      ropeB.bodies.forEach((shape) => {
        shape.collisionFilter.group = groupB;
      });
      ropeC.bodies.forEach((shape) => {
        shape.collisionFilter.group = groupC;
      });
      console.log(ropeB.bodies);
    }, 2500);

    // add mouse control
    let mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      // @ts-ignore
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(engine.world, mouseConstraint);

    Render.run(render);
  }, []);

  return (
    <Container ref={containerRef}>
      <Canvas ref={canvasRef} />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const Canvas = styled.canvas`
  height: 100%;
`;
