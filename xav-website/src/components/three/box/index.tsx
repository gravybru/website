import { useRef } from "react";
import { MeshProps } from "@react-three/fiber";

interface BoxProps {
  position: number[];
  color: string;
  wireframe: boolean;
}

const Box = (props: BoxProps) => {
  const mesh = useRef<MeshProps>();

  return (
    <mesh {...props} ref={mesh} scale={1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial wireframe={props.wireframe} color={props.color} />
    </mesh>
  );
};

export default Box;
