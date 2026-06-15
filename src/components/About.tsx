import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { site } from "@/content/site";

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="A bit about me">
      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            {site.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
            {site.about.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="text-3xl font-bold text-accent">{s.value}</div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
