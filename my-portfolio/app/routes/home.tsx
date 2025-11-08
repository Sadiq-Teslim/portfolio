import type { Route } from "./+types/home";
import heroImage from "../assets/my-image.jpg";
import ogImage from "../assets/og-image.svg";
import HeroSection from "./hero";
import Navbar from "./navbar";
import FeaturedProjects from "./featuredp";
import AboutSection from "./about";
import Footer from "./footer";
import ExperienceSection from "./experience";
import ContactSection from "./contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teslim Sadiq | Fullstack Developer & AI Engineer" },
    {
      name: "description",
      content:
        "Teslim Sadiq builds AI-first, payments-ready platforms including FairPlay Africa, ULES e-voting, GPAi, and more. Explore projects, experience, and ways to collaborate.",
    },
    {
      name: "keywords",
      content:
        "Teslim Sadiq, Teslim Adetola Sadiq, Teslim Codes, AI engineer Nigeria, fullstack developer Lagos, FairPlay Africa, ULES voting platform, GPAi, Kula companion",
    },
    { name: "robots", content: "index, follow" },
  { property: "og:title", content: "Teslim Sadiq | Fullstack Developer & AI Engineer" },
    {
      property: "og:description",
      content:
        "Explore award-winning AI and fintech builds from Teslim Sadiq—FairPlay Africa, ULES Voting, GPAi, Kula, EchoWatch, and more.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://teslimcodes.tech" },
    { property: "og:site_name", content: "Teslim Codes" },
    { property: "og:image", content: "https://teslimcodes.tech/og-image.svg" },
    { property: "og:image:type", content: "image/svg+xml" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Teslim Sadiq | Fullstack Developer & AI Engineer" },
    {
      name: "twitter:description",
      content:
        "Award-winning engineer shipping AI platforms, payments funnels and predictive security dashboards across Africa.",
    },
    { name: "twitter:site", content: "@teslimadetola08" },
    { name: "twitter:image", content: "https://teslimcodes.tech/og-image.svg" },
    { name: "author", content: "Teslim Adetola Sadiq" },
  ];
}

export function links() {
  return [
    { rel: "preload", as: "image", href: heroImage },
    { rel: "image_src", href: ogImage },
  ];
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedProjects />
  <ExperienceSection />
  <ContactSection />
      <AboutSection />
      <Footer />
    </div>
  );
}