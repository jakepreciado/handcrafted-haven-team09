import styles from '../page.module.css'
import Nav from "./nav"
import { ebGaramond } from "../fonts";
import Image from "next/image";
import logo from "../../../public/handmade-basket-transparent-background.png";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.imagediv}>
                <Image
                    src={logo}
                    alt="Handmade Basket"
                />
                <h1 className={ebGaramond.className}>Handcrafted Haven</h1>
            </div>
            <Nav />
        </header>
    );
}