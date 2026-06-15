import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { site } from "@/content/site";

export function Skills() {
  return (
    <Section id="skills" eyebrow="02 — Skills" title="Tools I work with">
      <div className="grid gap-6 sm:grid-cols-2">
        {site.skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.08}>
            <div className="h-full rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-mono text-sm font-semibold text-accent">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-background px-3 py-1 text-sm text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
