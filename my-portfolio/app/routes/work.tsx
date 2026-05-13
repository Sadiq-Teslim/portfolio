import type { Route } from "./+types/work";
import { Shell } from "~/components/Shell";
import { projects, seoImage, siteUrl } from "~/data/profile";

const title = "Projects | Teslim Sadiq";
const description =
  "Selected software engineering projects by Teslim Sadiq, including Nevo, PIDEC, ECX LMS, ULES, ThreadCraft, FairPlay Africa, and GPAi.";

export function meta({}: Route.MetaArgs) {
  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${siteUrl}/work` },
    { property: "og:site_name", content: "Teslim Sadiq" },
    { property: "og:image", content: seoImage },
    { property: "og:image:alt", content: "Teslim Sadiq selected software engineering projects" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: seoImage },
  ];
}

export function links() {
  return [{ rel: "canonical", href: `${siteUrl}/work` }];
}

export default function Work() {
  const projectsByYear = projects.reduce(
    (groups, project) => {
      const group = groups.find((item) => item.year === project.year);

      if (group) {
        group.projects.push(project);
      } else {
        groups.push({ year: project.year, projects: [project] });
      }

      return groups;
    },
    [] as Array<{ year: string; projects: typeof projects }>,
  );

  return (
    <Shell>
      <section className="work-page">
        <h1>Projects - Teslim Sadiq</h1>

        <div className="work-list">
          {projectsByYear.map(({ year, projects: yearProjects }) => (
            <section className="work-year-group" key={year}>
              <div className="work-year">{year}</div>
              <div className="work-year-projects">
                {yearProjects.map((project) => (
                  <article className="work-row" key={project.title}>
                    <div className="work-content">
                      {project.href ? (
                        <a href={project.href} target="_blank" rel="noreferrer">
                          {project.title}
                        </a>
                      ) : (
                        <span>{project.title}</span>
                      )}
                      <p>{project.description}</p>
                      <div className="work-stack">{project.stack.join(", ")}</div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </Shell>
  );
}
