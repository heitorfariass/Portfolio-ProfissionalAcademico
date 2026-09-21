import styles from "./section.module.css";

export default function Section({ id, tag, title, children }) {
  return (
    <section id={id} className={styles.section}>
      <p className={styles.tag}>{tag}</p>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
}
