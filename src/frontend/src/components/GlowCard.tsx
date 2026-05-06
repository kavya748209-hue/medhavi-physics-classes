import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  style?: CSSProperties;
  "data-ocid"?: string;
}

export function GlowCard({
  children,
  className,
  glowColor,
  style,
  "data-ocid": dataOcid,
}: GlowCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl depth-card transition-smooth group",
        "bg-card border border-border/50",
        "hover:scale-[1.02] hover:shadow-2xl",
        className,
      )}
      style={{
        ...(glowColor ? ({ "--glow-color": glowColor } as CSSProperties) : {}),
        ...style,
      }}
      data-ocid={dataOcid}
    >
      <div
        className={cn(
          "absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none",
          "bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-sm",
        )}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
