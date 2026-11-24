"use client"
// pages/PackageInfo.js

import { useState, useEffect } from 'react';
import styles from './page.module.css'; // Import your CSS module

const PackageInfo = ({ params }) => {
  const { id } = params;
  const [packageData, setPackageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/packages?id=${id}`);
        if (response.ok) {
          const data = await response.json();
          setPackageData(data.pkg);
        }
      } catch (error) {
        console.error('Error fetching package data:', error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div className={styles.packageInfoContainer}>
      {packageData && (
        <div className={styles.packageDetails}>
          <div className={styles.packageImage}>
            <img src={packageData.photo} alt="Package Photo" />
          </div>
          <div className={styles.packageInfoText}>
            <h1>Package Information</h1>
            <h2>{packageData.packageName}</h2>
            <p className={styles.packagePrice}>Price: ${packageData.price}</p>
            <p className={styles.packageInfo}>Information: {packageData.information}</p>
            <button className={styles.orderButton}>Order Package</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageInfo;
