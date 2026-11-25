import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-display" });

export const metadata = {
  title: "AdVantage — Social media marketing",
  description: "Social media marketing packages that grow your brand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${display.variable}`}>
        <Navbar />
        {children}
        <footer className="footer">
          <div className="container">
            <span>© {new Date().getFullYear()} AdVantage. All rights reserved.</span>
            <span>Built with Next.js</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
