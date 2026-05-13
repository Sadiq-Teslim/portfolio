import type { Route } from "./+types/home";
import portrait from "~/assets/teslim-portrait.jpg";
import { Shell } from "~/components/Shell";
import { profile, projects, resumeUrl } from "~/data/profile";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teslim Sadiq - Software Engineer" },
    {
      name: "description",
      content:
        "Teslim Sadiq is a software engineer in Lagos building scalable web systems across edtech, fintech, civic tech, and AI products.",
    },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "Teslim Sadiq - Software Engineer" },
    {
      property: "og:description",
      content:
        "Software engineer building scalable web systems across edtech, fintech, civic tech, and AI products.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://teslimcodes.tech" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: "Teslim Sadiq - Software Engineer" },
    { name: "twitter:site", content: "@teslimcodes" },
    { name: "author", content: "Teslim Adetola Sadiq" },
  ];
}

export default function Home() {
  const featured = projects.slice(0, 4);

  return (
    <Shell>
      <section className="home-layout">
        <div className="home-copy">
          <h1>{profile.name}</h1>
          <p>{profile.summary}</p>
          <p>{profile.current}</p>
          <p>
            I have shipped production systems for live elections, AI learning workflows, developer automation, and consumer products. See selected{" "}
            <a href="/work">work</a>, read the short <a href="/about">about</a>, or open my{" "}
            <a href={resumeUrl}>resume</a>.
          </p>
        </div>

        <img className="portrait" src={portrait} alt="Teslim Sadiq" />
      </section>

      <section className="section-block">
        <div className="section-heading">
          <span>Selected work</span>
          <a href="/work">View all</a>
        </div>
        <div className="compact-work-list">
          {featured.map((project) => (
            <a
              key={project.title}
              className="compact-work-item"
              href={project.href ?? "/work"}
              target={project.href ? "_blank" : undefined}
              rel={project.href ? "noreferrer" : undefined}
            >
              <span>{project.title}</span>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </section>
    </Shell>
  );
}
