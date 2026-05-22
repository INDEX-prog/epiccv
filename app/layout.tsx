import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EpicCV - Transform Your Resume Into a Medieval Fantasy Masterpiece",
  description:
    "Stand out from the crowd with an epic medieval fantasy-themed resume. Our AI transforms your ordinary CV into a legendary tale that employers cannot ignore. Perfect for creative professionals.",
  keywords: [
    "resume builder",
    "CV writer",
    "medieval fantasy resume",
    "creative resume",
    "AI resume",
    "epic CV",
    "job seekers",
    "career",
  ],
  authors: [{ name: "EpicCV" }],
  openGraph: {
    title: "EpicCV - Transform Your Resume Into a Medieval Fantasy Masterpiece",
    description:
      "Stand out from the crowd with an epic medieval fantasy-themed resume. Our AI transforms your ordinary CV into a legendary tale.",
    url: "https://epiccv.vercel.app",
    siteName: "EpicCV",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EpicCV - Epic Medieval Fantasy Resumes",
    description:
      "Transform your resume into a legendary tale with our AI-powered tool.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cinzel.variable} ${lato.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
