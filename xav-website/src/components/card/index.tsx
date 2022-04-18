import styles from "./styles.module.css";

interface CardProps {
  text: string;
  onClick: Function;
}

const Card = (props: CardProps) => {
  return (
    <div className={styles.container} onClick={() => props.onClick()}>
      <h1>{props.text}</h1>
    </div>
  );
};

export default Card;
