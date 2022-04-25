import { Action, action, createStore, debug } from "easy-peasy";
import { POSITIONS } from "../utils/camera";

interface CameraPosition {
  x: number;
  y: number;
  z: number;
}

interface Camera {
  position: CameraPosition;
}

export interface StoreModel {
  camera: Camera;
  setCameraPosition: Action<StoreModel, CameraPosition>;
}

const store = createStore<StoreModel>({
  camera: {
    position: POSITIONS[0],
  },
  setCameraPosition: action((state, payload) => {
    state.camera.position = payload;
  }),
});

export default store;
