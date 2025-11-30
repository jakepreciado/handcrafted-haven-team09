import styles from '@/app/page.module.css'
import Nav from "@/app/component/nav"
import { ebGaramond } from "@/app/fonts";
import Image from "next/image";
import logo from "../../../public/handmade-basket-transparent-background.png";

export default function Header() {
    return (
        <header className={styles.header}>
            <a href="/">
                <div className={styles.imagediv}>
                    <Image
                        src={logo}
                        alt="Handmade Basket"
                        loading="lazy"
                    />
                    <h1 className={ebGaramond.className}>Handcrafted Haven</h1>
                </div>
            </a>
            <Nav />
        </header>
    );
}