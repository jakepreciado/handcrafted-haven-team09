import styles from "@/app/page.module.css";
import { logout } from "@/app/lib/actions";
import { cormorantGaramond } from "./fonts";

type NavProps = {
    isLoggedIn: boolean;
};

export default function Nav({ isLoggedIn }: NavProps) {
    return (
        <nav className={styles.nav}>
            <a href="/" className={styles.a}>Home</a>
            <a href="/products" className={styles.a}>Products</a>
            <a href="/artisans" className={styles.a}>Artisans</a>
            <a href="/seller-dashboard" className={styles.a}>Sellers</a>

            {isLoggedIn ? (
                <form action={logout} className="inline">
                    <button type="submit" className={`${cormorantGaramond.className} ${styles.login}`}>
                        Logout
                    </button>
                </form>
            ) : (
                <a href="/login" className={styles.login}>Login</a>
            )}
        </nav>
    );
}
