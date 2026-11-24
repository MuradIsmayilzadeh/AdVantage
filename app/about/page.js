import Link from "next/link";

export const metadata = { title: "About — AdVantage" };

const values = [
  ["Data first", "Every post, reel and ad is measured. We double down on what works and drop what does not."],
  ["Creative craft", "Our designers and editors make content that stops the scroll and fits your brand."],
  ["Clear reporting", "Simple monthly reports that show growth, reach and the leads we brought in."],
];

export default function About() {
  return (
    <main className="section">
      <div className="container">
        <span className="eyebrow">About us</span>
        <h1 className="h1">A small team obsessed with <span className="gradient-text">growth</span>.</h1>
        <p className="lead">AdVantage is a social media marketing studio. We help local businesses and new brands build an audience on Instagram and turn it into revenue.</p>
        <div className="grid-3">
          {values.map(([title, text]) => (
            <div key={title} className="card pad">
              <h3 style={{ marginTop: 0 }}>{title}</h3>
              <p className="muted" style={{ marginBottom: 0 }}>{text}</p>
            </div>
          ))}
        </div>
        <Link href="/contact" className="btn btn-primary">Work with us</Link>
      </div>
    </main>
  );
}
