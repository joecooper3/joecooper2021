import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import styled from "styled-components";

import { createChain } from "@utils/homepage";

export default function ChainShapes() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [ropeArr, setRopeArr] = useState<Matter.Composite[]>([]);
  const [dimensions, setDimensions] = useState<DOMRect | null>(null);
  const [scene, setScene] = useState<Matter.Render | null>(null);

  const handleResize = () => {
    setDimensions(containerRef.current.getBoundingClientRect());
  };

  useEffect(() => {
    const {
      Composite,
      Body,
      Bodies,
      Mouse,
      MouseConstraint,
      Engine,
      Runner,
      Render,
      World,
    } = Matter;
    const engine = Engine.create();

    const container = containerRef.current.getBoundingClientRect();
    setDimensions(container);

    let render = Render.create({
      element: containerRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        background: "rgba(0,0,0,0)",
        wireframes: false,
        width: container.width,
        height: container.height,
      },
    });

    // for collision detection between ropes
    const group = Body.nextGroup(true);
    const groupB = Body.nextGroup(true);
    const groupC = Body.nextGroup(true);

    const ropeA = createChain(50, 30, 8, container.height, group);
    const ropeB = createChain(125, 45, 7, container.height, group);
    const ropeC = createChain(200, 30, 8, container.height, group);

    const floor = Bodies.rectangle(
      0,
      container.height / 2 + 10,
      container.width,
      20,
      {
        label: "floor",
        isStatic: true,
        render: {
          fillStyle: "white",
        },
      }
    );

    setRopeArr([ropeA, ropeB, ropeC]);

    // @ts-ignore
    World.add(engine.world, [ropeA, ropeB, ropeC, floor]);
    // @ts-ignore
    Render.setPixelRatio(render, 2);
    Runner.run(engine);

    setDimensions(containerRef.current.getBoundingClientRect());
    window.addEventListener("resize", handleResize);

    // after chains are done falling from sky, allow shapes from adjacent
    // chains to collide my loosening up collision filters
    setTimeout(() => {
      ropeB.bodies.forEach((shape) => {
        shape.collisionFilter.group = groupB;
      });
      ropeC.bodies.forEach((shape) => {
        shape.collisionFilter.group = groupC;
      });
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

    // @ts-ignore
    Composite.add(engine.world, mouseConstraint);
    Render.run(render);
    setScene(render);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // resizes canvas to fit screen, re-adjust position of floor
  useEffect(() => {
    if (dimensions) {
      let { width, height } = dimensions;
      scene.canvas.width = width;
      scene.canvas.height = height;
      // Dynamically update floor on resizing
      // @ts-ignore
      const floor: Matter.Body = scene.engine.world.bodies.find(
        (body) => body.label === "floor"
      );
      console.log(floor);
      Matter.Body.setPosition(floor, {
        x: 0,
        y: height / 2 + 10,
      });
    }
  }, [scene, dimensions]);

  const breakRopes = () => {
    if (ropeArr.length > 0) {
      ropeArr.forEach((rope) => {
        if (rope.constraints.length > 0) {
          rope.bodies.forEach((shape) => {
            // clear collision filters, allowing shapes from same rope to collide
            shape.collisionFilter.group = 2;
          });
          rope.constraints = [];
        }
      });
    }
  };

  // debugging functions
  const pressedJ = (e: KeyboardEvent) => {
    if (e.key === "j") {
      breakRopes();
    }
    if (e.key === "k") {
      breakRopes();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => pressedJ(e));
    return () => {
      window.removeEventListener("keydown", (e) => pressedJ(e));
    };
  }, [ropeArr]);

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
  height: 100% !important;
  width: 100% !important;
`;
