import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";


export const metadata: Metadata = {
  title: "Andhra Angels - Angel Investors and Startup Entrepreneurs",
  description: "Connecting angel investors with startup entrepreneurs to foster innovation and growth.",
  keywords: "angel investors, startup entrepreneurs, investment, funding, innovation, business growth",
  viewport: "width=device-width, initial-scale=1.0",
  // charset: "UTF-8",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.andhraangels.com",
    title: "Andhra Angels - Angel Investors and Startup Entrepreneurs",
    description: "Connecting angel investors with startup entrepreneurs to foster innovation and growth.",
    images: [
      {
        url: "https://www.andhraangels.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Andhra Angels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@andhraangels",
    title: "Andhra Angels - Angel Investors and Startup Entrepreneurs",
    description: "Connecting angel investors with startup entrepreneurs to foster innovation and growth.",
    // image: "https://www.andhraangels.com/twitter-image.jpg",
  },
};
export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      {/* <Pricing /> */}
      <Contact />
    </main>
  );
}
