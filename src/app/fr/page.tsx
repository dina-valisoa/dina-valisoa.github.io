import type { Metadata } from "next";

import { Portfolio } from "@/components/home/portfolio";

export const metadata: Metadata = {
  title: { absolute: "Dina Valisoa RANDRIAMIFIDY — Développeur Fullstack & Ingénieur IA" },
  description:
    "Portfolio de Dina Valisoa RANDRIAMIFIDY, développeur fullstack et ingénieur IA entre Madagascar et la France. Plateformes FinTech, ERP et applications IA.",
  alternates: { canonical: "/fr", languages: { en: "/", fr: "/fr" } },
  // openGraph replaces the parent object, so repeat what the layout set
  openGraph: {
    title: "Dina Valisoa RANDRIAMIFIDY — Développeur Fullstack & Ingénieur IA",
    description: "Développeur fullstack et ingénieur IA entre Madagascar et la France.",
    siteName: "Dina Valisoa RANDRIAMIFIDY",
    locale: "fr_FR",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function HomeFr() {
  return <Portfolio lang="fr" />;
}
