import "../global.css";
import { DM_Mono } from "@next/font/google";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Alex Lee Dev Portfolio",
    template: "",
  },
  description: "A portfolio of software engineering projects, AI research, and data architecture. " +
      "Showcasing full-stack development, coding best practices, and scalable data engineering solutions.",
  openGraph: {
    title: "Alex Lee Dev Archives",
    description: "A portfolio of software engineering projects, AI research, and data architecture. Showcasing full-stack development, coding best practices, and scalable data engineering solutions.",
    url: "https://dev-portfolio-git-main-alexiwisterias-projects.vercel.app/ai-grading-project",
    siteName: "alexiwisteria.dev",
    images: [
      {
        url: "https://dev-portfolio-git-main-alexiwisterias-projects.vercel.app/ai-grading-project", 
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

// Import and apply Space Mono globally
const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export default function RootLayout({
                                    children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className={dmMono.variable}>
      <head>
        <Analytics />
      </head>
      <body
          className={`bg-black ${dmMono.className} ${
              process.env.NODE_ENV === "development" ? "debug-screens" : ""
          }`}
      >
      {children}
      </body>
      </html>
  );
}
