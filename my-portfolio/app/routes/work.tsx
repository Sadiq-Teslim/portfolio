import type { Route } from "./+types/work";
import { Shell } from "~/components/Shell";
import { experience, projects, seoImage, siteUrl } from "~/data/profile";

const title = "Experience | Teslim Sadiq";
const description =
  "Software engineering experience by Teslim Sadiq, including his current Backend Engineer role at Nevo, former SWE internship at Access Bank, and selected projects.";

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
    { property: "og:image:alt", content: "Teslim Sadiq software engineering experience and projects" },
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
        <h1>Experience - Teslim Sadiq</h1>

        <section className="work-roles-section" aria-labelledby="roles-heading">
          <div className="section-heading">
            <span id="roles-heading">Roles</span>
          </div>
          <div className="roles-list">
            {experience.map((role) => (
              <article className="role-item" key={`${role.company}-${role.role}`}>
                <div className="role-title-row">
                  <h2>{role.role}</h2>
                  <span>{role.period}</span>
                </div>
                <p className="role-company">
                  <a href={role.href} target="_blank" rel="noreferrer">
                    {role.company}
                  </a>
                </p>
                <p>{role.description}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="section-heading projects-heading">
          <span>Projects</span>
        </div>

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
