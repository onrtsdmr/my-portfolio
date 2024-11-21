import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loading from "./components/Loading/Loading";
import dynamic from 'next/dynamic';
import CustomCursor from "./components/CustomCursor/CustomCursor";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Onur TAŞDEMİR",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Loading />
        <div className="hidden lg:block">
          <CustomCursor />
        </div>
        {children}
      </body>
    </html>
  );
}
