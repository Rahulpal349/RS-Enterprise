import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMobileActions from "@/components/FloatingMobileActions";
import { ThemeProvider } from "@/components/ThemeProvider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RS Enterprise - Civil Construction & General Order Supplier",
  description: "R. S. Enterprise is a trusted Civil Construction and General Order Supplier based in Andal Gram, Durgapur, West Bengal.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${nunito.className} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingMobileActions />
        </ThemeProvider>
      </body>
    </html>
  );
}
