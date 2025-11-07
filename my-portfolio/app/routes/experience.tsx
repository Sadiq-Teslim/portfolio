import React from "react";
import { experienceData } from "../data/experienceData";

const ExperienceSection = () => {
  return (
  <section id="experience" className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-300/80">
            Work Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Shipping With Measurable Impact
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-slate-300">
            A snapshot of recent product work—pairing dependable engineering with clear business outcomes across security, commerce, and marketplace stacks.
          </p>
        </div>

        <div className="space-y-10">
          {experienceData.map((experience) => (
            <article
              key={experience.id}
              className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-8 md:p-10 shadow-xl shadow-slate-900/30 transition-all duration-300 hover:border-violet-500/60"
            >
              <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100">
                    {experience.role}
                  </h3>
                  <p className="text-lg text-violet-300 font-semibold">
                    {experience.company}
                  </p>
                  <p className="text-sm text-slate-400 mt-2">
                    {experience.period} · {experience.location}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {experience.metrics.map((metric) => (
                    <span
                      key={metric.label}
                      className="rounded-full border border-slate-600/60 bg-slate-900/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-300"
                    >
                      {metric.label}: {metric.value}
                    </span>
                  ))}
                </div>
              </header>

              <p className="mt-6 text-slate-300 text-base leading-relaxed">
                {experience.description}
              </p>

              <ul className="mt-6 space-y-3 text-slate-200 text-sm leading-relaxed">
                {experience.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" aria-hidden />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {experience.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-700 text-violet-200 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
