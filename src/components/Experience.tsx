import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { site } from "@/content/site";

export function Experience() {
  return (
    <Section id="experience" eyebrow="04 — Experience" title="Where I've worked">
      <div className="relative space-y-8 border-l border-border pl-6">
        {site.experience.map((job, i) => (
          <Reveal key={`${job.company}-${i}`} delay={i * 0.08}>
            <div className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-lg font-semibold">
                  {job.role}{" "}
                  <span className="text-accent">@ {job.company}</span>
                </h3>
                <span className="font-mono text-sm text-muted">
                  {job.period}
                </span>
              </div>
              {job.location && (
                <p className="mt-0.5 text-sm text-muted">{job.location}</p>
              )}
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
                {job.points.map((point, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
