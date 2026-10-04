import Link from "next/link";
import { instagramUrl, person } from "@/lib/person";
import { GrainOverlay } from "./GrainOverlay";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-full flex flex-col">
      <div className="ambient-gradient fixed inset-0 -z-10" aria-hidden />
      <GrainOverlay />
      <header className="relative z-10 border-b border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight text-zinc-100 hover:text-white"
          >
            {person.name}
          </Link>
          <nav className="flex gap-5 text-sm text-zinc-400">
            <Link href="/" className="hover:text-zinc-100">
              About
            </Link>
            <Link href="/projects" className="hover:text-zinc-100">
              Projects
            </Link>
          </nav>
        </div>
      </header>
      <div className="relative z-10 flex flex-1 flex-col">{children}</div>
      <footer className="relative z-10 mt-auto border-t border-white/5 bg-black/25 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 px-5 py-8 text-sm text-zinc-400">
          <p className="text-zinc-300">
            {person.name} · {person.jobTitle}
          </p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>
              Email:{" "}
              <a
                href={`mailto:${person.email}`}
                className="text-zinc-200 underline decoration-white/20 underline-offset-4 hover:decoration-white/50"
              >
                {person.email}
              </a>
            </span>
            <span className="hidden text-zinc-600 sm:inline" aria-hidden>
              ·
            </span>
            <span>
              Instagram:{" "}
              <a
                href={instagramUrl}
                rel="me noopener noreferrer"
                target="_blank"
                className="text-zinc-200 underline decoration-white/20 underline-offset-4 hover:decoration-white/50"
              >
                @am_kari19
              </a>
            </span>
          </p>
          <p className="text-xs text-zinc-500">
            Makurdi, Benue State, Nigeria · Alumni of {person.alumniOf}
          </p>
        </div>
      </footer>
    </div>
  );
}
