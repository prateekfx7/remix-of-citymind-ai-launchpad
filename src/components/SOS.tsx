import { motion } from "framer-motion";
import { Siren, Phone, MapPin, ShieldCheck } from "lucide-react";
import { LiveDot } from "@/components/LiveDot";

const items = [
  { icon: Phone, title: "One-tap SOS", desc: "Instant call to nearest responders with citizen ID and live context." },
  { icon: MapPin, title: "Live location", desc: "Continuous GPS share with emergency services until you're safe." },
  { icon: ShieldCheck, title: "Trusted contacts", desc: "Family and neighbors are auto-notified with status updates." },
];

export function SOS() {
  return (
    <section id="sos" className="relative w-full py-32 px-6 md:px-12 lg:px-20 bg-secondary/40">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-6">
            Citizen Safety
          </span>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
            An <em className="italic">SOS system</em> that's always on.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-[520px] leading-relaxed">
            CityMind AI keeps every citizen one tap away from help — coordinating police, ambulance and fire services with real-time location and intelligent triage.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-3xl border border-border bg-background p-8 shadow-[var(--shadow-dashboard)]"
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-12 w-12 rounded-2xl bg-destructive/10 flex items-center justify-center"
            >
              <Siren className="h-6 w-6 text-destructive" />
            </motion.div>
            <div className="flex-1">
              <div className="text-sm text-muted-foreground">Emergency</div>
              <div className="font-display text-xl text-foreground">SOS Active</div>
            </div>
            <LiveDot label="Online" />
          </div>
          <div className="space-y-4">
            {items.map((it, idx) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                className="flex gap-4 items-start p-4 rounded-xl border border-border hover:border-foreground/20 transition-colors"
              >
                <div className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <it.icon className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <div className="font-medium text-sm text-foreground">{it.title}</div>
                  <div className="text-sm text-muted-foreground">{it.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
