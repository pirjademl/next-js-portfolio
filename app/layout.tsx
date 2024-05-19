import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./fonts";
import { Header, Sidebar } from "../@/components";

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
        </main>
      </body>
    </html>
  );
}
