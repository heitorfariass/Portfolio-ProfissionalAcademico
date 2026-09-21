import styles from "./contact-list.module.css";
import { profile } from "@/data/profile";

const ICONS = {
  email: "✉",
  github: "⌥",
  linkedin: "in",
};

export default function ContactList() {
  const items = [
    { key: "email", label: "email", value: profile.contact.email, href: `mailto:${profile.contact.email}` },
    { key: "github", label: "github", value: "github.com/heitorfariass", href: profile.contact.github },
    { key: "linkedin", label: "linkedin", value: "linkedin.com/in/heitorfariassantos", href: profile.contact.linkedin },
  ];

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.key} className={styles.item}>
          <span className={styles.icon} aria-hidden="true">
            {ICONS[item.key]}
          </span>
          <span className={styles.label}>{item.label}</span>
          <a href={item.href} target="_blank" rel="noreferrer" className={styles.value}>
            {item.value} <span aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
