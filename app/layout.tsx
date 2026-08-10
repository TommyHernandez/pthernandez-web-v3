import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Pedro T. Hernandez — Web Developer Portfolio";
const description =
  "Welcome to my web developer portfolio! Explore my projects, skills, and experience in web development and team leadership. Get in touch to collaborate on exciting projects.";

export const metadata: Metadata = {
  metadataBase: new URL("https://pedrotomas.dev"),
  title,
  description,
  authors: [{ name: "Pedro T. Hernandez" }],
  creator: "Pedro T. Hernandez",
  keywords: [
    "Pedro T. Hernandez",
    "web developer",
    "frontend developer",
    "frontend lead",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    url: "https://pedrotomas.dev",
    siteName: "Pedro T. Hernandez",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
