import React, { useEffect, useRef, useState } from "react";
import Matter, { Events } from "matter-js";
import styled from "styled-components";

import { pulsate, stopPulsating } from "@animations/homepage";
import { Shape, createRope, getParentRope, breakRopes } from "@utils/homepage";

export default function ChainShapes() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [ropeArr, setRopeArr] = useState<Matter.Composite[]>([]);
  const [dimensions, setDimensions] = useState<DOMRect | null>(null);
  const [scene, setScene] = useState<Matter.Render | null>(null);
  const [hitBox, setHitBox] = useState<Matter.Body | null>(null);
  const [engine, setEngine] = useState(null);

  const handleResize = () => {
    setDimensions(containerRef.current.getBoundingClientRect());
  };

  // create engine; will need to be referenced in a few useEffects, so just
  // going to explicitly define this first and put in a useState
  useEffect(() => {
    const { Engine } = Matter;
    const engine = Engine.create();
    setEngine(engine);
  }, []);

  // creates world, adds shapes/chains, mouse constraints, sets up runner and render
  useEffect(() => {
    if (!engine) {
      return;
    }
    const {
      Composite,
      Body,
      Bodies,
      Mouse,
      MouseConstraint,
      Runner,
      Render,
      World,
    } = Matter;

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

    const ropeA = createRope(50, 45, 8, container.height, group, 7, 0);
    const ropeB = createRope(125, 60, 7, container.height, group, 5, 1);
    const ropeC = createRope(200, 45, 8, container.height, group, 5, 2);

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

    const stretchWidth = 250;
    const stretchX = (container.width - stretchWidth) / 2;
    const stretchDetector = Bodies.rectangle(
      stretchX,
      0,
      stretchWidth,
      container.height,
      {
        label: "stretchDetector",
        isStatic: true,
        isSensor: true,
        render: {
          fillStyle: "#ffebcb",
        },
      }
    );
    setHitBox(stretchDetector);

    setRopeArr([ropeA, ropeB, ropeC]);

    // @ts-ignore
    World.add(engine.world, [ropeA, ropeB, ropeC, floor, stretchDetector]);
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
  }, [engine]);

  // add event for stretching out ropes too far
  useEffect(() => {
    if (engine) {
      Events.on(engine, "collisionStart", (e) => {
        const { bodyA, bodyB } = e.pairs[0];
        if (
          (bodyA === hitBox && bodyB.label.includes("trigger")) ||
          (bodyB === hitBox && bodyA.label.includes("trigger"))
        ) {
          console.log("my god today");
          const shape: Shape = bodyA === hitBox ? bodyB : bodyA;
          const parentRope = getParentRope(shape, ropeArr);
          if (parentRope) {
            pulsate(parentRope, dimensions.height, breakRopes);
          }
          // trigger chainBreak when passing five second threshold
        }
      });

      Events.on(engine, "collisionEnd", (e) => {
        const { bodyA, bodyB } = e.pairs[0];
        if (
          (bodyA === hitBox && bodyB.label.includes("trigger")) ||
          (bodyB === hitBox && bodyA.label.includes("trigger"))
        ) {
          const shape = bodyA === hitBox ? bodyB : bodyA;
          const parentRope = getParentRope(shape, ropeArr);
          if (parentRope) {
            stopPulsating(parentRope);
          }
        }
      });
    }
    return () => {
      if (engine) {
        // @ts-ignore
        Events.off(engine, "collisionStart");
        // @ts-ignore
        Events.off(engine, "collisionEnd");
      }
    };
  }, [engine, hitBox, dimensions]);

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
      Matter.Body.setPosition(floor, {
        x: 0,
        y: height / 2 + 10,
      });
    }
  }, [scene, dimensions]);

  // debugging functions
  const pressedJ = (e: KeyboardEvent) => {
    if (e.key === "j") {
      breakRopes(ropeArr);
    }
    if (e.key === "k") {
      if (ropeArr.length > 0) {
        ropeArr[1].bodies[2].render.sprite.xScale = 0.5;
        Matter.Body.scale(ropeArr[1].bodies[2], 1.25, 1.25);
      }
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
