import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/tech-stack")({
  component: TechStackPage,
  head: () => ({
    meta: [
      { title: "Tech Stack — CityMind AI" },
      { name: "description", content: "React, Next.js and n8n at the core of CityMind AI's real-time platform." },
      { property: "og:title", content: "Tech Stack — CityMind AI" },
      { property: "og:description", content: "The technologies powering CityMind AI." },
    ],
  }),
});

function TechStackPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <TechStack />
      <Footer />
    </div>
  );
}
