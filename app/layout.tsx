import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bereket Tesfaye Getie | Full-Stack Developer",
    template: "%s | Bereket Tesfaye",
  },
  description:
    "Computer Science student at Woldia University building real-world systems. Specializing in React, Next.js, PHP, and MySQL. Available for internship opportunities.",
  keywords: [
    "Bereket Tesfaye",
    "Bereket Tesfaye Getie",
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "Web Developer Ethiopia",
    "Woldia University",
    "Computer Science",
    "PHP Developer",
  ],
  authors: [{ name: "Bereket Tesfaye Getie" }],
  creator: "Bereket Tesfaye Getie",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bereket-portfolio.vercel.app",
    siteName: "Bereket Tesfaye Getie",
    title: "Bereket Tesfaye Getie | Full-Stack Developer",
    description:
      "CS student at Woldia University building real-world web systems with React, Next.js, and PHP.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bereket Tesfaye Getie | Full-Stack Developer",
    description:
      "CS student at Woldia University. React, Next.js, PHP developer.",
    creator: "@BereketGet48667",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
