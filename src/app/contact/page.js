import styles from "../styles/contact.module.css";

const ContactForm = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contact Us</h1>
      <form className={styles.contactForm}>
        <input
          type="text"
          placeholder="Name"
          required
          className={styles.inputField}
        />
        <input
          type="email"
          placeholder="Email"
          required
          className={styles.inputField}
        />
        <textarea placeholder="Message" required className={styles.textArea} />
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
