import type { Metadata } from "next";

import { Portfolio } from "@/components/home/portfolio";

export const metadata: Metadata = {
  alternates: { canonical: "/", languages: { en: "/", fr: "/fr" } },
};

export default function Home() {
  return <Portfolio lang="en" />;
}
