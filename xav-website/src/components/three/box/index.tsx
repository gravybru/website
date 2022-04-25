import { useRef, useState } from "react";
import { MeshProps, useFrame } from "@react-three/fiber";
import { randomIntFromInterval } from "../../../utils/camera";

interface BoxProps {
  position: number[];
  color: string;
  wireframe: boolean;
  initialDirection: boolean;
}

const MAX = 1;
const MIN = 0.6;
const BASE_RATE = 0.0001;

const Box = (props: BoxProps) => {
  const RATE = randomIntFromInterval(1, 10) * BASE_RATE;
  const mesh = useRef<MeshProps>();
  const [size, setSize] = useState(0.8);
  const [direction, setDirection] = useState(props.initialDirection);

  useFrame(() => {
    if (size < MIN) setDirection(true);
    if (size > MAX) setDirection(false);
    setSize((prevSize) => {
      return direction ? (prevSize += RATE) : (prevSize -= RATE);
    });
  });

  return (
    <mesh {...props} ref={mesh} scale={1}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial wireframe={props.wireframe} color={props.color} />
    </mesh>
  );
};

export default Box;
