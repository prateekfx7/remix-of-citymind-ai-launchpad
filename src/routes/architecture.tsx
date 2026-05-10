import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Architecture } from "@/components/Architecture";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/architecture")({
  component: ArchitecturePage,
  head: () => ({
    meta: [
      { title: "Architecture — CityMind AI" },
      { name: "description", content: "A four-layer architecture turning urban signals into citizen-ready intelligence." },
      { property: "og:title", content: "Architecture — CityMind AI" },
      { property: "og:description", content: "Four-layer system design powering CityMind AI." },
    ],
  }),
});

function ArchitecturePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <Architecture />
      <Footer />
    </div>
  );
}
