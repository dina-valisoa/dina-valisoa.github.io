import Image from "next/image";

import { Download, Github, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import { Clock } from "./clock";
import { ContactForm } from "./contact-form";
import { IsoIllustration } from "./iso";
import { type Lang, tr } from "./lang";
import { getProjects } from "./projects";
import { StackList } from "./stack-list";
import { Work } from "./work";

import { ThemeToggle } from "@/components/theme-toggle";

const EMAIL = "randriamifidydina@gmail.com";
const PHONE = "+261 34 40 332 62";
const GITHUB = "https://github.com/dinavalisoaa/";
const LINKEDIN = "https://www.linkedin.com/in/dina-randriamifidy/";
const WHATSAPP = "https://wa.me/261344033262";
const CV = "/Dina-Randriamifidy-CV.pdf";

type Experience = {
  company: string;
  logo?: string; // drop a file in public/companies/ and set this to show it instead of the monogram
  place: string;
  role: string;
  period: string;
  current?: boolean;
  client: string;
  solution: string;
  responsibilities: string[];
  stack: string[];
  results: string[];
};

// All copy lives here, English and French side by side.
function content(lang: Lang) {
  const t = tr(lang);

  const stats = [
    { value: "4+", unit: t("yrs", "ans"), label: t("Shipping production software", "À livrer du logiciel en production") },
    { value: "600M+", unit: "Ar", label: t("Processed through my payment platform", "Traités par ma plateforme de paiement") },
    { value: t("15,000+", "15 000+"), unit: "", label: t("Mobile Money & card payments", "Paiements Mobile Money et carte") },
    { value: "600+", unit: "", label: t("Employees using my ERP tools", "Employés utilisant mes outils ERP") },
  ];

  const experiences: Experience[] = [
    {
      company: "Ibonia",
      place: "Antananarivo",
      role: t("Fullstack Developer, Java / TypeScript", "Développeur Fullstack, Java / TypeScript"),
      period: t("Dec 2024 — Now", "Déc. 2024 — Aujourd'hui"),
      current: true,
      client: t("Businesses and event organizers taking payments online in Madagascar", "Entreprises et organisateurs d'événements qui encaissent en ligne à Madagascar"),
      solution: t(
        "Online payment platform: Mobile Money + Visa/Mastercard, event ticketing",
        "Plateforme de paiement en ligne : Mobile Money + Visa/Mastercard, billetterie événementielle",
      ),
      responsibilities: [
        t("Payment pipeline development", "Développement du pipeline de paiement"),
        t("Shared npm libraries", "Librairies npm partagées"),
        t("Legacy refactor with DDD", "Refonte du legacy en DDD"),
        t("Mentoring juniors & interns", "Encadrement des juniors et stagiaires"),
      ],
      stack: ["Java", "Spring Boot", "TypeScript", "PostgreSQL", "CyberSource", "Mobile Money"],
      results: [
        t("600M+ Ar processed, 15,000+ payments", "600M+ Ar traités, 15 000+ paiements"),
        t("Pipeline: 3–5 min → near real-time", "Pipeline : 3–5 min → quasi temps réel"),
        t("Less duplication, decoupled modules", "Moins de duplication, modules découplés"),
      ],
    },
    {
      company: "Freelance",
      place: t("Romania · Remote", "Roumanie · À distance"),
      role: t("Fullstack Developer / AI Engineer", "Développeur Fullstack / Ingénieur IA"),
      period: t("Jul 2025 — Jan 2026", "Juil. 2025 — Janv. 2026"),
      client: t("Romanian business client (bookings & point of sale)", "Client roumain (réservations et point de vente)"),
      solution: t("AI email assistant, new website and booking/POS integrations", "Assistant e-mail IA, nouveau site web et intégrations réservation/caisse"),
      responsibilities: [
        t("Legacy code → clean architecture", "Code legacy → clean architecture"),
        t("AI email classification & auto-replies", "Classification IA des e-mails et réponses auto"),
        t("Wix → Next.js + TinaCMS migration", "Migration Wix → Next.js + TinaCMS"),
        t("FareHarbor & Ebriza API integration", "Intégration des API FareHarbor et Ebriza"),
      ],
      stack: ["Python", "FastAPI", "LLM", "Next.js", "TinaCMS"],
      results: [
        t("Manual prospect triage removed", "Tri manuel des prospects supprimé"),
        t("Faster site, full editorial autonomy", "Site plus rapide, autonomie éditoriale totale"),
        t("Real-time AI answers on orders", "Réponses IA en temps réel sur les commandes"),
      ],
    },
    {
      company: "eTech Consulting",
      place: "Antananarivo",
      role: t("Software Engineer, Odoo ERP", "Ingénieur logiciel, Odoo ERP"),
      period: t("2024 — Dec 2024", "2024 — Déc. 2024"),
      client: t("eTech group — 600+ employees", "Groupe eTech — 600+ employés"),
      solution: t("Odoo ERP modules with AI-powered document OCR", "Modules Odoo ERP avec OCR de documents par IA"),
      responsibilities: [
        t("OCR module integrated into Odoo", "Module OCR intégré à Odoo"),
        t("HR, Payroll & Invoicing modules", "Modules RH, Paie et Facturation"),
        t("Internal book reservation platform", "Plateforme interne de réservation de livres"),
      ],
      stack: ["Odoo", "Python", "PostgreSQL", "OCR"],
      results: [
        t("Manual data entry eliminated for 600+ employees", "Saisie manuelle supprimée pour 600+ employés"),
        t("Modules deployed group-wide", "Modules déployés dans tout le groupe"),
        t("Reservation platform adopted company-wide", "Plateforme de réservation adoptée par toute l'entreprise"),
      ],
    },
    {
      company: "BICI",
      place: "Antananarivo",
      role: t("Software Developer, Java", "Développeur logiciel, Java"),
      period: t("2023 — Jan 2024", "2023 — Janv. 2024"),
      client: t("BICI internal teams — dock management & payroll", "Équipes internes BICI — gestion des docks et paie"),
      solution: t("Developer tooling and ERP support", "Outillage développeur et support ERP"),
      responsibilities: [
        t("CRUD interface generation engine", "Moteur de génération d'interfaces CRUD"),
        t("DBeaver-inspired database tool", "Outil de base de données inspiré de DBeaver"),
        t("ERP support", "Support ERP"),
        t("Oracle & PostgreSQL administration", "Administration Oracle et PostgreSQL"),
      ],
      stack: ["Java", "Oracle", "PostgreSQL", "MySQL", "SQL Server"],
      results: [
        t("Zero repetitive CRUD boilerplate", "Zéro code CRUD répétitif"),
        t("Non-technical users manage data alone", "Les non-techniciens gèrent leurs données seuls"),
        t("Stable ERP for docks & payroll", "ERP stable pour les docks et la paie"),
      ],
    },
    {
      company: t("Self-employed", "Indépendant"),
      place: "Antananarivo",
      role: t("PHP Developer", "Développeur PHP"),
      period: "2022 — 2024",
      client: t("Private schools in Antananarivo", "Écoles privées d'Antananarivo"),
      solution: t("School management platform", "Plateforme de gestion scolaire"),
      responsibilities: [
        t("Full product build, end to end", "Produit complet, de bout en bout"),
        t("Grades & report cards", "Notes et bulletins"),
        t("Courses, classes & teachers", "Cours, classes et enseignants"),
        t("Tuition fee payments & follow-up", "Paiement et suivi de l'écolage"),
      ],
      stack: ["PHP", "MySQL", "JavaScript"],
      results: [t("Report cards generated automatically", "Bulletins générés automatiquement"), t("Tuition fees tracked in one place", "Écolage suivi en un seul endroit")],
    },
  ];

  const education = [
    {
      degree: "Master 2 MIAGE MBDS",
      school: "Université Côte d'Azur · Nice, France",
      logo: "https://upload.wikimedia.org/wikipedia/fr/f/fa/Logo-univ-nice-cote-dazur.svg",
      period: t("2024 — Oct 2026", "2024 — Oct. 2026"),
      status: t("Graduating Oct 2026", "Diplôme en oct. 2026"),
      current: true,
      tags: [t("Mobiquity", "Mobiquité"), "Big Data", "Data Science", t("Systems Integration", "Intégration de systèmes")],
    },
    {
      degree: t("Bachelor in Computer Science", "Licence en informatique"),
      school: "IT University · Antananarivo, Madagascar",
      // ITU has no public logo file; its site icon is the closest official source
      logo: "https://www.google.com/s2/favicons?domain=ituniversity-mg.com&sz=128",
      period: "2020 — 2023",
      status: t("Very good mention", "Mention Très bien"),
      current: false,
      tags: [t("Software Engineering", "Génie logiciel"), t("Algorithms", "Algorithmique"), t("Databases", "Bases de données")],
    },
  ];

  return { t, stats, experiences, education };
}

const initials = (s: string) => s.slice(0, 2).toUpperCase();

function CompanyLogo({ e, className }: { e: Experience; className: string }) {
  const ring = e.current ? "ring-2 ring-blue-500/60" : "";
  return e.logo ? (
    <Image src={e.logo} alt={e.company} width={64} height={64} className={`rounded-full bg-white object-contain ${ring} ${className}`} />
  ) : (
    <span className={`grid place-items-center rounded-full bg-btn text-[11px] text-btn-fg ${ring} ${className}`}>{initials(e.company)}</span>
  );
}

function SectionTitle({ label, title }: { label: string; title: React.ReactNode }) {
  return (
    <div className="mb-8 md:mb-10">
      <span className="flex items-center gap-2 text-sm text-ink-2">
        <span className="size-1.5 rounded-full bg-ink" />
        {label}
      </span>
      <h2 className="mt-3 max-w-2xl text-3xl tracking-tight md:text-5xl">{title}</h2>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full bg-tile px-2.5 py-1 text-xs text-ink-2">{children}</span>;
}

export function Portfolio({ lang }: { lang: Lang }) {
  const { t, stats, experiences, education } = content(lang);
  const projectCount = getProjects(lang).length;
  const nav = [
    { id: "experience", label: t("Experience", "Expérience") },
    { id: "education", label: t("Education", "Formation") },
    { id: "work", label: t("Work", "Projets") },
  ];

  return (
    <div lang={lang} className="relative min-h-screen overflow-hidden bg-page font-sans text-ink selection:bg-ink selection:text-page">
      <div aria-hidden className="pointer-events-none fixed inset-0" style={{ background: "var(--page-glow)" }} />

      <div className="relative mx-auto max-w-[1220px] px-4 md:px-6">
        {/* Top bar */}
        <header className="flex items-center justify-between gap-4 py-5 text-sm">
          <span className="truncate">Dina V. Randriamifidy</span>
          <nav className="hidden gap-6 text-ink-2 lg:flex">
            {nav.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="hover:text-ink">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <span className="hidden text-ink-2 md:inline">
              Antananarivo • <Clock locale={lang === "fr" ? "fr-FR" : "en-US"} />
            </span>
            {/* Language switch: plain links, each language has its own URL */}
            <div className="glass flex rounded-full p-0.5 text-xs">
              {(["en", "fr"] as const).map((l) => (
                <a
                  key={l}
                  href={l === "en" ? "/" : "/fr"}
                  hrefLang={l}
                  aria-current={l === lang ? "page" : undefined}
                  className={`rounded-full px-2.5 py-1.5 uppercase ${l === lang ? "bg-btn text-btn-fg" : "text-ink-2 hover:text-ink"}`}
                >
                  {l}
                </a>
              ))}
            </div>
            <ThemeToggle />
            <a href="#contact" className="hidden rounded-full bg-btn px-4 py-2 text-btn-fg transition-opacity hover:opacity-85 sm:block">
              Contact
            </a>
          </div>
        </header>

        {/* Hero: name sits behind the glass so it blurs through */}
        <section className="pt-4 md:pt-8">
          <h1 className="text-center text-[clamp(3.6rem,14vw,10.5rem)] leading-[0.85] font-medium tracking-[-0.055em]">Dina Valisoa</h1>

          <div className="relative z-10 -mt-[clamp(1.2rem,4.6vw,3.5rem)] grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-12">
            {/* Intro */}
            <div className="glass flex flex-col justify-between gap-8 rounded-[28px] p-6 backdrop-blur-2xl sm:col-span-2 md:p-8 lg:col-span-8">
              <div>
                <div className="flex items-center gap-2 text-sm text-ink-2">
                  <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_10px] shadow-emerald-400" />
                  {t("Software Engineer · Fullstack & AI · Available", "Ingénieur logiciel · Fullstack & IA · Disponible")}
                </div>
                <p className="mt-5 text-2xl leading-tight tracking-tight md:text-[1.9rem]">
                  {t("I build FinTech, ERP and AI products that run real businesses.", "Je conçois des produits FinTech, ERP et IA qui font tourner de vraies entreprises.")}
                </p>
                <p className="mt-4 text-sm text-ink-2">
                  {t("Currently at", "Actuellement chez")} <span className="text-ink">Ibonia</span> · Master 2 MIAGE MBDS, Université Côte d&apos;Azur
                </p>
                {/* Main stack and domains at a glance */}
                <div className="mt-4 flex flex-wrap gap-1.5 text-xs">
                  {[
                    t("AI Automation", "Automatisation IA"),
                    "LLMs",
                    t("Software Engineering", "Génie logiciel"),
                    "Frontend",
                    "Data",
                    t("Project Management", "Gestion de projet"),
                  ].map((d) => (
                    <span key={d} className="rounded-full bg-blue-500/12 px-2.5 py-1 text-blue-700 dark:text-blue-300">
                      {d}
                    </span>
                  ))}
                  {["Java", "Spring Boot", "TypeScript", "Next.js", "Python", "PostgreSQL"].map((s) => (
                    <span key={s} className="rounded-full bg-tile px-2.5 py-1 text-ink-2">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-btn px-5 py-2.5 text-sm text-btn-fg transition-opacity hover:opacity-85">
                  <Mail className="size-4" /> {t("Get in touch", "Me contacter")}
                </a>
              </div>
              {/* Card footer: contacts + CV */}
              <div className="-mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-4 text-sm text-ink-2">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-ink">
                  <FaWhatsapp className="size-4 text-emerald-500" /> WhatsApp
                </a>
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-ink">
                  <Phone className="size-4" /> 034 40 332 62
                </a>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-ink">
                  <FaLinkedinIn className="size-4 text-[#0a66c2] dark:text-sky-400" /> LinkedIn
                </a>
                <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-ink">
                  <FaGithub className="size-4" /> GitHub
                </a>
                <a href={CV} download className="ml-auto flex items-center gap-1.5 rounded-full bg-tile px-3 py-1.5 text-ink transition-opacity hover:opacity-80">
                  <Download className="size-4" /> {t("Download CV", "Télécharger le CV")}
                </a>
              </div>
            </div>

            {/* Photo, kept small enough that the 911×1167 source is never upscaled */}
            <div className="glass relative aspect-[4/5] overflow-hidden rounded-[28px] sm:aspect-auto sm:min-h-80 lg:col-span-4">
              <Image
                src="/profile.webp"
                alt="Dina Valisoa Randriamifidy"
                fill
                priority
                className="object-cover object-[50%_35%] brightness-95 grayscale transition duration-500 hover:brightness-100 hover:grayscale-0"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/50 to-transparent p-5 pt-16 text-white">
                <div className="text-[15px]">Dina Valisoa Randriamifidy</div>
                <div className="mt-0.5 text-xs text-white/65">{t("Madagascar · France · English & French", "Madagascar · France · Anglais & Français")}</div>
              </div>
            </div>

            {/* Impact numbers */}
            <div className="col-span-full grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="glass flex flex-col justify-between gap-3 rounded-[24px] p-5">
                  <span className="text-3xl tracking-tight whitespace-nowrap">
                    {s.value}
                    {s.unit && <span className="ml-1 text-sm text-ink-3">{s.unit}</span>}
                  </span>
                  <span className="text-xs leading-tight text-ink-2">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Stack: one compact line per group */}
            <div className="glass rounded-[24px] px-5 py-4 sm:col-span-2 md:px-6 lg:col-span-12">
              <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
                <h3 className="text-ink-2">Stack</h3>
                <span className="text-xs text-ink-3">{t("Daily drivers in bold", "Outils principaux en gras")}</span>
              </div>
              <StackList lang={lang} />
            </div>
          </div>
        </section>

        {/* Experience: CV-style rows, right under the stack */}
        <section id="experience" className="scroll-mt-10 pt-3 md:pt-4">
          <div className="glass rounded-[28px] p-5 md:p-7">
            <h2 className="text-sm text-ink-2">
              {t("Experience", "Expérience")} <span className="text-ink-3">· {t("since 2022", "depuis 2022")}</span>
            </h2>
            <ol className="mt-2 divide-y divide-line">
              {experiences.map((e) => (
                <li key={e.company + e.period} className="grid gap-x-6 gap-y-3 py-5 md:grid-cols-[210px_minmax(0,1fr)]">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <CompanyLogo e={e} className="size-7 shrink-0 text-[10px]" />
                      <div className="min-w-0">
                        <div className="text-sm leading-tight">{e.company}</div>
                        <div className="text-xs text-ink-3">{e.place}</div>
                      </div>
                    </div>
                    <div className="mt-1.5 text-xs text-ink-3 md:pl-[38px]">
                      {e.period}
                      {e.current && <span className="ml-1 text-blue-600 dark:text-blue-400">· {t("Current", "Actuel")}</span>}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[15px] leading-snug">{e.role}</h3>
                    <dl className="mt-3 grid gap-x-4 gap-y-2 text-sm sm:grid-cols-[96px_minmax(0,1fr)]">
                      <dt className="text-xs text-ink-3 sm:pt-0.5">{t("For", "Pour")}</dt>
                      <dd>{e.client}</dd>
                      <dt className="text-xs text-ink-3 sm:pt-0.5">Solution</dt>
                      <dd>{e.solution}</dd>
                      <dt className="text-xs text-ink-3 sm:pt-0.5">{t("My role", "Mon rôle")}</dt>
                      <dd>
                        <ul className="space-y-0.5 text-ink-2">
                          {e.responsibilities.map((r) => (
                            <li key={r} className="flex gap-2">
                              <span className="text-ink-3">–</span>
                              {r}
                            </li>
                          ))}
                        </ul>
                      </dd>
                      <dt className="text-xs text-ink-3 sm:pt-0.5">{t("Results", "Résultats")}</dt>
                      <dd>
                        <ul className="space-y-0.5">
                          {e.results.map((r) => (
                            <li key={r} className="flex gap-2">
                              <span className="text-blue-600 dark:text-blue-400">+</span>
                              {r}
                            </li>
                          ))}
                        </ul>
                      </dd>
                      <dt className="text-xs text-ink-3 sm:pt-1">Stack</dt>
                      <dd className="flex flex-wrap gap-1">
                        {e.stack.map((s) => (
                          <span key={s} className="rounded-full bg-tile px-2 py-0.5 text-[11px] text-ink-2">
                            {s}
                          </span>
                        ))}
                      </dd>
                    </dl>
                  </div>
                </li>
              ))}
            </ol>
            <footer className="mt-1 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
              <span className="text-xs text-ink-3">{t("The full version, as a PDF.", "La version complète, en PDF.")}</span>
              <a href={CV} download className="flex items-center gap-2 rounded-full bg-btn px-4 py-2 text-sm text-btn-fg transition-opacity hover:opacity-85">
                <Download className="size-4" /> {t("Download CV", "Télécharger le CV")}
              </a>
            </footer>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="scroll-mt-10 pt-20 md:pt-28">
          <SectionTitle label={t("Education", "Formation")} title={t("Computer science, from Antananarivo to Nice.", "L'informatique, d'Antananarivo à Nice.")} />
          <div className="grid gap-3 md:gap-4 lg:grid-cols-2">
            {education.map((e) => (
              <div key={e.degree} className="glass flex flex-col gap-8 overflow-hidden rounded-[28px] p-6 md:p-8">
                {e.current && <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-br from-blue-500/15 via-transparent to-transparent" />}
                <div className="flex items-start justify-between gap-4">
                  {/* White tile so both logos read in dark mode too */}
                  <div className="grid h-12 min-w-12 place-items-center rounded-2xl bg-white px-3 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={e.logo} alt={e.school.split(" · ")[0]} className="h-8 w-auto object-contain" />
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs ${e.current ? "bg-blue-500/15 text-blue-600 dark:text-blue-400" : "bg-tile text-ink-2"}`}>
                    {e.status}
                  </span>
                </div>
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <div className="text-sm text-ink-3">{e.period}</div>
                    <h3 className="mt-1 text-2xl leading-tight tracking-tight md:text-3xl">{e.degree}</h3>
                    <div className="mt-2 flex items-center gap-1.5 text-sm text-ink-2">
                      <MapPin className="size-3.5" /> {e.school}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {e.tags.map((tag) => (
                        <Chip key={tag}>{tag}</Chip>
                      ))}
                    </div>
                  </div>
                  <div className="hidden shrink-0 rounded-[20px] bg-tile p-4 sm:block">
                    <IsoIllustration kind="books" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="relative isolate scroll-mt-10 pt-20 md:pt-28">
          {/* Warm light beam behind the cards so the glass has something to refract */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-40 -bottom-10 -z-10 bg-[radial-gradient(35%_55%_at_50%_60%,rgb(249_115_22/0.38),transparent_75%)] [mask-image:repeating-linear-gradient(90deg,black_0_3px,rgb(0_0_0/0.55)_3px_6px)]"
          />
          <div className="mb-8 grid gap-4 md:mb-10 lg:grid-cols-2 lg:items-end">
            <div>
              <span className="flex items-center gap-2 text-sm text-ink-2">
                <span className="size-1.5 rounded-full bg-ink" />
                {t("Selected work", "Projets")}
              </span>
              <h2 className="mt-3 text-3xl tracking-tight md:text-5xl">
                {t("Products built for real businesses and real users.", "Des produits pour de vraies entreprises et de vrais utilisateurs.")}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ink-2 lg:justify-self-end">
              {projectCount}{" "}
              {t(
                "products across FinTech, AI, ERP and developer tools — from payment platforms to open-source apps.",
                "produits en FinTech, IA, ERP et outils développeur — des plateformes de paiement aux apps open source.",
              )}
            </p>
          </div>
          <Work lang={lang} />
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-10 pt-20 pb-10 md:pt-28">
          <div className="glass grid gap-10 rounded-[32px] p-6 md:p-10 lg:grid-cols-2">
            <div className="flex flex-col justify-between gap-10">
              <div>
                <h2 className="text-4xl leading-[1.05] tracking-tight md:text-6xl">{t("Let's build something together.", "Construisons quelque chose ensemble.")}</h2>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-2">
                  {t(
                    "Open to freelance missions and full-time roles in FinTech, AI or ERP. I usually answer within a day.",
                    "Ouvert aux missions freelance et aux postes en CDI en FinTech, IA ou ERP. Je réponds généralement sous 24 h.",
                  )}
                </p>
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  { icon: Mail, text: EMAIL, href: `mailto:${EMAIL}` },
                  { icon: Phone, text: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
                  { icon: MapPin, text: "Antananarivo, Madagascar · Nice, France" },
                  { icon: Github, text: "@dinavalisoaa", href: GITHUB },
                ].map(({ icon: Icon, text, href }) => (
                  <li key={text}>
                    <a href={href} className="flex items-center gap-3 hover:opacity-70">
                      <span className="grid size-9 place-items-center rounded-lg bg-tile">
                        <Icon className="size-4" strokeWidth={1.5} />
                      </span>
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] bg-tile p-6 md:p-7">
              <ContactForm email={EMAIL} lang={lang} />
            </div>
          </div>
          <footer className="flex justify-between pt-8 text-xs text-ink-3">
            <span>© {new Date().getFullYear()} Dina Valisoa Randriamifidy</span>
            <span>dinavalisoaa.me</span>
          </footer>
        </section>
      </div>
    </div>
  );
}
