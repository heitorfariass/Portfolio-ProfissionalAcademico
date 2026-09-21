import Link from "next/link";
import styles from "./project-card.module.css";

export default function ProjectCard({ project }) {
  const internal = project.url.startsWith("/");

  const LinkTag = internal ? Link : "a";
  const linkProps = internal
    ? { href: project.url }
    : { href: project.url, target: "_blank", rel: "noreferrer" };

  return (
    <article
      className={`${styles.card} ${project.featured ? styles.featured : ""}`}
    >
      {project.featured && (
        <span className={styles.badge}>projeto principal</span>
      )}

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.tagline}>{project.tagline}</p>
      {(Array.isArray(project.description)
        ? project.description
        : [project.description]
      ).map((paragraph) => (
        <p key={paragraph.slice(0, 24)} className={styles.description}>
          {paragraph}
        </p>
      ))}

      <ul className={styles.tech}>
        {project.tech.map((t) => (
          <li key={t} className={styles.chip}>
            {t}
          </li>
        ))}
      </ul>

      <LinkTag {...linkProps} className={styles.link}>
        {project.linkLabel} <span aria-hidden="true">→</span>
      </LinkTag>
    </article>
  );
}
