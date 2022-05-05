import { useRef, useState } from "react";
import { MeshProps } from "@react-three/fiber";
import { randomIntFromInterval } from "../../../utils/camera";

interface BoxProps {
  position: number[];
  color: string;
  wireframe: boolean;
  initialDirection: boolean;
}

const Box = (props: BoxProps) => {
  const mesh = useRef<MeshProps>();

  return (
    <mesh {...props} ref={mesh} scale={1}>
      <boxGeometry scale={[0, 0, 0]} args={[2, 2, 2]} />
      <meshStandardMaterial wireframe={props.wireframe} color={props.color} />
    </mesh>
  );
};

export default Box;
