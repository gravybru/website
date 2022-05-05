import { useState, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { POSITIONS } from "../../../utils/camera";

const BASE_FRAMES = 50;

interface CameraProps {
  position: {
    x: number;
    y: number;
    z: number;
  };
}

const Camera = ({ position }: CameraProps) => {
  const { camera } = useThree();

  const [positionalDistancePerFrame, setPositionalDistancePerFrame] = useState(
    POSITIONS[0]
  );

  useEffect(() => {
    camera.rotation.y = -0.5;
  });

  useEffect(() => {
    const xPositionalDistance = position.x - camera.position.x;
    const yPositionalDistance = position.y - camera.position.y;
    const zPositionalDistance = position.z - camera.position.z;

    const xPositionalPerFrame = Math.abs(xPositionalDistance / BASE_FRAMES);
    const yPositionalPerFrame = Math.abs(yPositionalDistance / BASE_FRAMES);
    const zPositionalPerFrame = Math.abs(zPositionalDistance / BASE_FRAMES);

    setPositionalDistancePerFrame({
      x: xPositionalPerFrame,
      y: yPositionalPerFrame,
      z: zPositionalPerFrame,
    });
  }, [position]);

  useFrame(() => {
    if (position.y < camera.position.y) {
      camera.position.y -= positionalDistancePerFrame.y;
    }
    if (position.y > camera.position.y) {
      camera.position.y += positionalDistancePerFrame.y;
    }
    if (position.x < camera.position.x) {
      camera.position.x -= positionalDistancePerFrame.x;
    }
    if (position.x > camera.position.x) {
      camera.position.x += positionalDistancePerFrame.x;
    }
    if (position.z < camera.position.z) {
      camera.position.z -= positionalDistancePerFrame.z;
    }
    if (position.z > camera.position.z) {
      camera.position.z += positionalDistancePerFrame.z;
    }
  });

  return null;
};

export default Camera;
