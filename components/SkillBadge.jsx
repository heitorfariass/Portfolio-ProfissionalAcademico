import styles from "./skill-badge.module.css";

export default function SkillBadge({ label }) {
  return <span className={styles.badge}>{label}</span>;
}
