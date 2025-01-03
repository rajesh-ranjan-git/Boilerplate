import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boilerplate Next + React + TS",
  description: "This is boilerplate code for Next + React + TS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
