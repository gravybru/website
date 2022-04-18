import styles from "./styles.module.css";
import Card from "../card";
import { useStoreActions } from "../../store/hooks";

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

const Home = () => {
  const setCameraPosition = useStoreActions(
    (actions) => actions.setCameraPosition
  );

  return (
    <div className={styles.container}>
      <Card
        text="Hi I'm Xav 👋"
        onClick={() => {
          setCameraPosition(pos1);
        }}
      />
      <Card
        text="I'm a software engineer from Manchester"
        onClick={() => {
          setCameraPosition(pos2);
        }}
      />
      <Card
        text="&#8594; hello@xavbruggen.com"
        onClick={() => {
          setCameraPosition(pos3);
        }}
      />
    </div>
  );
};

export default Home;
