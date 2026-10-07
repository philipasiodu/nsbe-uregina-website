import type { Metadata } from "next";
import { Geist_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "NSBE University of Regina", template: "%s | NSBE URegina" },
  description: "National Society of Black Engineers — University of Regina Chapter. Community, academic support, professional development, and leadership for Black students in STEM.",
  keywords: ["NSBE", "University of Regina", "Black engineers", "engineering students", "Regina"],
};

const themeScript = `(function(){try{var saved=localStorage.getItem("nsbe-theme");var dark=saved==="dark"||(!saved&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.dataset.theme=dark?"dark":"light"}catch(error){}})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${nunitoSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
