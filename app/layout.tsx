import type { Metadata } from "next";
import "./globals.css";
import "@theme-toggles/react/css/DarkInner.css";
import { Space_Grotesk } from "next/font/google";

const font = Space_Grotesk({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landon Skinner",
  description: "My personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
