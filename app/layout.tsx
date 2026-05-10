import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Marketing Masterclass | Sikumna Nepal",
  description:
    "Free live AI Marketing Masterclass for students, job seekers, working professionals, and beginners in Nepal.",
  icons: {
    icon: "/Sikumna%20Round%20Logo.png",
    shortcut: "/Sikumna%20Round%20Logo.png",
    apple: "/Sikumna%20Round%20Logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
