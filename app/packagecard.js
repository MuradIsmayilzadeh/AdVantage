// PackageCard.js
import Image from 'next/image';
import styles from './page.module.css';

export default function PackageCard({ packageData }) {
  const { id, packageName, price, photo, additionalInfo } = packageData;

  return (
    <a href={`/package-info/${id}`} className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <Image src={photo} alt={packageName} width={200} height={150} />
        </div>
        <div className={styles.cardBody}>
          <h2>{packageName}</h2>
          <p className={styles.price}>Price: ${price}</p>
          <p className={styles.additionalInfo}>{additionalInfo}</p>
        </div>
      </div>
    </a>
  );
}
