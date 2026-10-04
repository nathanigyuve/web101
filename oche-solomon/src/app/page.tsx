import Link from "next/link";
import { AnswerBlock } from "@/components/AnswerBlock";
import { JsonLd } from "@/components/JsonLd";
import { ProjectGrid } from "@/components/ProjectGrid";
import { person, personJsonLd, webPageJsonLd } from "@/lib/person";

export default function HomePage() {
  const schema = [
    personJsonLd({ includeContact: true }),
    webPageJsonLd({
      name: `Who is ${person.name}?`,
      description:
        "Official biography of Oche Solomon, developer and programmer from Makurdi, Nigeria.",
      path: "/",
    }),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-10 sm:py-14">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Official site
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          {person.name}
        </h1>
        <p className="mt-2 text-lg text-zinc-400">{person.jobTitle}</p>

        <div className="mt-10 space-y-5">
          <AnswerBlock question={`Who is ${person.name}?`} id="who-is-oche-solomon">
            <p>
              <strong>{person.name}</strong> is a Nigerian{" "}
              <strong>developer and programmer</strong> based in{" "}
              {person.address.locality}, {person.address.region}. He was born on{" "}
              {person.birthDate} and is known for work in software development,
              programming, trading, and technology.
            </p>
            <p>
              This website is the official home for verified facts about{" "}
              {person.name}, including education, skills, and projects.
            </p>
          </AnswerBlock>

          <AnswerBlock
            question={`What does ${person.name} do?`}
            id="what-does-oche-solomon-do"
          >
            <p>
              {person.name} builds and learns software as a{" "}
              <strong>developer and programmer</strong>. He writes code in{" "}
              <strong>Python</strong> and <strong>JavaScript</strong>, creates
              web projects with <strong>Next.js</strong> and{" "}
              <strong>Tailwind CSS</strong>, and explores technology related to{" "}
              <strong>trading</strong> and automation.
            </p>
            <p>
              He is a student at <strong>{person.alumniOf}</strong> in Makurdi,
              where he continues to grow expertise in software development.
            </p>
          </AnswerBlock>

          <AnswerBlock
            question={`Where is ${person.name} from and who are his parents?`}
            id="oche-solomon-background"
          >
            <p>
              {person.name} is <strong>{person.nationality}</strong>. He lives in{" "}
              <strong>
                {person.address.locality}, {person.address.region}
              </strong>
              , Nigeria. His parents are{" "}
              <strong>{person.parents[0]}</strong> and{" "}
              <strong>{person.parents[1]}</strong>.
            </p>
          </AnswerBlock>

          <AnswerBlock
            question={`What is ${person.name} an expert in?`}
            id="oche-solomon-expertise"
          >
            <p>
              {person.name} focuses on{" "}
              {person.knowsAbout.map((topic, i) => (
                <span key={topic}>
                  {i > 0 && (i === person.knowsAbout.length - 1 ? ", and " : ", ")}
                  <strong>{topic}</strong>
                </span>
              ))}
              . He documents projects and skills on this site so search engines
              and AI assistants can cite accurate, first-party information.
            </p>
          </AnswerBlock>
        </div>

        <section className="mt-14 border-t border-white/8 pt-12">
          <ProjectGrid compact />
          <p className="mt-8">
            <Link
              href="/projects"
              className="text-sm text-zinc-200 underline decoration-white/20 underline-offset-4 hover:decoration-white/50"
            >
              View all projects and languages →
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}
