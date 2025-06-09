import type { Route } from "./+types/home";
import HeroSection from "./hero";
import Navbar from "./navbar";
import FeaturedProjects from "./featuredp";
import AboutSection from "./about";
import Footer from "./footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sadiq Teslim Adetola || Portfolio" },
    { name: "description", content: "Welcome to my portfolio" },
  ];
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedProjects />
      <AboutSection />
      <Footer />
    </div>
  );
}