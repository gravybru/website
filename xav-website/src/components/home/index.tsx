import styles from "./styles.module.css";
import Card from "../card";
import { useStoreActions } from "../../store/hooks";
import { POSITIONS } from "../../utils/camera";
import Nav from "../nav";
import Header from "../header";

const Home = () => {
  const setCameraPosition = useStoreActions(
    (actions) => actions.setCameraPosition
  );

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <Card
          onClick={() => {
            setCameraPosition(POSITIONS[0]);
          }}
          children={<Header />}
        />
      </div>
      <Nav />
    </div>
  );
};

export default Home;
