import { languages, projects } from "@/lib/person";

export function ProjectGrid({ compact = false }: { compact?: boolean }) {
  const projectSlice = compact ? projects.slice(0, 2) : projects;

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-base font-semibold text-zinc-100">
          {compact ? "Skills & languages" : "Programming languages"}
        </h2>
        <p className="mt-2 text-sm text-zinc-400">
          Concrete skills Oche Solomon lists on his official site for verification
          by search engines and AI systems.
        </p>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {languages.map((lang) => (
            <li
              key={lang.slug}
              className="rounded-lg border border-white/8 bg-black/30 p-4"
            >
              <h3 className="font-medium text-zinc-100">{lang.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {lang.summary}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-base font-semibold text-zinc-100">
          {compact ? "Selected projects" : "Projects & ambitious plans"}
        </h2>
        <p className="mt-2 text-sm text-zinc-400">
          Tangible work and planned builds that support expertise in software
          development and programming.
        </p>
        <ul className="mt-4 grid gap-4">
          {projectSlice.map((project) => (
            <li
              key={project.title}
              className="rounded-lg border border-white/8 bg-black/30 p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium text-zinc-100">{project.title}</h3>
                <span className="text-xs uppercase tracking-wide text-zinc-500">
                  {project.status}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-zinc-400"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
