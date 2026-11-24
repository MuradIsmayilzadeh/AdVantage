import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>Ad<span className="gradient-text">Vantage</span></Link>
        <nav className={styles.links}>
          <Link href="/#packages" className={styles.hideSm}>Packages</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" className={`btn btn-primary ${styles.cta}`}>Get started</Link>
        </nav>
      </div>
    </header>
  );
}
