import { useEffect, useState } from "react";
import type { Route } from "./+types/about";
import { Shell } from "~/components/Shell";
import { experience, notes, profile } from "~/data/profile";

const aboutSections = [
  { id: "intro", label: "Introduction" },
  { id: "experience", label: "Work Experience" },
  { id: "skills", label: "Technical skills" },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - Teslim Sadiq" },
    {
      name: "description",
      content:
        "About Teslim Sadiq, a software engineer in Lagos focused on scalable web systems, AI products, and high-traffic APIs.",
    },
  ];
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
              My name is {profile.name}. I am a software engineer from Lagos, Nigeria, focused on building reliable web systems that can survive real users, real deadlines, and real business constraints.
            </p>
            <p>
              My work sits mostly around TypeScript, Node.js, React, Python, FastAPI, PostgreSQL, MongoDB, and Redis. I like products where the frontend experience, API architecture, data model, and deployment story all have to line up cleanly.
            </p>
            <p>
              Over the last few years, I have worked across edtech, civic tech, fintech, AI tooling, and consumer products. The through-line is simple: I build systems that move quickly without becoming fragile.
            </p>
          </section>

          <section id="experience">
            <h2>Work Experience</h2>
            {experience.map((item) => (
              <article className="experience-entry" key={`${item.company}-${item.role}`}>
                <div>
                  <h3>{item.role}</h3>
                  <span>{item.period}</span>
                </div>
                <p className="company">{item.company}</p>
                <p>{item.description}</p>
              </article>
            ))}
          </section>

          <section id="skills">
            <h2>Technical Skills</h2>
            <ul className="notes-list">
              {notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </Shell>
  );
}
