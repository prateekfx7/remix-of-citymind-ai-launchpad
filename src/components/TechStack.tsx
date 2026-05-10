import { motion } from "framer-motion";

const stack = [
  { name: "React", desc: "Citizen UI" },
  { name: "Next.js", desc: "Edge SSR" },
  { name: "n8n", desc: "Agent workflows" },
  { name: "TypeScript", desc: "Type safety" },
  { name: "Tailwind", desc: "Design system" },
  { name: "Postgres", desc: "City graph" },
  { name: "OpenAI", desc: "LLM reasoning" },
  { name: "Vercel", desc: "Global deploy" },
];

export function TechStack() {
  return (
    <section id="techstack" className="relative w-full bg-secondary/40 py-32 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-6">
            Tech Stack
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground max-w-3xl">
            Powered by tools we <em className="italic">trust</em>.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-[640px] leading-relaxed">
            React, Next.js and n8n at the core — composed into a resilient, real-time platform for cities.
          </p>
        </motion.div>
      </div>

      <div className="relative w-full">
        <div className="flex gap-5 marquee">
          {[...stack, ...stack].map((s, i) => (
            <div
              key={i}
              className="shrink-0 w-64 rounded-2xl border border-border bg-background p-6 transition-transform hover:-translate-y-1 hover:shadow-[var(--shadow-dashboard)]"
            >
              <div className="flex items-center justify-between">
                <div className="font-display text-3xl text-foreground">{s.name}</div>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee {
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
