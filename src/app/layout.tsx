import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";


const lexend = Lexend({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Amari Low: Web developer",
  description: "Amari Low is a full stack web developer specialising in Laravel, PHP, React.JS and Next.JS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
