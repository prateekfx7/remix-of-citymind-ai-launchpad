import { motion } from "framer-motion";
import { Database, Cpu, Network, Users } from "lucide-react";

const layers = [
  {
    icon: Users,
    title: "Citizen Layer",
    desc: "Mobile + web portals, SOS, AI chat — the human-facing surface of the city.",
  },
  {
    icon: Network,
    title: "Agent Orchestration",
    desc: "n8n workflows route tasks across specialized agents (traffic, waste, energy…) with shared memory.",
  },
  {
    icon: Cpu,
    title: "Intelligence Core",
    desc: "LLM reasoning, vector retrieval and predictive models — turning raw signals into decisions.",
  },
  {
    icon: Database,
    title: "Data & Sensors",
    desc: "IoT streams, civic APIs and historical datasets unified into a real-time city graph.",
  },
];

export function Architecture() {
  return (
    <section id="architecture" className="relative w-full bg-background py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-6">
            System Design
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground max-w-3xl">
            How <em className="italic">CityMind AI</em> is built.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-[640px] leading-relaxed">
            A four-layer architecture that turns raw urban signals into citizen-ready intelligence.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-6">
            {layers.map((l, i) => (
              <motion.div
                key={l.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative md:w-1/2 ${i % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"}`}
              >
                <div className="rounded-2xl border border-border bg-secondary/40 p-6 transition-all hover:bg-secondary hover:shadow-[var(--shadow-dashboard)] hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-background border border-border flex items-center justify-center">
                      <l.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Layer {i + 1}</div>
                  </div>
                  <h3 className="font-display text-2xl text-foreground">{l.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{l.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
