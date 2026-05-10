import { Button } from "@/components/ui/button";
import { LiveDot } from "@/components/LiveDot";

const links = [
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "SOS", href: "#sos" },
];

export function Navbar() {
  return (
    <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 font-body">
      <div className="flex items-center gap-3">
        <a href="#top" className="text-xl font-semibold tracking-tight text-foreground">
          ✦ CityMind AI
        </a>
        <LiveDot label="Live" />
      </div>
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {l.label}
          </a>
        ))}
      </div>
      <Button className="rounded-full px-5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90">
        Get Started
      </Button>
    </nav>
  );
}
