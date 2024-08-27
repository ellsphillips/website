import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import DATA from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: DATA.site.title,
  description: DATA.site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-full flex-col antialiased bg-slate-900 text-neutral-50 font-sans",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
