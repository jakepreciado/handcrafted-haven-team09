"use client";

import { useState } from "react";
import styles from '@/app/page.module.css';
import Nav from "@/app/ui/nav";
import { ebGaramond } from "@/app/ui/fonts";
import Image from "next/image";
import logo from "../../../public/handmade-basket-transparent-background.png";

type HeaderProps = {
    isLoggedIn: boolean;
};

export default function Header({ isLoggedIn }: HeaderProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <a href="/">
                    <div className={styles.imagediv}>
                        <Image src={logo} alt="Handmade Basket" loading="lazy" />
                        <h1 className={ebGaramond.className}>Handcrafted Haven</h1>
                    </div>
                </a>

                <div className={styles.desktopNav}>
                    <Nav isLoggedIn={isLoggedIn} />
                </div>

                <button className={styles.hambutton} onClick={() => setOpen(true)}>
                    ☰
                </button>
            </header>

            <div
                className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
                onClick={() => setOpen(false)}
            />

            <aside
                className={`${styles.sidebar} ${open ? styles.sidebarOpen : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button className={styles.closebtn} onClick={() => setOpen(false)}>
                    ✕
                </button>

                <Nav isLoggedIn={isLoggedIn} />
            </aside>
        </>
    );
}