import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import VerticalNavbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/Toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Tan Rui Yang's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " " +
          "min-h-screen bg-clr-primary text-clr-white text-lg dark"
        }
        suppressHydrationWarning
      >
        <Providers>
          {children}
          <VerticalNavbar />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
