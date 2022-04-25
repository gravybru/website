import styles from "./styles.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={styles.headerText}>
        {`Hi, I'm Xav 👋`}
        <br />
        {`I'm a software engineer from Manchester.`}
      </h1>
    </div>
  );
};

export default Header;
