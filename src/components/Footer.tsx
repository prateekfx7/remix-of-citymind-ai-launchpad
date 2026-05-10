const cols = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Architecture", href: "/architecture" },
      { label: "Tech Stack", href: "/tech-stack" },
      { label: "SOS", href: "/sos" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "#" },
      { label: "API", href: "#" },
      { label: "Status", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <div className="text-xl font-semibold tracking-tight text-foreground">✦ CityMind AI</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Intelligence that helps every citizen experience a smarter, safer, more connected city.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-sm font-medium text-foreground mb-4">{c.title}</div>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} CityMind AI. All rights reserved.</div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Security</a>
        </div>
      </div>
    </footer>
  );
}
