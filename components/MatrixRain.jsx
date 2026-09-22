"use client";

import { useEffect, useRef } from "react";
import styles from "./matrix-rain.module.css";

/**
 * Chuva Matrix sutil — apenas decorativa, renderizada atrás do hero.
 * Respeita prefers-reduced-motion e pausa quando fora da tela.
 */
export default function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf = 0;
    let columns = [];
    let scale = 1; // densidade de pixels (devicePixelRatio)
    const FONT = 16;
    const CHARS = "アイウエオカキクケコサシスセソ01234567890<>_/$#";

    function resize() {
      const { offsetWidth: w, offsetHeight: h } = canvas.parentElement;
      // renderiza na densidade real da tela — sem isso o celular borra e apaga os glifos
      scale = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * scale);
      canvas.height = Math.round(h * scale);
      const count = Math.floor(w / FONT);
      columns = Array.from({ length: count }, () =>
        Math.floor(Math.random() * -100)
      );
    }

    function draw() {
      // véu translúcido que apaga os rastros lentamente
      ctx.fillStyle = "rgba(10, 14, 10, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT * scale}px monospace`;

      columns.forEach((y, i) => {
        const x = i * FONT * scale;
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillStyle = "rgba(0, 255, 65, 0.85)";
        ctx.fillText(char, x, y * FONT * scale);
        if (y * FONT * scale > canvas.height && Math.random() > 0.96)
          columns[i] = 0;
        else columns[i] = y + 1;
      });
      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    // pausa quando o hero sai da viewport (economia de bateria)
    const observer = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(raf);
        if (entry.isIntersecting) draw();
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={styles.wrap} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.veil} />
    </div>
  );
}
