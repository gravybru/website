import Card, { BaseCardProps } from "../card";
import styles from "./styles.module.css";

export enum ExpandableCardStates {
  hidden,
  base,
  expanded,
}

interface ExpandedCardProps extends BaseCardProps {
  state: ExpandableCardStates;
}

const ExpandableCard: React.FC<ExpandedCardProps> = (props) => {
  return (
    <div
      onClick={() => {
        if (props.onClick && props.state) props.onClick();
      }}
      className={`${styles.container} ${
        styles[ExpandableCardStates[props.state]]
      }`}
    >
      <Card>
        {props.state === ExpandableCardStates.hidden ? "" : props.children}
      </Card>
    </div>
  );
};

export default ExpandableCard;
