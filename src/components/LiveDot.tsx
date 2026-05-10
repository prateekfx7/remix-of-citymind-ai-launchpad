type Props = { label?: string; className?: string };

export function LiveDot({ label = "Live", className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 backdrop-blur px-2.5 py-1 text-[11px] font-medium text-foreground ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      {label}
    </span>
  );
}
