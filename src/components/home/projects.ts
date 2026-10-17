import { Cog, CreditCard, Database, Eye, MailCheck, Music, Presentation, ScanText, School } from "lucide-react";

import { type Lang, tr } from "./lang";

// `category` is the filter key (kept in English); Work translates the label.
export function getProjects(lang: Lang) {
  const t = tr(lang);
  return [
    {
      title: t("Online Payment Platform", "Plateforme de paiement en ligne"),
      icon: CreditCard,
      client: "Ibonia",
      category: "FinTech",
      description: t(
        "FinTech platform processing 600M+ Ar across 15,000+ Mobile Money and Visa/Mastercard payments. Payment pipeline cut from 3–5 min to near real-time.",
        "Plateforme FinTech : 600M+ Ar traités sur 15 000+ paiements Mobile Money et Visa/Mastercard. Pipeline réduit de 3–5 min à quasi temps réel.",
      ),
      stack: ["Java Spring", "TypeScript", "PostgreSQL"],
      href: null,
    },
    {
      title: t("AI Email Agent", "Agent e-mail IA"),
      icon: MailCheck,
      client: t("Freelance — Romania", "Freelance — Roumanie"),
      category: "AI",
      description: t(
        "Email classification and auto-response system that removed manual prospect triage, wired to FareHarbor and Ebriza APIs for real-time answers.",
        "Classification des e-mails et réponses automatiques : fin du tri manuel des prospects, branché aux API FareHarbor et Ebriza en temps réel.",
      ),
      stack: ["Python", "FastAPI", "LLM"],
      href: null,
    },
    {
      title: t("Odoo OCR Module", "Module OCR Odoo"),
      icon: ScanText,
      client: "eTech Consulting",
      category: "ERP",
      description: t(
        "OCR integrated into Odoo, automating document extraction and eliminating manual entry for 600+ employees.",
        "OCR intégré à Odoo : extraction automatique des documents, plus de saisie manuelle pour 600+ employés.",
      ),
      stack: ["Odoo", "Python", "OCR"],
      href: null,
    },
    {
      title: t("School Management Platform", "Plateforme de gestion scolaire"),
      icon: School,
      client: t("Self-employed", "Indépendant"),
      category: "ERP",
      description: t(
        "Platform for private schools: report cards from grades, courses and classes, tuition fee payments and follow-up.",
        "Plateforme pour écoles privées : bulletins à partir des notes, cours et classes, paiement et suivi de l'écolage.",
      ),
      stack: ["PHP", "MySQL", "JavaScript"],
      href: null,
    },
    {
      title: t("CRUD Generation Engine", "Moteur de génération CRUD"),
      icon: Cog,
      client: "BICI",
      category: "Tools",
      description: t(
        "Interface generator for MySQL, SQL Server, Oracle and PostgreSQL — zero repetitive boilerplate.",
        "Générateur d'interfaces pour MySQL, SQL Server, Oracle et PostgreSQL — zéro code répétitif.",
      ),
      stack: ["Java", "SQL"],
      href: null,
    },
    {
      title: t("Database Manager", "Gestionnaire de base de données"),
      icon: Database,
      client: "BICI",
      category: "Tools",
      description: t(
        "DBeaver-inspired database management tool with a simplified UI for non-technical users.",
        "Outil de gestion de bases de données inspiré de DBeaver, avec une interface simple pour les non-techniciens.",
      ),
      stack: ["Java", "Oracle", "PostgreSQL"],
      href: null,
    },
    {
      title: "SensAI",
      icon: Eye,
      client: t("AI accessibility app", "App d'accessibilité IA"),
      category: "AI",
      description: t(
        "Mobile app for deaf and blind users — YOLOv8 object detection, OCR, voice commands, sound classification, LLM summarization.",
        "App mobile pour personnes sourdes et aveugles — détection d'objets YOLOv8, OCR, commandes vocales, classification de sons, résumés LLM.",
      ),
      stack: ["Python", "YOLOv8", "LLM"],
      href: null,
    },
    {
      title: "Antema",
      icon: Presentation,
      client: "Open source",
      category: "Tools",
      description: t(
        "Desktop app replacing PowerPoint for church worship — lyrics, liturgy and holy songs as slides.",
        "App de bureau qui remplace PowerPoint pour le culte — paroles, liturgie et cantiques en diapositives.",
      ),
      stack: ["Tauri", "React"],
      href: "https://github.com/Antema-MG/Antema",
    },
    {
      title: "Solfa Reader",
      icon: Music,
      client: "Open source",
      category: "Tools",
      description: t(
        "Web player for 4-voice SATB choral music — Web Audio synthesis, per-voice mute/solo, transpose, tempo.",
        "Lecteur web de partitions chorales à 4 voix — synthèse Web Audio, mute/solo par voix, transposition, tempo.",
      ),
      stack: ["Web Audio", "TypeScript"],
      href: "https://github.com/Antema-MG/solfa-reader",
    },
  ];
}
