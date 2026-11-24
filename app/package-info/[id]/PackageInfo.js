"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import samplePackages from "../../lib/sample-packages";

export default function PackageInfo({ id }) {
  const [pkg, setPkg] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    // Static builds (GitHub Pages) have no API: read the built-in packages.
    if (process.env.NEXT_PUBLIC_STATIC_EXPORT) {
      const found = samplePackages.find((p) => String(p.id) === String(id));
      setPkg(found || null);
      setStatus(found ? "ok" : "missing");
      return;
    }
    fetch(`/api/packages?id=${id}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => { setPkg(d.pkg); setStatus("ok"); })
      .catch(() => setStatus("missing"));
  }, [id]);

  if (status === "loading") {
    return <main className={`container ${styles.wrap}`}><div className={`card ${styles.loading}`} /></main>;
  }
  if (status === "missing") {
    return (
      <main className={`container ${styles.wrap}`}>
        <h1 className="h2">Package not found</h1>
        <Link href="/#packages" className="btn btn-ghost">← Back to packages</Link>
      </main>
    );
  }

  return (
    <main className={`container ${styles.wrap}`}>
      <Link href="/#packages" className={styles.back}>← All packages</Link>
      <div className={`card ${styles.detail}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={pkg.photo} alt={pkg.packageName} className={styles.image} />
        <div className={styles.body}>
          <span className="eyebrow">Package</span>
          <h1 className="h2">{pkg.packageName}</h1>
          <p className={styles.price}>${pkg.price}<small>/month</small></p>
          <p className={styles.tagline}>{pkg.additionalInfo}</p>
          <p className={styles.info}>{pkg.information}</p>
          <Link href="/contact" className="btn btn-primary">Order this package</Link>
        </div>
      </div>
    </main>
  );
}
