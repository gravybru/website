import { useState } from "react";
import Blog from "../../pages/blog";
import Contact from "../../pages/contact";
import Work from "../../pages/work";
import { useStoreActions } from "../../store/hooks";
import { POSITIONS } from "../../utils/camera";
import ExpandableCard, { ExpandableCardStates } from "../expandableCard";
import ExpandableCardContent from "../expandableCardContent";
import styles from "./styles.module.css";

const pages = [
  { title: "WORK", component: <Work /> },
  { title: "BLOG", component: <Blog /> },
  { title: "CONTACT", component: <Contact /> },
];

const Nav = () => {
  const setCameraPosition = useStoreActions(
    (actions) => actions.setCameraPosition
  );

  const [expandedCard, setExpandedCard] = useState<null | number>(null);

  const handleClick = (card: number) => {
    if (expandedCard !== card) {
      setCameraPosition(POSITIONS[card + 1]);
      setExpandedCard(card);
    }
  };

  const getCardState = (card: number) => {
    if (expandedCard === card) return ExpandableCardStates.expanded;
    if (expandedCard === null) return ExpandableCardStates.base;
    return ExpandableCardStates.hidden;
  };

  return (
    <div className={styles.container}>
      {pages.map(({ title, component }, index) => {
        const state = getCardState(index);
        return (
          <ExpandableCard
            key={`expandable-card-${index}`}
            onClick={() => {
              if (state === ExpandableCardStates.base) handleClick(index);
            }}
            state={state}
          >
            {
              <ExpandableCardContent
                title={title}
                showContent={state === ExpandableCardStates.expanded}
                onClose={() => setExpandedCard(null)}
              >
                {component}
              </ExpandableCardContent>
            }
          </ExpandableCard>
        );
      })}
    </div>
  );
};

export default Nav;
