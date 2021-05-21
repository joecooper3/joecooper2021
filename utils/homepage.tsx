import { Bodies, Composite, Constraint } from "matter-js";

// will generate a random shape (square, circle, or triangle) with a random color
const generateShape = (
  x: number,
  y: number,
  group: number,
  containerHeight: number,
  fixed: boolean = false
): Bodies => {
  const colorNum = Math.ceil(Math.random() * 3);
  const shapeNum = Math.ceil(Math.random() * 3);
  const color =
    colorNum === 1 ? "#0c3cb4" : colorNum === 2 ? "#ffab00" : "#fdfdfd";
  const options: Matter.IChamferableBodyDefinition = {
    collisionFilter: { group: group },
    isStatic: fixed,
    render: {
      fillStyle: color,
    },
  };
  if (shapeNum === 1) {
    // return Bodies.polygon(x, y, 3, 35, options);
    return Bodies.polygon(x, y, 3, containerHeight * 0.032, options);
  } else if (shapeNum === 2) {
    // return Bodies.rectangle(x, y, 52, 52, options);
    return Bodies.rectangle(x, y, containerHeight * 0.045, containerHeight * 0.045, options);
  } else {
    // return Bodies.circle(x, y, 30, options);
    return Bodies.circle(x, y, containerHeight * 0.025, options);
  }
};

// // TODOs:
// // -bespoke margin logic for triangles
// // -massage tensile strength (maybe make the constraints stick together tighter)
// // -maybe allow top "isStatic" item to move ever so slightly (like the one created w/ the .chain method)
export const createChain = (
  x: number,
  y: number,
  numOfShapes: number,
  containerHeight: number,
  group
): Composite => {
  const chainComp: Composite = Composite.create();
  for (let i = 0; i < numOfShapes; i++) {
    const convertedX = (x / 730) * containerHeight;
    const convertedY = (y / 730) * containerHeight;
    const isStatic = i === 0;
    const newX = i === 0 ? convertedX : convertedX - 1;
    const newY = convertedY - (i * 33);
    const randomShape = generateShape(newX, newY, group, containerHeight, isStatic);
    // @ts-ignore
    Composite.add(chainComp, randomShape);
    if (i > 0) {
      const constraint = Constraint.create({
        bodyA: chainComp.bodies[i - 1],
        bodyB: chainComp.bodies[i],
        damping: 1,
        stiffness: 1,
        length: containerHeight * 0.06,
        render: {
          visible: false,
        },
      });
      Composite.add(chainComp, constraint);
    }
  }
  return chainComp;
};
