import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "ARpón | Detectamos lo que otros no ven",
  description:
    "Plataforma de análisis de contratación gubernamental con IA para detectar irregularidades y corrupción en contratos públicos.",
  keywords: [
    "contratación gubernamental",
    "transparencia",
    "corrupción",
    "análisis de contratos",
    "IA",
    "gobierno",
  ],
  openGraph: {
    title: "ARpón | Detectamos lo que otros no ven",
    description:
      "Plataforma de análisis de contratación gubernamental con IA para detectar irregularidades y corrupción en contratos públicos.",
    type: "website",
    locale: "es_ES",
    siteName: "ARpón",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="grain-overlay">{children}</body>
    </html>
  );
}
