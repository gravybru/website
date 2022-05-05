import styles from "./styles.module.css";

const Header = () => {
  return (
    <div>
      <h2>{`I'm Xav, a software engineer from Manchester`}</h2>
      <br />
      <h4 className={styles.quote}>
        {`"Simplicity--the art of maximizing the amount of work not done--is
          essential." - 🧠`}
      </h4>
    </div>
  );
};

export default Header;
