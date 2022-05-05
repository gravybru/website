import { useState } from "react";
import Blog from "../../pages/blog";
import Contact from "../../pages/contact";
import Work from "../../pages/work";
import Tech from "../../pages/tech";
import { useStoreActions } from "../../store/hooks";
import { POSITIONS } from "../../utils/camera";
import styles from "./styles.module.css";

const pages = [
  { title: "WORK", component: <Work /> },
  { title: "TECH", component: <Tech /> },
  { title: "BLOG", component: <Blog /> },
  { title: "CONTACT", component: <Contact /> },
];

const Nav = () => {
  const setCameraPosition = useStoreActions(
    (actions) => actions.setCameraPosition
  );

  const [expandedCard, setExpandedCard] = useState<null | number>(null);

  const handleClick = (index: number) => {
    if (index === expandedCard) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
      setCameraPosition(POSITIONS[index + 1]);
    }
  };

  return (
    <div className={styles.container}>
      {pages.map(({ title, component }, index) => {
        const isSelected = index === expandedCard;

        return (
          <div key={`nav-${index}`} className={styles.navSection}>
            <button
              onClick={() => handleClick(index)}
              className={styles.navButton}
            >
              <h1>{title}</h1>
            </button>
            <div className={isSelected ? styles.show : styles.hide}>
              {component}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Nav;
