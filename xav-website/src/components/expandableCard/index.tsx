import Card, { BaseCardProps } from "../card";
import styles from "./styles.module.css";

export enum ExpandableCardStates {
  hidden,
  base,
  expanded,
}

interface ExpandedCardProps extends BaseCardProps {
  state: ExpandableCardStates;
  large: boolean;
}

const ExpandableCard: React.FC<ExpandedCardProps> = (props) => {
  let extraStyles = `
    ${styles[ExpandableCardStates[props.state]]}`;

  if (props.large && props.state === ExpandableCardStates.expanded) {
    extraStyles = styles.expandedLarge;
  }

  return (
    <div
      onClick={() => {
        if (props.onClick && props.state) props.onClick();
      }}
      className={`${styles.container} ${extraStyles}`}
    >
      <Card>
        {props.state === ExpandableCardStates.hidden ? "" : props.children}
      </Card>
    </div>
  );
};

export default ExpandableCard;
