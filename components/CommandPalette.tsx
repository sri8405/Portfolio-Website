"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Command, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { commandItems } from "@/lib/data";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return commandItems;
    return commandItems.filter((item) => `${item.label} ${item.hint}`.toLowerCase().includes(normalized));
  }, [query]);

  const run = (href: string) => {
    setOpen(false);
    setQuery("");
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.open(href, href.startsWith("/") ? "_self" : "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/60 transition hover:border-cyan/50 hover:text-cyan lg:inline-flex"
        aria-label="Open command palette"
      >
        <Command size={14} />
        <span>Ctrl K</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-start justify-center bg-black/60 px-4 pt-24 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              className="glass w-full max-w-2xl overflow-hidden rounded-3xl"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
                <Search size={18} className="text-cyan" />
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Navigate portfolio..."
                  className="h-10 min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/38"
                />
                <kbd className="rounded-lg border border-white/10 px-2 py-1 text-[10px] text-white/45">ESC</kbd>
              </div>
              <div className="max-h-[420px] overflow-y-auto p-2">
                {filtered.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => run(item.href)}
                    className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition hover:bg-white/[0.07]"
                  >
                    <span>
                      <span className="block font-display text-base font-semibold text-white">{item.label}</span>
                      <span className="mt-1 block text-xs text-white/48">{item.hint}</span>
                    </span>
                    <ArrowUpRight size={16} className="text-white/35" />
                  </button>
                ))}
                {!filtered.length && <p className="px-4 py-8 text-center text-sm text-white/48">No command found.</p>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
