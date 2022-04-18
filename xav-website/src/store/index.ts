import { Action, action, createStore, debug } from "easy-peasy";

interface CameraPosition {
  x: number;
  y: number;
  z: number;
}

interface Camera {
  position: CameraPosition;
}

const pos1 = {
  x: 0,
  y: 2,
  z: 3,
};

const pos2 = {
  x: -1,
  y: 0,
  z: 4,
};

const pos3 = {
  x: 0.2,
  y: -2,
  z: 3,
};

export interface StoreModel {
  camera: Camera;
  setCameraPosition: Action<StoreModel, CameraPosition>;
}

const store = createStore<StoreModel>({
  camera: {
    position: pos1,
  },
  setCameraPosition: action((state, payload) => {
    state.camera.position = payload;
  }),
});

export default store;
