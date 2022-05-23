import styles from "./styles.module.css";

const Header = () => {
  return (
    <div>
      <h1
        className={styles.hero}
      >{`I'm Xav, a software engineer from Manchester`}</h1>
      <h4 className={styles.quote}>
        {`"Simplicity--the art of maximizing the amount of work not done--is
          essential." - `}
        <span
          onClick={() => {
            window.open(
              "https://agilemanifesto.org/principles.html",
              "__blank"
            );
          }}
        >
          🧠
        </span>
      </h4>
    </div>
  );
};

export default Header;
