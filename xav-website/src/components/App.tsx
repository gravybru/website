import styles from "./app.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <p>
        {"I'm a full-stack Software Engineer at "}
        <a href="https://www.northcoders.com">{"Northcoders"}</a>
        {"."}
        <br />
        <br />
        {"I'm based in Manchester (UK), sometimes I take on freelance work."}
        <br />
        <br />
        &#8680; hello@xavbruggen.com
      </p>
    </div>
  );
};

export default App;
