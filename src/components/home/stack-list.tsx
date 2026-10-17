// Stack as a compact list: one thin line per group, small monochrome logos that take colour on hover.
// Daily drivers are simply darker text.

import { type Lang, tr } from "./lang";

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const S = "https://cdn.simpleicons.org";

type Item = { name: string; logo?: string; core?: boolean };

function groups(lang: Lang): { name: string; items: Item[] }[] {
  const t = tr(lang);
  return [
    {
      name: "Backend",
      items: [
        { name: "Java", logo: `${D}/java/java-original.svg`, core: true },
        { name: "Spring Boot", logo: `${D}/spring/spring-original.svg`, core: true },
        { name: "FastAPI", logo: `${D}/fastapi/fastapi-original.svg`, core: true },
        { name: "Hibernate", logo: `${D}/hibernate/hibernate-original.svg` },
        { name: "Laravel", logo: `${D}/laravel/laravel-original.svg` },
        { name: "PHP", logo: `${D}/php/php-original.svg` },
      ],
    },
    {
      name: "Frontend",
      items: [
        { name: "TypeScript", logo: `${D}/typescript/typescript-original.svg`, core: true },
        { name: "React", logo: `${D}/react/react-original.svg`, core: true },
        { name: "Next.js", logo: `${S}/nextdotjs`, core: true },
        { name: "JavaScript", logo: `${D}/javascript/javascript-original.svg` },
        { name: "Tauri", logo: `${D}/tauri/tauri-original.svg` },
      ],
    },
    {
      name: t("Data", "Données"),
      items: [
        { name: "PostgreSQL", logo: `${D}/postgresql/postgresql-original.svg`, core: true },
        { name: "MySQL", logo: `${D}/mysql/mysql-original.svg` },
        { name: "Oracle", logo: `${D}/oracle/oracle-original.svg` },
        { name: "MongoDB", logo: `${D}/mongodb/mongodb-original.svg` },
        { name: "SQLite", logo: `${D}/sqlite/sqlite-original.svg` },
      ],
    },
    {
      name: t("AI", "IA"),
      items: [{ name: "Python", logo: `${D}/python/python-original.svg`, core: true }, { name: t("LLM agents", "Agents LLM") }, { name: "OCR" }, { name: "YOLOv8" }],
    },
    {
      name: "DevOps",
      items: [
        { name: "Docker", logo: `${D}/docker/docker-original.svg` },
        { name: "GitLab CI", logo: `${D}/gitlab/gitlab-original.svg` },
        { name: "Maven", logo: `${D}/maven/maven-original.svg` },
        { name: "npm", logo: `${D}/npm/npm-original-wordmark.svg` },
        { name: "AWS", logo: `${D}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
        { name: "Liquibase", logo: `${S}/liquibase` },
      ],
    },
    {
      name: t("Automation", "Automatisation"),
      items: [{ name: "n8n", logo: `${S}/n8n` }, { name: "Kafka", logo: `${D}/apachekafka/apachekafka-original.svg` }, { name: t("REST APIs", "API REST") }],
    },
    {
      name: t("Cybersecurity", "Cybersécurité"),
      items: [{ name: "Linux", logo: `${D}/linux/linux-original.svg` }, { name: "OWASP Top 10" }, { name: "Sentry", logo: `${S}/sentry` }],
    },
    {
      name: t("Payment Integration", "Intégration de paiement"),
      items: [
        // MVola has no Simple Icons entry; its site favicon is the only public logo source
        { name: "MVola", logo: "https://www.google.com/s2/favicons?domain=mvola.mg&sz=64" },
        { name: "Airtel Money", logo: `${S}/airtel` },
        { name: "Orange Money", logo: `${S}/orange` },
        { name: "CyberSource" }, { name: "Visa", logo: `${S}/visa` }, { name: "Mastercard", logo: `${S}/mastercard` }],
    },
    {
      name: t("Project Management", "Gestion de projet"),
      items: [{ name: "Odoo ERP", logo: `${S}/odoo` }, { name: "Scrum" }, { name: t("Mentoring", "Mentorat") }],
    },
    {
      name: t("Tools", "Outils"),
      items: [
        { name: "Git", logo: `${D}/git/git-original.svg` },
        { name: "VS Code", logo: `${D}/vscode/vscode-original.svg` },
        { name: "JetBrains", logo: `${D}/jetbrains/jetbrains-original.svg` },
        { name: "Postman", logo: `${D}/postman/postman-original.svg` },
        { name: "DBeaver", logo: `${D}/dbeaver/dbeaver-original.svg` },
      ],
    },
  ];
}


export function StackList({ lang }: { lang: Lang }) {
  return (
    <dl className="grid gap-x-10 lg:grid-cols-2">
      {groups(lang).map((g) => (
        <div key={g.name} className="flex gap-3 border-t border-line py-2 first:border-t-0 sm:gap-4 lg:[&:nth-child(2)]:border-t-0">
          <dt className="w-20 shrink-0 pt-px text-xs text-ink-3 sm:w-28">{g.name}</dt>
          <dd className="flex flex-wrap gap-x-2.5 gap-y-1 text-xs">
            {g.items.map((it) => (
              <span key={it.name} className={`group/item flex items-center gap-1.5 ${it.core ? "font-medium text-ink" : "text-ink-2"}`}>
                {it.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={it.logo}
                    alt=""
                    loading="lazy"
                    className="hidden size-3.5 object-contain opacity-60 grayscale sm:block transition group-hover/item:opacity-100 group-hover/item:grayscale-0 dark:invert dark:group-hover/item:invert-0"
                  />
                )}
                {it.name}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
