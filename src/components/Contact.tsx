import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Mail } from "lucide-react";
import { Github, Linkedin, Twitter } from "./icons";
import { site } from "@/content/site";

const channels = [
  { href: site.social.github, Icon: Github, label: "GitHub" },
  { href: site.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
  { href: site.social.twitter, Icon: Twitter, label: "Twitter" },
].filter((c) => c.href);

export function Contact() {
  return (
    <Section id="contact" eyebrow="06 — Contact" title="Let's work together">
      <Reveal>
        <div className="rounded-2xl border border-border bg-card p-8 text-center sm:p-12">
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted">
            I&apos;m always happy to talk about new projects, opportunities, or
            just interesting engineering problems. The fastest way to reach me is
            email.
          </p>

          {site.email && (
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              {site.email}
            </a>
          )}

          {site.phone && (
            <p className="mt-4 font-mono text-sm text-muted">
              or call{" "}
              <a
                href={`tel:${site.phone.replace(/\s+/g, "")}`}
                className="text-foreground transition-colors hover:text-accent"
              >
                {site.phone}
              </a>
            </p>
          )}

          {channels.length > 0 && (
            <div className="mt-6 flex items-center justify-center gap-2">
              {channels.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
