/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import WorkSection from "@/components/section/work-section";
import ServicesSection from "@/components/section/services-section";
import FlipAvatar from "@/components/flip-avatar";
import { ArrowUpRight, GraduationCap } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex flex-row items-start justify-between gap-4">
            <div className="gap-1 flex flex-col flex-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl"
                yOffset={8}
                text={DATA.nickname}
              />
              <BlurFadeText
                className="text-base font-medium text-foreground/80 max-w-[600px]"
                delay={BLUR_FADE_DELAY * 2}
                text={DATA.description}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[540px] text-sm leading-relaxed mt-2"
                delay={BLUR_FADE_DELAY * 3}
                text={DATA.bio}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="flex-none">
              <FlipAvatar
                src={DATA.avatarUrl}
                alt={DATA.name}
                resumeUrl="/resume.pdf"
              />
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="services">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <ServicesSection />
        </BlurFade>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Skills & Tools</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center">
                  <span className="text-foreground text-sm font-medium">{skill}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 12 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none dark:invert"
                      />
                    ) : (
                      <div className="size-8 md:size-10 border rounded-full shadow ring-2 ring-border bg-muted flex-none flex items-center justify-center">
                        <GraduationCap className="size-4 text-muted-foreground" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>{education.start} - {education.end}</span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
