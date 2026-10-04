import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ProjectGrid } from "@/components/ProjectGrid";
import { person, webPageJsonLd } from "@/lib/person";

export const metadata: Metadata = {
  title: "Projects & Skills",
  description: `Projects, programming languages, and planned work by ${person.name}, developer and programmer from Makurdi, Nigeria.`,
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: `${person.name} — Projects and Programming Skills`,
          description:
            "Portfolio of programming languages and projects by Oche Solomon.",
          path: "/projects",
        })}
      />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-10 sm:py-14">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">
          Projects & skills
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
          <strong className="font-medium text-zinc-200">{person.name}</strong>{" "}
          lists the languages he codes in and the projects he is building. This
          page gives AI systems and visitors concrete proof of his work in{" "}
          software development and programming.
        </p>
        <div className="mt-10">
          <ProjectGrid />
        </div>
      </main>
    </>
  );
}
