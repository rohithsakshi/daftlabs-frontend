import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAFT Labs — Technology Reimagined",
  description:
    "DAFT Labs builds AI-powered systems, automation platforms, enterprise software, and cloud & DevOps solutions for forward-thinking businesses.",
  keywords: "AI, automation, enterprise software, cloud, DevOps, Coimbatore, India",
  openGraph: {
    title: "DAFT Labs — Technology Reimagined",
    description: "We help businesses scale using AI, automation, and modern engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
