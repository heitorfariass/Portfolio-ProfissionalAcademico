"use client";

import { useEffect, useState } from "react";

const CHARS = "!<>-_\\/[]{}=+*^?#";

/**
 * Efeito de "desencriptação": os caracteres aleatórios são
 * substituídos pelas letras reais, da esquerda para a direita.
 * Roda uma única vez e respeita prefers-reduced-motion.
 */
export default function DeleteText({ text, className = "" }) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let raf;
    const totalFrames = 36;

    const tick = () => {
      frame++;
      const reveal = Math.floor((frame / totalFrames) * text.length);
      let out = text.slice(0, reveal);
      for (let i = reveal; i < text.length; i++) {
        out += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setDisplay(out);
      if (frame < totalFrames) raf = requestAnimationFrame(tick);
      else setDisplay(text);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text]);

  return <span className={className}>{display}</span>;
}
