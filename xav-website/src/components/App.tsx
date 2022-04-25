import { StoreProvider } from "easy-peasy";
import store from "../store";
import { generatePositions } from "../utils/camera";
import Home from "./home";
import Backdrop from "./three/Backdrop";

const App = () => {
  return (
    <StoreProvider store={store}>
      <Backdrop positions={generatePositions()} />
      <Home />
    </StoreProvider>
  );
};

export default App;
