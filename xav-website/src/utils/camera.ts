import { buildColors } from "./coloors";

const getCameraPositions = () => {
  const positions = [];
  for (let i = 0; i < 5; i++) {
    positions.push({
      x: 5 - i * 3,
      y: 5 - i * 1.25,
      z: 8 + i * 0.5,
    });
  }

  return positions;
};

export const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

interface Shape {
  color: string;
  position: [x: number, y: number, z: number];
}

export const generatePositions = () => {
  const shapes: Shape[] = [];

  buildColors().forEach((color, index) => {
    const lower = -4 + index * 2;
    const upper = -2 + index * 2;

    for (let j = 0; j < 4; j++) {
      shapes.push({
        position: [
          randomIntFromInterval(lower, upper) + index,
          randomIntFromInterval(lower, upper) + 2,
          index - 3 * j,
        ],
        color: color,
      });
    }
  });

  return shapes;
};

export const POSITIONS = getCameraPositions();
