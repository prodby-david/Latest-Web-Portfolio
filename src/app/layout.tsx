import type { Metadata } from "next";
import "./globals.css";
import FloatingIconsBackground from "@/components/background/floating-bg";

export const metadata: Metadata = {
  title: "John David's Portfolio",
  description:
    "Welcome to John David's personal portfolio website, showcasing my projects and skills as a web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FloatingIconsBackground />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
