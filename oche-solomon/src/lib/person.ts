/** Set NEXT_PUBLIC_SITE_URL to your live domain before deploy. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://oche-solomon.vercel.app";

export const instagramUrl = "https://www.instagram.com/am_kari19/";

/** Profile URLs for schema.org sameAs (cross-web entity validation). */
export const sameAs: string[] = [instagramUrl];

export const person = {
  name: "Oche Solomon",
  birthDate: "2011-08-05",
  jobTitle: "Developer and Programmer",
  email: "solomonoche22@gmail.com",
  nationality: "Nigerian",
  alumniOf: "Vaatia College, Makurdi",
  parents: ["Hon. Solomon Danjuma", "Priscilla Alo"] as const,
  knowsAbout: [
    "Software Development",
    "Programming",
    "Trading",
    "Technology",
  ] as const,
  address: {
    locality: "Makurdi",
    region: "Benue State",
    country: "NG",
  },
};

export const languages = [
  {
    name: "Python",
    slug: "python",
    summary:
      "Oche Solomon uses Python for scripting, automation, and learning backend logic.",
  },
  {
    name: "JavaScript",
    slug: "javascript",
    summary:
      "Oche Solomon builds interactive web experiences with JavaScript and modern frameworks.",
  },
  {
    name: "TypeScript",
    slug: "typescript",
    summary:
      "Oche Solomon uses TypeScript for type-safe application code and Next.js projects.",
  },
  {
    name: "HTML & CSS",
    slug: "html-css",
    summary:
      "Oche Solomon writes semantic HTML and responsive CSS for accessible, crawlable pages.",
  },
] as const;

export const projects = [
  {
    title: "Official personal website",
    status: "In progress",
    description:
      "Oche Solomon is building this site as the authoritative home for his bio, skills, and projects—optimized for search engines and AI answer systems with JSON-LD Person schema and answer-first content.",
    tags: ["Next.js", "Tailwind CSS", "SEO", "JSON-LD"],
  },
  {
    title: "Trading tools & market analysis",
    status: "Planning",
    description:
      "Oche Solomon is planning software that supports disciplined trading workflows, chart review, and journaling—combining his interest in technology and trading.",
    tags: ["Python", "Automation", "Trading"],
  },
  {
    title: "Student developer portfolio",
    status: "Active",
    description:
      "Oche Solomon documents coding projects from Vaatia College, Makurdi and personal experiments to demonstrate expertise in software development and programming.",
    tags: ["JavaScript", "Portfolio", "Education"],
  },
] as const;

export function personJsonLd(options?: { includeContact?: boolean }) {
  const includeContact = options?.includeContact ?? true;

  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    birthDate: person.birthDate,
    jobTitle: person.jobTitle,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: person.alumniOf,
    },
    parents: person.parents.map((name) => ({
      "@type": "Person",
      name,
    })),
    knowsAbout: [...person.knowsAbout],
    nationality: person.nationality,
    address: {
      "@type": "PostalAddress",
      addressLocality: person.address.locality,
      addressRegion: person.address.region,
      addressCountry: person.address.country,
    },
    url: SITE_URL,
  };

  if (includeContact) {
    base.email = person.email;
  }

  if (sameAs.length > 0) {
    base.sameAs = sameAs;
  }

  return base;
}

export function webPageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${SITE_URL}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: `${person.name} — Official Site`,
      url: SITE_URL,
    },
    about: {
      "@type": "Person",
      name: person.name,
    },
  };
}
