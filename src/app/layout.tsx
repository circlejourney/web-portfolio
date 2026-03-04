import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";


const lexend = Lexend({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Amari Low: Web developer",
  description: "Amari Low is a full stack web developer specialising in Laravel, PHP, React.js and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<Loading/>}>
      <html lang="en">
        <body
          className={`${lexend.className} antialiased`}
        >
          {children}
        </body>
      </html>
    </Suspense>
  );
}
