import type { Metadata } from "next";
import { Suspense } from "react";
import { Toaster } from "../@/components/ui/toaster";
import "./globals.css";
import { montserrat } from "./fonts";
import { Header, Sidebar } from "../@/components";
import Loading from "./loading";
import { Analytics } from "@vercel/analytics/next";
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
    <head>
<meta name="google-site-verification" content="O9zhHAquwtcmzyqKuET229EROpSlKbCM8_2GObUkz3I" />
</head>

      <body className={montserrat.className}>
        <main className="flex">
          <Sidebar />
          <div className="flex flex-col w-full">
            <Header />
            {children}
          </div>
          <Toaster />
          <Analytics />
          <Suspense fallback={<Loading />} />
        </main>
      </body>
    </html>
  );
}
