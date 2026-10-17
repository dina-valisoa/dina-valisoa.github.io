"use client";

import { useState } from "react";

import { ArrowUpRight } from "lucide-react";

import { type Lang, tr } from "./lang";
import { getProjects } from "./projects";

import { cn } from "@/lib/utils";

const filters = ["All", "FinTech", "AI", "ERP", "Tools"];

export function Work({ lang }: { lang: Lang }) {
  const t = tr(lang);
  const label = (f: string) => (f === "All" ? t("All", "Tous") : f === "Tools" ? t("Tools", "Outils") : f === "AI" ? t("AI", "IA") : f);
  const [active, setActive] = useState("All");
  const shown = getProjects(lang).filter((p) => active === "All" || p.category === active);

  return (
    <>
      <div className="glass mb-6 inline-flex gap-1 rounded-full p-1.5">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={cn("rounded-full px-4 py-2 text-sm transition-colors", active === f ? "bg-btn text-btn-fg" : "text-ink-2 hover:text-ink")}
          >
            {label(f)}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => {
            const Card = p.href ? "a" : "div";
            const Icon = p.icon;
            return (
              <Card
                key={p.title}
                {...(p.href && { href: p.href, target: "_blank", rel: "noopener noreferrer" })}
                className="glass group flex flex-col gap-6 rounded-[22px] p-5 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-10 place-items-center rounded-xl bg-tile">
                    <Icon className="size-5 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
                  </span>
                  <span className="rounded-full border border-line px-2 py-0.5 text-[11px] text-ink-3">{label(p.category)}</span>
                </div>
                <div>
                  <div className="text-xs text-ink-3">{p.client}</div>
                  <h3 className="mt-1 flex items-center gap-1 text-lg leading-snug tracking-tight">
                    {p.title}
                    {p.href && <ArrowUpRight className="size-4 shrink-0 text-ink-3 group-hover:text-ink" />}
                  </h3>
                  <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-ink-2">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full bg-tile px-2 py-0.5 text-[11px] text-ink-2">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
      </div>
    </>
  );
}
