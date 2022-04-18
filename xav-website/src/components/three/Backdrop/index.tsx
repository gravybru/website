import { Canvas } from "@react-three/fiber";
import Box from "../box";
import styles from "./styles.module.css";
import Camera from "../camera";
import { useStoreState } from "../../../store/hooks";

// https://coolors.co/db2b39-ffffff-29335c-f3a712-534d41

interface Position {
  color: string;
  position: number[];
}

interface BackdropProps {
  positions: Position[];
}

const Backdrop = (props: BackdropProps) => {
  const cameraPosition = useStoreState((state) => state.camera.position);

  return (
    <div className={styles.container}>
      <Canvas>
        <Camera position={cameraPosition} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {props.positions.map(({ position, color }, index) => (
          <Box
            key={`box-${index}`}
            position={position}
            color={color}
            wireframe={false}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default Backdrop;
