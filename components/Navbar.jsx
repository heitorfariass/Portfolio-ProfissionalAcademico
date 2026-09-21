"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";

const LINKS = [
  { href: "/#sobre", label: "sobre" },
  { href: "/#academico", label: "acadêmico" },
  { href: "/#profissional", label: "profissional" },
  { href: "/#projetos", label: "projetos" },
  { href: "/#contato", label: "contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoPrompt}>&gt;_</span> heitor.farias
        </Link>

        <ul className={styles.links}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={styles.link}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/forca" className={styles.forca}>
              ./forca
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
