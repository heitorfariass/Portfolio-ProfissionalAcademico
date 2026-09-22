"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import MatrixRain from "./MatrixRain";
import DeleteText from "./DeleteText";
import styles from "./hero.module.css";
import { profile } from "@/data/profile";

export default function Hero() {
  const [tagIndex, setTagIndex] = useState(0);

  // alterna os subtítulos a cada 4,5s
  useEffect(() => {
    const id = setInterval(
      () => setTagIndex((v) => (v + 1) % profile.heroTaglines.length),
      4500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.hero}>
      <MatrixRain />

      <div className={styles.content}>
        <div className={styles.portraitWrap}>
          <Image
            src="/images/heitor.jpg"
            alt="Foto de Heitor Farias Santos"
            width={128}
            height={128}
            priority
            className={styles.portrait}
          />
          <span className={styles.statusDot} aria-hidden="true" />
        </div>

        <p className={styles.hello}>olá, mundo — eu sou</p>

        <h1 className={styles.name}>
          <DeleteText text={profile.name} />
        </h1>

        <p className={styles.tagline}>
          <DeleteText text={profile.heroTaglines[tagIndex]} />
          <span className={styles.cursor} aria-hidden="true" />
        </p>

        <div className={styles.ctas}>
          <Link href="#projetos" className={styles.primary}>
            ver projetos
          </Link>
          <Link href="/forca" className={styles.secondary}>
            ./jogar forca
          </Link>
        </div>
      </div>

      <a
        href="#sobre"
        className={styles.scrollHint}
        aria-label="Rolar para a seção sobre"
      >
        ▾
      </a>
    </section>
  );
}
