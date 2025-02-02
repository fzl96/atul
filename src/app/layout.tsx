import type { Metadata } from "next";
import { Pacifico, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const pacifico = Pacifico({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

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
      <body
        className={cn(
          "min-h-screen bg-[#ffd1dc] font-sans antialiased selection:bg-foreground selection:text-background",
          inter.variable,
          pacifico.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
