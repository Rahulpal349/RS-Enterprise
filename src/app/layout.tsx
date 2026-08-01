import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { ThemeProvider } from "@/components/ThemeProvider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RS Enterprise - Civil Construction & General Order Supplier",
  description: "R. S. Enterprise is a trusted Civil Construction and General Order Supplier based in Andal Gram, Durgapur, West Bengal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={nunito.className}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
