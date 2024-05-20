import type { Metadata } from "next";
import { Suspense } from "react";
import { Toaster } from "../@/components/ui/toaster";
import "./globals.css";
import { montserrat } from "./fonts";
import { Header, Sidebar } from "../@/components";
import { ScaleLoader } from "react-spinners";

export const metadata: Metadata = {
  title: "Magdum Pirjade Portfolio",
  description:
    "Magdum Pirjade is a full stack devloper curious about everything in the tech  could be better rephrased a a tech nerd ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="flex">
          <Sidebar />
          <div className="flex flex-col w-full">
            <Header />
            {children}
          </div>
          <Toaster />
          <Suspense fallback={<ScaleLoader />} />
        </main>
      </body>
    </html>
  );
}
