import styles from "./styles.module.css";

interface ExpandableCardContentProps {
  title: string;
  showContent: boolean;
  onClose: Function;
}

const ExpandableCardContent: React.FC<ExpandableCardContentProps> = (props) => {
  return (
    <>
      <div className={styles.contentTitle}>
        <h3 className={props.showContent ? styles.textHighlight : ""}>
          {props.title}
        </h3>
        {props.showContent && (
          <button
            onClick={() => props.onClose()}
            className={styles.closeButton}
          >
            ✖️
          </button>
        )}
      </div>
      {props.showContent && props.children}
    </>
  );
};

export default ExpandableCardContent;
