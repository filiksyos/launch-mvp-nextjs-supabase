'use client';

import { Geist } from "next/font/google";
import "./globals.css";
import TopBar from '../components/TopBar';
import { Analytics } from "@vercel/analytics/react";

const geist = Geist({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Analytics mode="auto" />
        <TopBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
