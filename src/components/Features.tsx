import { motion } from "framer-motion";
import { Car, Trash2, ParkingSquare, CloudSun, Zap, Bot } from "lucide-react";
import { LiveDot } from "@/components/LiveDot";

const features = [
  {
    icon: Car,
    title: "Traffic Agent",
    desc: "Real-time congestion analysis, smart routing, and predictive flow management across the city.",
  },
  {
    icon: Trash2,
    title: "Waste Agent",
    desc: "Optimized collection routes, fill-level sensing, and AI scheduling for cleaner neighborhoods.",
  },
  {
    icon: ParkingSquare,
    title: "Parking Agent",
    desc: "Live parking availability, dynamic pricing, and guided navigation to the nearest free spot.",
  },
  {
    icon: CloudSun,
    title: "Weather Agent",
    desc: "Hyperlocal forecasts, AQI alerts, and climate-aware recommendations for daily citizen life.",
  },
  {
    icon: Zap,
    title: "Energy Agent",
    desc: "Grid load forecasting, outage detection, and household-level efficiency suggestions.",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    desc: "A conversational citizen agent that orchestrates every system and answers anything about your city.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative w-full bg-background py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-6">
            City Systems
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground max-w-3xl">
            One brain for every <em className="italic">city system</em>.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-[640px] leading-relaxed">
            Specialized AI agents for traffic, waste, parking, weather and energy — all coordinated by a single citizen-first intelligence layer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-border bg-secondary/40 p-6 hover:bg-secondary transition-colors"
            >
              <LiveDot label="Active" className="absolute top-4 right-4" />
              <div className="h-10 w-10 rounded-xl bg-background border border-border flex items-center justify-center mb-5 transition-transform group-hover:scale-110 group-hover:rotate-3">
                <f.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-display text-2xl text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
