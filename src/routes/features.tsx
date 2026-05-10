import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/features")({
  component: FeaturesPage,
  head: () => ({
    meta: [
      { title: "Features — CityMind AI" },
      { name: "description", content: "AI agents for traffic, waste, parking, weather and energy — one citizen-first intelligence layer." },
      { property: "og:title", content: "Features — CityMind AI" },
      { property: "og:description", content: "AI agents for traffic, waste, parking, weather and energy." },
    ],
  }),
});

function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <Features />
      <Footer />
    </div>
  );
}
