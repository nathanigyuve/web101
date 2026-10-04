import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import { person, SITE_URL } from "@/lib/person";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultDescription = `${person.name} is a Nigerian developer and programmer from Makurdi, Benue State. He studies at ${person.alumniOf} and works with Python, JavaScript, and web technology.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${person.name} | Developer & Programmer`,
    template: `%s | ${person.name}`,
  },
  description: defaultDescription,
  openGraph: {
    title: `${person.name} | Developer & Programmer`,
    description: defaultDescription,
    type: "profile",
    locale: "en_NG",
    url: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
