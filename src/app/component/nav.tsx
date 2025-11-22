import styles from "../page.module.css"

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <a href="/" className={styles.a}>Home</a>
            <a href="/products" className={styles.a}>Products</a>
            <a href="/artisans" className={styles.a}>Artisans</a>
        </nav>
    );
}