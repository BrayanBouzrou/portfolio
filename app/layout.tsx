import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import styles from "@/app/styles/Header.module.css";
import Link from "next/link";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Mon Portfolio Éco-responsable",
    description: "Portfolio personnel minimisant son impact environnemental.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Roboto+Mono&display=swap"
            />
            <link rel="icon" href="/favicon.ico" />
            <title></title>
        </head>
        <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <header className={styles.header}>
            <h1>Mon Portfolio</h1>
            <nav>
                <ul>
                    <li><Link href="/home/">Accueil</Link></li>
                    <li><Link href="/about/">À propos</Link></li>
                    <li><Link href="/contact/">Contact</Link></li>
                </ul>
            </nav>
        </header>
        <main>{children}</main>
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Mon Portfolio Éco-responsable. Tous droits réservés.</p>
        </footer>
        </body>
        </html>
    );
}
