import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "Features", to: "/features" },
  { label: "Architecture", to: "/architecture" },
  { label: "Tech Stack", to: "/tech-stack" },
  { label: "SOS", to: "/sos" },
] as const;

export function Navbar() {
  return (
    <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 font-body">
      <Link to="/" className="text-xl font-semibold tracking-tight text-foreground">
        ✦ CityMind AI
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            activeProps={{ className: "text-sm text-foreground font-medium" }}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <Button asChild className="rounded-full px-5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90">
        <Link to="/features">
          Get Started
        </Link>
      </Button>
    </nav>
  );
}
