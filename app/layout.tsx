import type { Metadata } from "next";
import { Montserrat, Fraunces } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "El Rincón de los Deseos · Residencial Bora",
  description:
    "Esta azotea acaba de empezar su historia... y queremos escribirla contigo. Déjanos tu deseo para la azotea o para la vida en Bora.",
  openGraph: {
    title: "El Rincón de los Deseos · Residencial Bora",
    description:
      "¿Qué te gustaría vivir aquí? Déjanos tu deseo y ayúdanos a imaginar todo lo que este espacio puede llegar a ser.",
    type: "website",
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
      className={`${montserrat.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bora-mist)] text-[var(--bora-forest)] font-sans">
        {children}
      </body>
    </html>
  );
}
