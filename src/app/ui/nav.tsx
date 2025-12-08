import styles from "@/app/page.module.css";

type NavProps = {
    isLoggedIn: boolean;
};

export default function Nav({ isLoggedIn }: NavProps) {
    return (
        <nav className={styles.nav}>
            <a href="/" className={styles.a}>Home</a>
            <a href="/products" className={styles.a}>Products</a>
            <a href="/seller-dashboard" className={styles.a}>Artisans</a>

            {!isLoggedIn && (
                <a href="/login" className={styles.login}>Login</a>
            )}
        </nav>
    );
}