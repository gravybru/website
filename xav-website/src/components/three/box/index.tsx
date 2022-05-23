import { useRef } from "react";
import { MeshProps } from "@react-three/fiber";

interface BoxProps {
  position: [x: number, y: number, z: number];
  color: string;
  wireframe: boolean;
  initialDirection: boolean;
}

const Box = (props: BoxProps) => {
  const mesh = useRef<MeshProps>();

  return (
    <mesh position={props.position} ref={mesh} scale={1}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial wireframe={props.wireframe} color={props.color} />
    </mesh>
  );
};

export default Box;
