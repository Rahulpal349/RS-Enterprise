import About from "@/components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | RS Enterprise",
  description: "Learn more about R. S. Enterprise and our commitment to quality construction.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16 sm:pt-20">
      <About />
    </main>
  );
}
