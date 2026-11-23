import type { ExperienceRole } from "~/data/profile";

function getPeriodRange(period: string) {
  const matches = [...period.matchAll(/([A-Za-z]{3})\s+(\d{4})/g)];
  if (!matches.length) return null;

  const monthIndex = (month: string) =>
    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].indexOf(month);
  const [startMonth, startYear] = [monthIndex(matches[0][1]), Number(matches[0][2])];
  const isCurrent = /present/i.test(period);
  const now = new Date();
  const endMonth = isCurrent ? now.getMonth() : monthIndex(matches.at(-1)![1]);
  const endYear = isCurrent ? now.getFullYear() : Number(matches.at(-1)![2]);
  if (startMonth < 0 || endMonth < 0) return null;

  return { start: startYear * 12 + startMonth, end: endYear * 12 + endMonth };
}

function getPeriodMonths(period: string) {
  const range = getPeriodRange(period);
  return range ? range.end - range.start + 1 : null;
}

function formatDuration(months: number | null) {
  if (!months || months < 1) return "";
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  if (years && remainingMonths) return `${years} yr ${remainingMonths} mos`;
  if (years) return `${years} yr`;
  return `${months} mos`;
}

function GroupTenure({ roles }: { roles: ExperienceRole[] }) {
  const ranges = roles.map((role) => getPeriodRange(role.period)).filter((range) => range !== null);
  const total = ranges.length
    ? Math.max(...ranges.map((range) => range.end)) - Math.min(...ranges.map((range) => range.start)) + 1
    : null;
  return <span>{formatDuration(total)}</span>;
}

export function RoleList({ roles, className = "" }: { roles: ExperienceRole[]; className?: string }) {
  const groups: Array<{ company: string; href: string; roles: ExperienceRole[] }> = [];
  for (const role of roles) {
    const last = groups.at(-1);
    if (last?.company === role.company) last.roles.push(role);
    else groups.push({ company: role.company, href: role.href, roles: [role] });
  }

  return (
    <div className={`roles-list ${className}`}>
      {groups.map((group) =>
        group.roles.length > 1 ? (
          <section className="role-company-group" key={group.company} aria-label={`${group.company} roles`}>
            <header className="role-group-header">
              <a href={group.href} target="_blank" rel="noreferrer">{group.company}</a>
              <GroupTenure roles={group.roles} />
            </header>
            <div className="role-timeline">
              {group.roles.map((role) => (
                <article className="role-timeline-entry" key={`${role.company}-${role.role}`}>
                  <span className="role-timeline-marker" aria-hidden="true" />
                  <h3>{role.role}</h3>
                  {role.employmentType && <p className="role-employment-type">{role.employmentType}</p>}
                  <p className="role-timeline-period">
                    {role.period} · {formatDuration(getPeriodMonths(role.period))}
                  </p>
                  {role.description && <p className="role-timeline-description">{role.description}</p>}
                </article>
              ))}
            </div>
          </section>
        ) : (
          <article className="role-item" key={`${group.company}-${group.roles[0].role}`}>
            <div className="role-title-row">
              <h2>{group.roles[0].role}</h2>
              <span>{group.roles[0].period}</span>
            </div>
            <p className="role-company">
              <a href={group.href} target="_blank" rel="noreferrer">{group.company}</a>
            </p>
            <p>{group.roles[0].description}</p>
          </article>
        ),
      )}
    </div>
  );
}
