import { Space_Grotesk, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const share = Share_Tech_Mono({
  variable: "--font-share",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Heitor Farias Santos — Portfólio",
  description:
    "Portfólio de Heitor Farias Santos, estudante de Ciência da Computação. Projetos, experiência, habilidades e um Jogo da Forca feito em Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${space.variable} ${share.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
