"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import PackageCard from './packagecard';
import styles from './page.module.css';
import { BarLoader } from 'react-spinners';

export default function Home() {
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [customPackage, setCustomPackage] = useState({
    price: null,
    phone: '',
    instagramProfile: '',
  });

  const handleInputChange = (field, value) => {
    setCustomPackage((prevPackage) => ({ ...prevPackage, [field]: value }));
  };

  const handleCustomPackageSubmit = () => {
    console.log('Custom Package Submitted:', customPackage);
    // You can add code here to send the custom package data to the server
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/packages?id=-1');
        if (response.ok) {
          const data = await response.json();
          setPackages(data.packages);
        } else {
          console.error('Error fetching packages');
        }
      } catch (error) {
        console.error('Error fetching packages:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      {isLoading ? (
        <BarLoader />
      ) : (
        <>
          <div className={styles.grid}>
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} packageData={pkg} />
            ))}
          </div>
          <div className={styles.customPackageForm}>
            <Image
              src="https://pbs.twimg.com/profile_images/1453818753880190978/HqrrEcrI_400x400.png"
              width={200}
              height={200}
            />
            <h2>Create Custom Package</h2>
            <input
              type="number"
              placeholder="Price"
              value={customPackage.price}
              onChange={(e) => handleInputChange('price', e.target.value)}
            />
            <input
              type="number"
              placeholder="Phone number"
              value={customPackage.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
            <input
              type="text"
              placeholder="Instagram Profile"
              value={customPackage.instagramProfile}
              onChange={(e) => handleInputChange('instagramProfile', e.target.value)}
            />
            <button onClick={handleCustomPackageSubmit}>Submit</button>
          </div>
        </>
      )}
    </div>
  );
}
