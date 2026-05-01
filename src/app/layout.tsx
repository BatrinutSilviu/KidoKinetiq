import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "KidoKinetiq — Kinetoterapie Pediatrică",
  description: "Kinetoterapie specializată pentru copii cu afecțiuni neurologice. Hidrokinetoterapie, terapie acvatică și recuperare medicală pediatrică.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={nunito.variable}>
      <body className="min-h-screen flex flex-col bg-cream antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
