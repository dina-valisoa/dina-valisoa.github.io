"use client";

import { useEffect, useState } from "react";

const opts: Intl.DateTimeFormatOptions = {
  timeZone: "Indian/Antananarivo",
  hour: "numeric",
  minute: "2-digit",
};

export function Clock({ locale = "en-US" }: { locale?: string }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{now ? now.toLocaleTimeString(locale, opts) : "--:--"}</span>;
}
