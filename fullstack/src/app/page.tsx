import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { ServiceCard } from "@/components/service-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DATA, TESTIMONIALS } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full space-y-8">
          <div className="gap-2 sm:gap-4 md:gap-6 lg:gap-8 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              {DATA.availability.open && (
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                  <Badge
                    variant="outline"
                    className="gap-1.5 border-green-600/30 bg-green-500/10 text-green-700 dark:border-green-400/30 dark:text-green-400"
                  >
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                    </span>
                    {DATA.availability.message}
                  </Badge>
                </BlurFade>
              )}
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="relative size-28 shrink-0 overflow-hidden rounded-full border">
                <Image
                  src={DATA.avatarUrl}
                  alt={DATA.name}
                  fill
                  priority
                  sizes="112px"
                  className="object-cover"
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={`${work.title} · ${work.location}`}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                badges={education.badges}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="tech-stack">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Tech Stack</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.techStack.map((tech, id) => (
              <BlurFade key={tech} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={tech}>{tech}</Badge>
              </BlurFade>
            ))}
          </div>
          {DATA.interests.length > 0 && (
            <BlurFade
              delay={BLUR_FADE_DELAY * 10 + DATA.techStack.length * 0.05}
            >
              <p className="text-xs text-muted-foreground">
                Currently exploring: {DATA.interests.join(", ")}
              </p>
            </BlurFade>
          )}
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:gap-6 lg:gap-8 mx-auto">
            {DATA.featuredProjects
              .map((slug) => DATA.projects.find((p) => p.slug === slug))
              .filter((project): project is NonNullable<typeof project> =>
                Boolean(project),
              )
              .map((project, id) => (
                <BlurFade
                  key={project.slug}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    slug={project.slug}
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill.label}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              >
                <div className="flex items-center gap-2 rounded-lg border bg-card px-3 py-2 text-xs font-medium sm:text-sm">
                  <span className="text-muted-foreground">{skill.icon}</span>
                  {skill.label}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="services">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <h2 className="text-xl font-bold">What I Can Do For You</h2>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {DATA.services.map((service, id) => (
              <BlurFade
                key={service.title}
                delay={BLUR_FADE_DELAY * 16 + id * 0.05}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  tags={service.tags}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="testimonials">
        <div className="space-y-8 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What people say
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Feedback from clients and collaborators I&apos;ve worked with.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {TESTIMONIALS.map((testimonial, id) => (
              <BlurFade
                key={testimonial.name}
                delay={BLUR_FADE_DELAY * 18 + id * 0.05}
              >
                <Card className="mb-4 break-inside-avoid border p-4">
                  <p className="text-sm text-muted-foreground">
                    &ldquo;{testimonial.body}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">
                        {testimonial.name}
                      </p>
                      {testimonial.role ? (
                        <p className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </p>
                      ) : (
                        testimonial.links?.[0] && (
                          <p className="text-xs text-muted-foreground">
                            {testimonial.links[0].handle}
                          </p>
                        )
                      )}
                    </div>
                    {testimonial.links && testimonial.links.length > 0 && (
                      <div className="flex items-center gap-2">
                        {testimonial.links.map((link) => (
                          <Link
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${testimonial.name} on ${link.platform}`}
                            className="text-muted-foreground transition-colors hover:text-foreground"
                          >
                            {link.icon}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full pt-12 pb-24 md:pb-12">
          <BlurFade delay={BLUR_FADE_DELAY * 20}>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Open to contract and part-time roles — pick whichever&apos;s
                easiest for you.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={DATA.contact.bookingUrl} target="_blank">
                    Book a call
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`mailto:${DATA.contact.email}`}>Email me</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Prefer WhatsApp?{" "}
                <Link
                  href={DATA.contact.whatsappUrl}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                >
                  Send a direct message
                </Link>
                .
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
