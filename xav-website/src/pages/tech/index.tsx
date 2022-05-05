import styles from "../styles.module.css";

const Tech = () => {
  return (
    <div>
      <p>
        I'm full-stack and a (proud!) generalist. I'll pick up whatever I need.
        Here's what I like working with:
        <br />
        <br />
        <span className={styles.title}>WEB</span>: React (TypeScript, testing
        with Cypress, Vitest and Jest)
        <br />
        <br />
        <span className={styles.title}>MOBILE</span>: Flutter (happy to try
        React Native, had a great time automating with Fastlane)
        <br />
        <br />
        <span className={styles.title}>BACKEND</span>: Node (TypeScript), .NET,
        Python (sometimes Flask, preferably FastAPI), MongoDB
        <br />
        <br />
        <span className={styles.title}>CLOUD</span>: GCP, Docker, Firebase,
        MongoDB Atlas
        <br />
        <br />
        <span className={styles.title}>WORKFLOW</span>: TDD, pairing, continuous
        delivery, small tickets, automation
        <br />
        <br />
      </p>
    </div>
  );
};

export default Tech;
