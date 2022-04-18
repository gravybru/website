import { StoreProvider } from "easy-peasy";
import store from "../store";
import Home from "./home";
import Backdrop from "./three/Backdrop";

const colors = ["#db2b39", "#29335c", "#f3a712", "#534d41", "#db2b39"];

const generatePositions = () => {
  return [...colors, ...colors].map((color) => ({
    position: [
      randomIntFromInterval(-3, 3),
      randomIntFromInterval(-3, 3),
      randomIntFromInterval(-3, 0),
    ],
    color,
  }));
};

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const App = () => {
  const positions = generatePositions();

  return (
    <StoreProvider store={store}>
      <Backdrop positions={positions} />
      <Home />
    </StoreProvider>
  );
};

export default App;
