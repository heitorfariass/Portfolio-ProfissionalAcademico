import Image from "next/image";
import styles from "./dineup-showcase.module.css";

/**
 * Vitrine do projeto principal (DINEUP): texto + galeria de
 * screenshots em moldura de celular, rolagem horizontal no mobile.
 */
export default function DineupShowcase({ project }) {
  return (
    <article className={styles.showcase}>
      <div className={styles.head}>
        <span className={styles.badge}>projeto principal</span>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.tagline}>{project.tagline}</p>
      </div>

      <div className={styles.body}>
        {project.description.map((paragraph) => (
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

        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          {project.linkLabel} <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className={styles.gallery}>
        {project.screenshots.map((shot) => (
          <figure key={shot.src} className={styles.frame}>
            <Image
              src={shot.src}
              alt={shot.alt}
              width={418}
              height={855}
              sizes="(max-width: 720px) 60vw, 200px"
              className={styles.shot}
            />
            <figcaption className={styles.caption}>{shot.caption}</figcaption>
          </figure>
        ))}
      </div>
    </article>
  );
}
