import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Autosewmart | Professional Embroidery & Sewing Machines",
  description:
    "Professional embroidery and sewing machines engineered for precision, productivity and outstanding finishing. Explore our range of single-head, multi-head, and industrial machines.",
  keywords: [
    "embroidery machine",
    "sewing machine",
    "multi-head embroidery",
    "industrial sewing",
    "cap embroidery",
    "embroidery solutions",
  ],
  openGraph: {
    title: "Autosewmart | Professional Embroidery & Sewing Machines",
    description:
      "Professional embroidery and sewing machines engineered for precision, productivity and outstanding finishing.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)] bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
