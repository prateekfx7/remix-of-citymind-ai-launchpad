import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardImg from "@/assets/dashboard-hero.png";

export function Hero() {
  return (
    <section id="top" className="relative flex-1 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4"
      />
      <div className="absolute inset-0 bg-background/40 z-0" />

      <div className="relative z-10 flex flex-col items-center w-full px-4 pt-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground font-body mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Now with AI agents support ✨
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center font-display text-5xl md:text-6xl lg:text-[5rem] leading-[0.95] tracking-tight text-foreground max-w-xl"
        >
          The Future of <em className="italic font-display">CityMind AI</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-center text-base md:text-lg text-muted-foreground max-w-[650px] leading-relaxed font-body"
        >
          Empower citizens with intelligent AI systems that analyze, adapt, and deliver real-time city insights—so communities can experience smarter, safer, and more connected urban living.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 flex items-center gap-3"
        >
          <a href="https://citymindai.base44.app/" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-6 py-5 text-sm font-medium font-body bg-primary text-primary-foreground hover:bg-primary/90">
              Explore app
            </Button>
          </a>
          <a href="https://citymindai.base44.app/" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              className="rounded-full px-5 py-5 text-sm font-medium font-body bg-background shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:bg-background/80"
            >
              Get started <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 w-full max-w-5xl"
        >
          <div
            className="rounded-2xl overflow-hidden p-3 md:p-4"
            style={{
              background: "rgba(255, 255, 255, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              boxShadow: "var(--shadow-dashboard)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <img
              src={dashboardImg}
              alt="CityMind AI citizen portal dashboard preview"
              className="w-full h-auto rounded-xl block"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
