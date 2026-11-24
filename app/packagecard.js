import Link from "next/link";
import styles from "./page.module.css";

export default function PackageCard({ packageData, featured }) {
  const { id, packageName, price, photo, additionalInfo } = packageData;
  return (
    <Link href={`/package-info/${id}`} className={`card ${styles.pkg} ${featured ? styles.featured : ""}`}>
      {featured && <span className={styles.badge}>Most popular</span>}
      <div className={styles.pkgImage}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photo} alt={packageName} loading="lazy" />
      </div>
      <div className={styles.pkgBody}>
        <h3>{packageName}</h3>
        <p className={styles.pkgInfo}>{additionalInfo}</p>
        <div className={styles.pkgFoot}>
          <span className={styles.price}>${price}<small>/mo</small></span>
          <span className={styles.more}>View details →</span>
        </div>
      </div>
    </Link>
  );
}
