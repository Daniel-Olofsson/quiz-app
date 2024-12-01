import styles from "../styles/about.module.css";

const About = () => (
  <div className={styles.aboutContainer}>
    <h1 className={styles.aboutTitle}>About Us</h1>
    <div className={styles.aboutContent}>
      <p>
        Using https://opentdb.com/api_config.php free api, all cred to them.
      </p>
    </div>
  </div>
);

export default About;
