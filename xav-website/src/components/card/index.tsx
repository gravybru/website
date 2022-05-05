import React from "react";
import styles from "./styles.module.css";

export interface BaseCardProps {
  onClick?: Function;
}

const Card: React.FC<BaseCardProps> = (props) => {
  return (
    <div
      className={`${styles.container}`}
      onClick={() => {
        if (props.onClick) props.onClick();
      }}
    >
      <div className={styles.cardInternal}>{props.children}</div>
    </div>
  );
};

export default Card;
