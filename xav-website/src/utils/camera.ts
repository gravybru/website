const pos1 = {
  x: 0,
  y: 2,
  z: 4,
};

const pos2 = {
  x: -1,
  y: 0,
  z: 5,
};

const pos3 = {
  x: 0.2,
  y: -2,
  z: 4,
};

const pos4 = {
  x: -0.4,
  y: -3,
  z: 4,
};

const colors = ["#db2b39", "#29335c", "#f3a712", "#534d41", "#db2b39"];

export const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generatePositions = () => {
  return [...colors, ...colors].map((color) => ({
    position: [
      randomIntFromInterval(-3, 3),
      randomIntFromInterval(-3, 3),
      randomIntFromInterval(-3, 0),
    ],
    color,
  }));
};

export const generatePosition = () => {
  const color = colors[randomIntFromInterval(0, 4)];
  return {
    position: [
      randomIntFromInterval(-3, 3),
      randomIntFromInterval(-3, 3),
      randomIntFromInterval(-3, 0),
    ],
    color,
  };
};

export const POSITIONS = [pos1, pos2, pos3, pos4];
