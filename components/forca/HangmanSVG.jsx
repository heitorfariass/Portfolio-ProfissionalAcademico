import styles from "./forca.module.css";

/**
 * Forca em SVG — traço fino, verde neon, 6 estágios:
 * 1 cabeça · 2 corpo · 3 braço E · 4 braço D · 5 perna E · 6 perna D
 */
export default function HangmanSVG({ errors }) {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 220 260"
      role="img"
      aria-label={`Forca com ${errors} de 6 erros`}
    >
      {/* estrutura da forca (sempre visível) */}
      <g className={styles.gallows}>
        <line x1="30" y1="245" x2="150" y2="245" />
        <line x1="60" y1="245" x2="60" y2="30" />
        <line x1="60" y1="30" x2="140" y2="30" />
        <line x1="140" y1="30" x2="140" y2="58" />
      </g>

      {/* 1 · cabeça */}
      <g className={errors >= 1 ? styles.part : styles.partHidden}>
        <circle cx="140" cy="76" r="18" />
      </g>

      {/* 2 · corpo */}
      <g className={errors >= 2 ? styles.part : styles.partHidden}>
        <line x1="140" y1="94" x2="140" y2="152" />
      </g>

      {/* 3 · braço esquerdo */}
      <g className={errors >= 3 ? styles.part : styles.partHidden}>
        <line x1="140" y1="106" x2="116" y2="130" />
      </g>

      {/* 4 · braço direito */}
      <g className={errors >= 4 ? styles.part : styles.partHidden}>
        <line x1="140" y1="106" x2="164" y2="130" />
      </g>

      {/* 5 · perna esquerda */}
      <g className={errors >= 5 ? styles.part : styles.partHidden}>
        <line x1="140" y1="152" x2="120" y2="184" />
      </g>

      {/* 6 · perna direita */}
      <g className={errors >= 6 ? styles.part : styles.partHidden}>
        <line x1="140" y1="152" x2="160" y2="184" />
      </g>
    </svg>
  );
}
