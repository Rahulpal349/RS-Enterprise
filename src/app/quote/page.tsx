import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote | RS Enterprise",
  description: "Request a quote for your civil construction or general order supply needs.",
};

export default function QuotePage() {
  return (
    <main className="min-h-screen pt-20">
      <Contact />
    </main>
  );
}
