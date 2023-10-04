import LoadingParent from "@/components/LoadingParent";
import About from "@/components/About";
import Work from "@/components/Work";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sohel Shekh - Portfolio",
  description: "Freelance Full Stack Web Developer (Open to work)",
  openGraph: {
    title: "Sohel Shekh - Portfolio",
    description: "Freelance Full Stack Web Developer (Open to work)",
    url: "https://sohel.tech",
    type: "website",
    images: [
      {
        url: "https://sohel.tech/bg-og.png",
        width: 1024,
        height: 1080,
        alt: "Sohel Shekh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sohel Shekh - Portfolio",
    description: "Freelance Full Stack Web Developer (Open to work)",

    images: ["https://sohel.tech/bg-og.png"],
  },
};

export default function Index() {
  return (
    <div className="">
      <LoadingParent />
      <About />
      <Work />
    </div>
  );
}
