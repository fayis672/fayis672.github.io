import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fayis Muhammed | Software Engineer",
    template: "%s | Fayis Muhammed"
  },
  description: "Software Engineer specializing in building secure, intelligent ecosystems and seamless user experiences.",
  keywords: ["Fayis Muhammed", "Software Engineer", "Web Developer", "Full Stack Developer", "Portfolio", "fayis.dev"],
  authors: [{ name: "Fayis Muhammed", url: "https://fayis.dev" }],
  creator: "Fayis Muhammed",
  publisher: "Fayis Muhammed",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fayis.dev"),
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: "Fayis Muhammed | Software Engineer",
    description: "Architecting secure, intelligent mobile ecosystems and bridging the gap between AI and UX.",
    url: "https://fayis.dev",
    siteName: "Fayis Muhammed Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fayis Muhammed | Software Engineer",
    description: "Software Engineer specializing in AI-driven mobile ecosystems and premium web experiences.",
    creator: "@fayis672", // Assuming based on github handle
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fayis Muhammed",
  url: "https://fayis.dev",
  jobTitle: "Software Engineer",
  sameAs: [
    "https://github.com/fayis672",
    "https://www.linkedin.com/in/fayis-muhammed-095999135/",
  ],
  description: "Software Engineer specializing in building secure, intelligent ecosystems and seamless user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
