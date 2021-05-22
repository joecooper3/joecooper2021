import { Bodies, Composite, Constraint } from "matter-js";

const convertUnits = (unit: number, userHeight: number): number => {
  const DEV_HEIGHT = 730; // viewport height of my laptop to use as a baseline unit
  return (unit / DEV_HEIGHT) * userHeight;
};

// will generate a random shape (square, circle, or triangle) with a random color
const generateShape = (
  x: number,
  y: number,
  group: number,
  containerHeight: number
): Bodies => {
  const colorNum = Math.ceil(Math.random() * 3);
  const shapeNum = Math.ceil(Math.random() * 3);
  const color =
    colorNum === 1 ? "#0c3cb4" : colorNum === 2 ? "#ffab00" : "#fdfdfd";
  const options: Matter.IChamferableBodyDefinition = {
    collisionFilter: { group: group },
    render: {
      fillStyle: color,
    },
  };
  if (shapeNum === 1) {
    return Bodies.polygon(x, y, 3, containerHeight * 0.032, options);
  } else if (shapeNum === 2) {
    return Bodies.rectangle(
      x,
      y,
      containerHeight * 0.045,
      containerHeight * 0.045,
      options
    );
  } else {
    return Bodies.circle(x, y, containerHeight * 0.025, options);
  }
};

export const createChain = (
  x: number,
  y: number,
  numOfShapes: number,
  containerHeight: number,
  group
): Composite => {
  const chainComp: Composite = Composite.create();
  // anchor will be static and invisible; other shapes will connect to it
  const anchor = Bodies.circle(
    convertUnits(x, containerHeight),
    convertUnits(y - 40, containerHeight),
    convertUnits(2, containerHeight),
    {
      isStatic: true,
      render: {
        fillStyle: "#ffebcb",
      },
    }
  );
  // @ts-ignore
  Composite.add(chainComp, anchor);

  for (let i = 1; i < numOfShapes; i++) {
    const convertedX = (x / 730) * containerHeight;
    const convertedY = (y / 730) * containerHeight;
    const newX = convertedX - convertUnits(10, containerHeight) * -i;
    const newY = convertedY - (i - 1) * convertUnits(10, containerHeight);
    const length = i === 0 ? containerHeight * 0.04 : containerHeight * 0.065;
    const randomShape = generateShape(newX, newY, group, containerHeight);
    // @ts-ignore
    Composite.add(chainComp, randomShape);
    const constraint = Constraint.create({
      bodyA: chainComp.bodies[i - 1],
      bodyB: chainComp.bodies[i],
      damping: 1,
      stiffness: 1,
      length: length,
      render: {
        visible: false,
      },
    });
    Composite.add(chainComp, constraint);
  }
  return chainComp;
};
