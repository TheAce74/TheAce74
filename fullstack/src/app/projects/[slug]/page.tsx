import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DATA } from "@/data/resume";
import { ArrowLeftIcon, ArrowUpRightIcon, CheckIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: { slug: string };
}

function getProject(slug: string) {
  return DATA.projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return DATA.projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeftIcon className="size-3.5" />
        Back to projects
      </Link>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span>
              <span className="text-foreground font-medium">Period:</span>{" "}
              {project.dates}
            </span>
            <span>
              <span className="text-foreground font-medium">Role:</span>{" "}
              {project.role}
            </span>
          </div>
          {project.href && (
            <Button asChild size="sm">
              <Link href={project.href} target="_blank" rel="noopener noreferrer">
                View Live Site
                <ArrowUpRightIcon className="size-3.5" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      {project.image && (
        <div className="overflow-hidden rounded-xl border">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={630}
            className="h-auto w-full object-cover"
          />
        </div>
      )}

      {project.problem && (
        <section className="space-y-2">
          <h2 className="text-lg font-bold">The Problem</h2>
          <p className="text-sm text-muted-foreground">{project.problem}</p>
        </section>
      )}

      <section className="space-y-2">
        <h2 className="text-lg font-bold">The Solution</h2>
        <p className="text-sm text-muted-foreground">{project.solution}</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold">My Role</h2>
        <p className="text-sm text-muted-foreground">{project.myRole}</p>
      </section>

      {project.impact.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg font-bold">The Impact</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {project.impact.map((item) => (
              <Card key={item.label} className="border p-3">
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm font-semibold">{item.value}</p>
              </Card>
            ))}
          </div>
        </section>
      )}

      {(project.features.length > 0 || project.technologies.length > 0) && (
        <section className="grid grid-cols-1 gap-4 pb-12 sm:grid-cols-2">
          {project.features.length > 0 && (
            <Card className="border p-4">
              <h2 className="mb-3 text-sm font-bold">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckIcon className="mt-0.5 size-3.5 shrink-0 text-foreground" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          )}
          {project.technologies.length > 0 && (
            <Card className="border p-4">
              <h2 className="mb-3 text-sm font-bold">Technologies</h2>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          )}
        </section>
      )}
    </main>
  );
}
