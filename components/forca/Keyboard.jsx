"use client";

import styles from "./forca.module.css";

export default function Keyboard({ alphabet, guessed, word, disabled, onGuess }) {
  return (
    <div className={styles.keyboard} role="group" aria-label="Teclado virtual">
      {alphabet.map((letter) => {
        const used = guessed.has(letter);
        const correct = used && word.includes(letter);
        const wrong = used && !word.includes(letter);
        return (
          <button
            key={letter}
            type="button"
            onClick={() => onGuess(letter)}
            disabled={used || disabled}
            aria-label={`Tentar a letra ${letter}`}
            className={`${styles.key} ${correct ? styles.keyOk : ""} ${
              wrong ? styles.keyBad : ""
            }`}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}
