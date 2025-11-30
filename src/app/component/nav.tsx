import styles from "@/app/page.module.css"
import Link from "next/link";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <a href="/" className={styles.a}>Home</a>
            <a href="/products" className={styles.a}>Products</a>
            <a href="/seller-dashboard" className={styles.a}>Artisans</a>
            <a href="/login" className={styles.login}>Login</a>
        </nav>
    );
}