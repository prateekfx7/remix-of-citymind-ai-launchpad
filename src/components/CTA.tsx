import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="relative w-full bg-background py-32 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl mx-auto rounded-3xl border border-border bg-primary text-primary-foreground p-12 md:p-20 text-center shadow-[var(--shadow-dashboard)] overflow-hidden"
      >
        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-accent blur-3xl"
        />
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight relative">
          Ready to make your city <em className="italic">think</em>?
        </h2>
        <p className="mt-5 text-base md:text-lg opacity-80 max-w-[560px] mx-auto leading-relaxed">
          Join thousands of citizens already using CityMind AI to navigate, report and live smarter every day.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <Button asChild className="rounded-full px-6 py-5 text-sm font-medium bg-background text-foreground hover:bg-background/90">
            <Link to="/features">
              Explore app <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="rounded-full px-6 py-5 text-sm font-medium border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Link to="/architecture">
              Get started
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
