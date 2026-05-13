import { useEffect, useState } from "react";
import type { Route } from "./+types/about";
import { Shell } from "~/components/Shell";
import { experience, profile, seoImage, siteUrl, technicalSkills } from "~/data/profile";

const title = "About Teslim Sadiq | Software Engineer";
const description =
  "Learn about Teslim Sadiq's software engineering experience, technical skills, backend architecture work, API design, data systems, and scalable product engineering.";

const aboutSections = [
  { id: "intro", label: "Introduction" },
  { id: "experience", label: "Work Experience" },
  { id: "skills", label: "Technical skills" },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "profile" },
    { property: "og:url", content: `${siteUrl}/about` },
    { property: "og:site_name", content: "Teslim Sadiq" },
    { property: "og:image", content: seoImage },
    { property: "og:image:alt", content: "Teslim Sadiq - Software Engineer" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: seoImage },
  ];
}

export function links() {
  return [{ rel: "canonical", href: `${siteUrl}/about` }];
}

export default function About() {
  const [activeSection, setActiveSection] = useState(aboutSections[0].id);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      const pageBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (pageBottom >= documentHeight - 8) {
        setActiveSection(aboutSections[aboutSections.length - 1].id);
        frame = 0;
        return;
      }

      const threshold = window.innerHeight * 0.58;
      let nextSection = aboutSections[0];

      for (const section of aboutSections) {
        const element = document.getElementById(section.id);

        if (element && element.getBoundingClientRect().top <= threshold) {
          nextSection = section;
        }
      }

      setActiveSection(nextSection.id);
      frame = 0;
    };

    const scheduleUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <Shell>
      <section className="about-page">
        <aside className="about-rail" aria-label="Page sections">
          {aboutSections.map((section) => (
            <a
              key={section.id}
              className={activeSection === section.id ? "active" : ""}
              href={`#${section.id}`}
              aria-current={activeSection === section.id ? "true" : undefined}
            >
              {section.label}
            </a>
          ))}
        </aside>

        <div className="about-content">
          <section id="intro">
            <h1>About Me</h1>
            <p>
              My name is {profile.name}. I am a Software Engineer from Lagos, Nigeria, focused on building scalable systems that are reliable, maintainable, and useful under real business constraints.
            </p>
            <p>
              I work across backend architecture, API design, data modeling, distributed workflows, and product-facing interfaces. My core stack includes TypeScript, Node.js, React, Python, FastAPI, PostgreSQL, MongoDB, Redis, and queue-based systems.
            </p>
            <p>
              I have shipped systems across edtech, civic tech, fintech, AI tooling, and consumer products. I care about clear engineering decisions, dependable execution, and building software that can scale without becoming difficult to change.
            </p>
          </section>

          <section id="experience">
            <h2>Work Experience</h2>
            {experience.map((item) => (
              <article className="experience-entry" key={`${item.company}-${item.role}`}>
                <div>
                  <h3>{item.role}</h3>
                </div>
                <p className="company">{item.company}</p>
                <p>{item.description}</p>
              </article>
            ))}
          </section>

          <section id="skills">
            <h2>Technical Skills</h2>
            <div className="skills-list">
              {technicalSkills.map((skill) => (
                <article className="skill-group" key={skill.category}>
                  <h3>{skill.category}</h3>
                  <p>{skill.items.join(", ")}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </Shell>
  );
}
