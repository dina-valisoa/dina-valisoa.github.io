// Two languages, written side by side at each call site: t("Hello", "Bonjour").
export type Lang = "en" | "fr";

export const tr = (lang: Lang) => (en: string, fr: string) => (lang === "fr" ? fr : en);
