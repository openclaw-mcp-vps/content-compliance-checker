import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Content Compliance Checker – GDPR & Accessibility Scanner",
  description: "Scan blog posts and landing pages for GDPR compliance and WCAG accessibility violations automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8eb67609-59c3-49ec-bb8f-7b4d7760fe2f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
