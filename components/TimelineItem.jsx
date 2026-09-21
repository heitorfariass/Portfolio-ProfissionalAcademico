import Image from "next/image";
import styles from "./timeline-item.module.css";

export default function TimelineItem({ item }) {
  return (
    <article className={styles.item}>
      <div className={styles.marker} aria-hidden="true" />

      <div className={styles.period}>
        <span className={styles.periodLabel}>{item.period}</span>
      </div>

      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.institution}>
        {item.institution && <span className={styles.org}>{item.institution}</span>}
        {item.company && <span className={styles.org}>{item.company}</span>}
      </p>

      {item.description && (
        <p className={styles.description}>{item.description}</p>
      )}

      {item.courses?.length > 0 && (
        <div className={styles.courses}>
          <p className={styles.coursesLabel}>disciplinas em destaque</p>
          <ul className={styles.coursesList}>
            {item.courses.map((c) => (
              <li key={c} className={styles.course}>
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.skills?.length > 0 && (
        <ul className={styles.skills}>
          {item.skills.map((s) => (
            <li key={s} className={styles.skill}>
              {s}
            </li>
          ))}
        </ul>
      )}

      {item.progress && (
        <div
          className={styles.progress}
          role="progressbar"
          aria-valuenow={item.progress.done}
          aria-valuemin={0}
          aria-valuemax={item.progress.total}
          aria-label={`${item.progress.done} de ${item.progress.total} cursos concluídos`}
        >
          <div
            className={styles.progressFill}
            style={{ width: `${(item.progress.done / item.progress.total) * 100}%` }}
          />
          <span className={styles.progressText}>
            {item.progress.done}/{item.progress.total} cursos · {item.period}
          </span>
        </div>
      )}

      {item.image && (
        <figure className={styles.badgeFigure}>
          <Image
            src={item.image.src}
            alt={item.image.alt}
            width={item.image.width}
            height={item.image.height}
            className={styles.badgeImage}
          />
        </figure>
      )}

      {item.link && (
        <a
          href={item.link.url}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          {item.link.label} <span aria-hidden="true">↗</span>
        </a>
      )}
    </article>
  );
}
