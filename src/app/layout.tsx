import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ebGaramond, cormorantGaramond } from './fonts';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description: "A site to find and sell handcrafted items",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ebGaramond.className}>
      <body>
        <div className={cormorantGaramond.className}>
          {children}
        </div>
      </body>
    </html>
  );
}