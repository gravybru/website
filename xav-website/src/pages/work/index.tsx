import styles from "./styles.module.css";

const PageGrid: React.FC = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

interface PageTextCardProps {
  title: string;
  items: string[];
}

const PageTextCard = (props: PageTextCardProps) => {
  return (
    <div className={styles.textCard}>
      <h4>{props.title.toUpperCase()}</h4>
      {props.items.map((item, index) => (
        <li key={`${props.title}-li-${index}`}>{item}</li>
      ))}
    </div>
  );
};

const Work = () => {
  return (
    <PageGrid>
      <p>
        I'm a proud generalist, I tend to get more from prioritising design
        patterns and software architecture over loving a single
        language/framework/library.
        <br />
        Here's some stuff I've{" "}
        <span style={{ fontStyle: "italic" }}>just enjoyed</span> working with.{" "}
      </p>

      <PageTextCard
        title="web"
        items={[
          "react",
          "typescript",
          "material design",
          "three.js",
          "redux (recently easy-peasy)",
          "vite, parcel, webpack",
          "babel",
          "cypress (but the flakiness in CI upsets me)",
          "jest / vitest",
        ]}
      />
      <PageTextCard title="mobile" items={["flutter", "dart", "fastlane"]} />
      <PageTextCard
        title="backend"
        items={[
          "node",
          "typescript",
          "express",
          "supertest",
          ".NET (though a bit rusty, I miss it)",
          "moq",
          "typescript",
          "swagger / open api",
          "mongodb",
          "firestore",
        ]}
      />
      <PageTextCard
        title="cloud"
        items={[
          "GCP",
          "firebase (auth / hosting / emulators / firestore)",
          "cloud functions",
          "cloud run",
          "docker, docker-compose, google container registry",
        ]}
      />

      <PageTextCard
        title="tools, tests and workflow"
        items={[
          "git",
          "jira / asana / slack",
          "CICD",
          "trunk-based dev",
          "paired programming",
          "test-driven development (ideally)",
          "honestly anything by jetbrains - excited for fleet!",
          "design patterns are good and cool",
        ]}
      />

      <PageTextCard
        title="misc"
        items={[
          "I like high levels of rotation within teams",
          "everyone says they're agile don't they?",
          "I should drink more water",
        ]}
      />
    </PageGrid>
  );
};

export default Work;
