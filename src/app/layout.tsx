import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ebGaramond, cormorantGaramond } from './ui/fonts';
import "./globals.css";
import Header from "@/app/ui/header";
import { auth } from "../../auth";
import styles from "@/app/page.module.css";

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  const session = await auth();
  const isLoggedIn = !!session?.user;

  return (
    <html lang="en" className={ebGaramond.className}>
      <body>
        <div className={cormorantGaramond.className}>
          <div className={styles.page}>
            <Header isLoggedIn={isLoggedIn} />
            <main className={styles.main}>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}