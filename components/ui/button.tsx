import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SharedProps = {
  variant?: "primary" | "ghost" | "outline";
  children: ReactNode;
  className?: string;
};

type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const styles = {
  primary: "bg-white text-ink shadow-glow hover:bg-cyan",
  ghost: "border border-white/12 bg-white/[0.04] text-white backdrop-blur-xl hover:border-cyan/60 hover:text-cyan",
  outline: "border border-cyan/25 bg-cyan/[0.06] text-cyan hover:bg-cyan hover:text-ink"
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn("inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition", styles[variant], className)}
      {...props}
    />
  );
}

export function ButtonLink({ variant = "primary", className, ...props }: AnchorProps) {
  return (
    <a
      className={cn("inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition", styles[variant], className)}
      {...props}
    />
  );
}
