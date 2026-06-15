import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { GraduationCap, Award } from "lucide-react";
import { site } from "@/content/site";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="05 — Education"
      title="Education & certifications"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-2 font-mono text-sm font-semibold text-accent">
              <GraduationCap className="h-4 w-4" />
              Education
            </div>
            <ul className="space-y-4">
              {site.education.map((e) => (
                <li key={e.degree}>
                  <p className="font-medium">{e.degree}</p>
                  <p className="text-sm text-muted">{e.school}</p>
                  <p className="font-mono text-xs text-muted">{e.period}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-2 font-mono text-sm font-semibold text-accent">
              <Award className="h-4 w-4" />
              Certifications
            </div>
            <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
              {site.certifications.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
