import type { Metadata } from "next";
import Providers from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tristan — Software Engineer & Builder",
  description:
    "Building internal platforms, developer tooling, and ambitious products. Software engineering at TD Bank, studying at Queen's University.",
  openGraph: {
    title: "Tristan — Software Engineer & Builder",
    description:
      "Building internal platforms, developer tooling, and ambitious products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-surface text-ink font-body">
        <div className="noise-overlay" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
