import Link from "next/link";
import Game from "@/components/forca/Game";
import styles from "@/components/forca/forca.module.css";

export const metadata = {
  title: "Jogo da Forca — Heitor Farias Santos",
  description:
    "Jogo da Forca feito em Next.js: teclado virtual, 6 tentativas, boneco em SVG e mais de 40 palavras de tecnologia.",
};

export default function ForcaPage() {
  return (
    <main className={styles.page}>
      <div className={styles.pageInner}>
        <Link href="/" className={styles.back}>
          ← voltar ao portfólio
        </Link>

        <header className={styles.pageHeader}>
          <p className={styles.pageTag}>projeto pessoal</p>
          <h1 className={styles.pageTitle}>jogo da forca</h1>
          <p className={styles.pageSub}>
            adivinhe a palavra oculta · você tem 6 tentativas
          </p>
        </header>

        <Game />
      </div>
    </main>
  );
}
