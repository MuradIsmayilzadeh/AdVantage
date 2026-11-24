"use client";
import { useState, useEffect } from "react";
import PackageCard from "./packagecard";
import styles from "./page.module.css";

const stats = [["120+", "Brands grown"], ["4.8M", "Monthly reach"], ["3.2x", "Avg. engagement lift"]];

export default function Home() {
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [form, setForm] = useState({ budget: "", phone: "", instagram: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    fetch("/api/packages?id=-1")
      .then((r) => (r.ok ? r.json() : { packages: [] }))
      .then((d) => setPackages(d.packages || []))
      .catch(() => setPackages([]))
      .finally(() => setIsLoading(false));
  }, []);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Social media marketing</span>
          <h1 className="h1">Turn followers into <span className="gradient-text">customers</span>.</h1>
          <p className="lead">AdVantage plans, designs and runs your Instagram so you can focus on your business. Pick a package or build your own.</p>
          <div className={styles.heroCta}>
            <a href="#packages" className="btn btn-primary">See packages</a>
            <a href="#custom" className="btn btn-ghost">Build a custom plan</a>
          </div>
          <div className={styles.stats}>
            {stats.map(([n, l]) => (<div key={l}><strong>{n}</strong><span>{l}</span></div>))}
          </div>
        </div>
      </section>

      <section id="packages" className="section">
        <div className="container">
          <span className="eyebrow">Pricing</span>
          <h2 className="h2">Packages for every stage</h2>
          {isLoading ? (
            <div className={styles.grid}>{[0, 1, 2].map((i) => <div key={i} className={`card ${styles.skeleton}`} />)}</div>
          ) : packages.length ? (
            <div className={styles.grid}>
              {packages.map((pkg, i) => <PackageCard key={pkg.id} packageData={pkg} featured={i === 1} />)}
            </div>
          ) : (
            <p className="lead">No packages are available right now.</p>
          )}
        </div>
      </section>

      <section id="custom" className="section">
        <div className={`container card ${styles.custom}`}>
          <div>
            <span className="eyebrow">Custom</span>
            <h2 className="h2">Need something different?</h2>
            <p className="lead">Tell us your budget and your Instagram handle. We will call you within one business day with a tailored plan.</p>
          </div>
          {sent ? (
            <div className={styles.thanks}><h3>Thanks!</h3><p>We received your request and will be in touch soon.</p></div>
          ) : (
            <form onSubmit={submit} className={styles.form}>
              <input className="input" type="number" min="0" placeholder="Monthly budget ($)" value={form.budget} onChange={update("budget")} required />
              <input className="input" type="tel" placeholder="Phone number" value={form.phone} onChange={update("phone")} required />
              <input className="input" type="text" placeholder="Instagram profile (@handle)" value={form.instagram} onChange={update("instagram")} required />
              <button className="btn btn-primary" type="submit">Request a plan</button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
