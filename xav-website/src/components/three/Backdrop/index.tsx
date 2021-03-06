import { Canvas } from "@react-three/fiber";
import Box from "../box";
import styles from "./styles.module.css";
import Camera from "../camera";
import { useStoreState } from "../../../store/hooks";

interface Position {
  color: string;
  position: [x: number, y: number, z: number];
}

interface BackdropProps {
  positions: Position[];
}

const Backdrop = ({ positions }: BackdropProps) => {
  const position = useStoreState((state) => state.camera.position);

  return (
    <div className={styles.container}>
      <Canvas>
        <Camera position={position} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {positions.map(({ position, color }, index) => (
          <Box
            key={`box-${index}`}
            position={position}
            color={color}
            wireframe={false}
            initialDirection={index % 2 === 0}
          />
        ))}
      </Canvas>
      ,
    </div>
  );
};

export default Backdrop;
