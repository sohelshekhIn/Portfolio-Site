import Contact from "@/components/Contact";
import Navbar from "../components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sohel Shekh - Full Stack Developer",
  description:
    "Full Stack Web Developer based in India, specializing in building exceptional websites, applications, and everything in between.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* set theme color */}
      <head>
        <meta name="theme-color" content="#403672" />
      </head>
      <body className={inter.className + ""}>
        <Navbar />
        {children}
        <Contact />
      </body>
    </html>
  );
}
