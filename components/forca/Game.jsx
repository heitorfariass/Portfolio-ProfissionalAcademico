"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { randomWord } from "@/data/words";
import HangmanSVG from "./HangmanSVG";
import Keyboard from "./Keyboard";
import styles from "./forca.module.css";

const MAX_ERRORS = 6;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Game() {
  // O sorteio acontece só no cliente: se rodasse durante o render
  // do servidor, o HTML gerado teria uma palavra diferente da do
  // cliente e o React acusaria erro de hidratação.
  const [word, setWord] = useState(null);
  const [guessed, setGuessed] = useState(() => new Set());

  useEffect(() => {
    if (word === null) setWord(randomWord());
  }, [word]);

  // espelho da palavra para leitura síncrona dentro do updater
  const wordRef = useRef(word);
  useEffect(() => {
    wordRef.current = word;
  }, [word]);

  const wrongLetters = [...guessed].filter((l) => !word.includes(l));
  const correctLetters = [...guessed].filter((l) => word.includes(l));
  const errors = wrongLetters.length;

  const won = word !== null && word.split("").every((l) => guessed.has(l));
  const lost = word !== null && errors >= MAX_ERRORS;
  const over = won || lost;

  // Toda a validação acontece dentro do setGuessed (atualização
  // funcional): mesmo se vários chutes chegarem no mesmo tick,
  // o estado anterior garante que um jogo encerrado não aceita
  // novas letras.
  const play = useCallback((letter) => {
    letter = letter.toUpperCase();
    setGuessed((prev) => {
      if (prev.has(letter) || !ALPHABET.includes(letter)) return prev;
      const wrongs = [...prev].filter((l) => !wordRef.current.includes(l)).length;
      const alreadyWon = wordRef.current.split("").every((l) => prev.has(l));
      if (alreadyWon || wrongs >= MAX_ERRORS) return prev;
      return new Set(prev).add(letter);
    });
  }, []);

  // suporte ao teclado físico
  useEffect(() => {
    const onKey = (e) => {
      if (e.repeat) return;
      const key = e.key.toUpperCase();
      if (key.length === 1 && key >= "A" && key <= "Z") play(key);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [play]);

  const restart = () => {
    setWord((w) => randomWord(w));
    setGuessed(new Set());
  };

  const remaining = MAX_ERRORS - errors;

  if (word === null) {
    return (
      <div className={styles.game}>
        <p className={styles.loading}>sorteando palavra…</p>
      </div>
    );
  }

  return (
    <div className={styles.game}>
      {/* palavra oculta */}
      <div
        className={styles.word}
        role="group"
        aria-label="Palavra a ser adivinhada"
      >
        {word.split("").map((letter, i) => {
          const shown = guessed.has(letter);
          return (
            <span
              key={`${letter}-${i}`}
              className={`${styles.cell} ${shown ? styles.cellShown : ""}`}
              aria-label={shown ? letter : "letra oculta"}
            >
              {shown ? letter : ""}
            </span>
          );
        })}
      </div>

      {/* status de tentativas */}
      <p className={styles.attempts} aria-live="polite">
        {remaining > 0 ? (
          <>
            <span className={styles.attemptsCount}>{remaining}</span> tentativa
            {remaining !== 1 ? "s" : ""} restante{remaining !== 1 ? "s" : ""}
          </>
        ) : (
          "sem tentativas restantes"
        )}
      </p>

      <div className={styles.board}>
        <HangmanSVG errors={errors} />
        <Keyboard
          alphabet={ALPHABET}
          guessed={guessed}
          word={word}
          disabled={over}
          onGuess={play}
        />
      </div>

      {/* letras tentadas */}
      <div className={styles.tried}>
        <p className={styles.triedLabel}>letras corretas</p>
        <div className={styles.chips}>
          {correctLetters.length === 0 && (
            <span className={styles.empty}>—</span>
          )}
          {correctLetters.map((l) => (
            <span key={l} className={`${styles.chip} ${styles.chipOk}`}>
              {l}
            </span>
          ))}
        </div>

        <p className={styles.triedLabel}>letras erradas</p>
        <div className={styles.chips}>
          {wrongLetters.length === 0 && (
            <span className={styles.empty}>—</span>
          )}
          {wrongLetters.map((l) => (
            <span key={l} className={`${styles.chip} ${styles.chipBad}`}>
              {l}
            </span>
          ))}
        </div>
      </div>

      {/* vitória / derrota + reiniciar */}
      <div className={styles.endzone} aria-live="assertive">
        {won && (
          <p className={`${styles.message} ${styles.win}`}>
            parabéns, você venceu! a palavra era{" "}
            <strong className={styles.reveal}>{word}</strong>
          </p>
        )}
        {lost && (
          <p className={`${styles.message} ${styles.lose}`}>
            fim de jogo. a palavra era{" "}
            <strong className={styles.reveal}>{word}</strong>
          </p>
        )}
        <button type="button" onClick={restart} className={styles.restart}>
          ↻ reiniciar
        </button>
      </div>
    </div>
  );
}
