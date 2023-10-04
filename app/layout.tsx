import Contact from "@/components/Contact";
import Navbar from "../components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

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
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className + ""}>
        <Navbar />
        {children}
        <Contact />
        <Analytics />
        <Script
          async
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-B2HE0ZELXC"
        />
        <Script id="g-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-B2HE0ZELXC');
        `}
        </Script>
        <Script strategy="afterInteractive" id="microsoft-clarity">
          {` (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "j2dkgfaeis");`}
        </Script>
      </body>
    </html>
  );
}
