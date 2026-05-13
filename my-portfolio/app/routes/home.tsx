import type { Route } from "./+types/home";
import portrait from "~/assets/teslim-portrait.jpg";
import { Shell } from "~/components/Shell";
import { profile, projects, resumeUrl, seoImage, siteUrl } from "~/data/profile";

const title = "Teslim Sadiq | Software Engineer";
const description =
  "Teslim Sadiq is a Software Engineer in Lagos building scalable systems, APIs, data platforms, and product-facing interfaces with TypeScript, Node.js, Python, FastAPI, PostgreSQL, MongoDB, and Redis.";

export function links() {
  return [{ rel: "canonical", href: siteUrl }];
}

export function meta({}: Route.MetaArgs) {
  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow" },
    { name: "keywords", content: "Teslim Sadiq, Software Engineer, Backend Engineer, TypeScript, Node.js, Python, FastAPI, React, Lagos" },
    { name: "author", content: "Teslim Adetola Sadiq" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: siteUrl },
    { property: "og:site_name", content: "Teslim Sadiq" },
    { property: "og:image", content: seoImage },
    { property: "og:image:alt", content: "Teslim Sadiq - Software Engineer" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: seoImage },
    { name: "twitter:site", content: "@teslimcodes" },
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
            I am interested in teams that value product speed, clear engineering judgment, and scalable systems. Alongside shipping, I am sharpening my DSA and systems design fundamentals. See selected <a href="/work">work</a>, read the short{" "}
            <a href="/about">about</a>, or open my <a href={resumeUrl}>resume</a>.
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
