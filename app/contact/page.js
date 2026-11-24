"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <main className="section">
      <div className="container" style={{ maxWidth: 640 }}>
        <span className="eyebrow">Contact</span>
        <h1 className="h2">Let&apos;s grow your brand</h1>
        <p className="lead">Send us a message and we will get back to you within one business day.</p>
        {sent ? (
          <div className="card pad" style={{ marginTop: 28 }}>
            <h3 style={{ marginTop: 0 }}>Message sent</h3>
            <p className="muted" style={{ margin: 0 }}>Thanks for reaching out. We will reply soon.</p>
          </div>
        ) : (
          <form className="card form-stack" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input className="input" placeholder="Your name" required />
            <input className="input" type="email" placeholder="Email" required />
            <input className="input" placeholder="Instagram handle (optional)" />
            <textarea className="input" rows={5} placeholder="Tell us about your business" required />
            <button className="btn btn-primary" type="submit">Send message</button>
          </form>
        )}
      </div>
    </main>
  );
}
