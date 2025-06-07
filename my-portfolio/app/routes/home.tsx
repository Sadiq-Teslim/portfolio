import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import HeroSection from "./hero";
import Navbar from "./navbar";

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
    </div>
  );
}