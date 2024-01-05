import type { Metadata } from "next";
import { Play } from "next/font/google";
import "./globals.css";

const play = Play({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Kieran MacGough",
  description: "UK-Based Frontend Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={play.className}>{children}</body>
    </html>
  );
}
