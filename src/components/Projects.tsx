import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ExternalLink } from "lucide-react";
import { Github } from "./icons";
import { site } from "@/content/site";

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 — Projects" title="Things I've built">
      <div className="grid gap-6 md:grid-cols-2">
        {site.projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent">
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <div className="flex items-center gap-2 text-muted">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} source`}
                      className="transition-colors hover:text-accent"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live`}
                      className="transition-colors hover:text-accent"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-background px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
