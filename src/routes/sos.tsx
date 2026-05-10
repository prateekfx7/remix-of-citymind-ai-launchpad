import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { SOS } from "@/components/SOS";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/sos")({
  component: SOSPage,
  head: () => ({
    meta: [
      { title: "SOS — CityMind AI" },
      { name: "description", content: "Always-on citizen safety: one-tap SOS, live location, and trusted contacts." },
      { property: "og:title", content: "SOS — CityMind AI" },
      { property: "og:description", content: "Citizen safety system always one tap away from help." },
    ],
  }),
});

function SOSPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <SOS />
      <Footer />
    </div>
  );
}
