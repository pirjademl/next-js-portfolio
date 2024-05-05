import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./fonts";
import { Sidebar } from "@components/@/components/Sidebar";
import { Header } from "@components/@/components/Header";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <Sidebar/>
        <div className="flex flex-col w-full">
        <Header/>
        {children}
        </div>
        </main>
      </body>
    </html>
  );
}