import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import PageTransition from "@/components/PageTransition";

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
      <body className="antialiased bg-[#081220] text-[#F1F5F9]">
        <SmoothScrollProvider>
          <PageTransition />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
