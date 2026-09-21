import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span className={styles.prompt}>&gt;_</span> heitor.farias ·{" "}
        {new Date().getFullYear()} · construído com{" "}
        <a href="https://nextjs.org" target="_blank" rel="noreferrer">
          Next.js
        </a>
      </p>
    </footer>
  );
}
