export type Language = "en" | "it";

export const LANGUAGE_STORAGE_KEY = "portfolio-language";

export const DEFAULT_LANGUAGE: Language = "en";

export const NAV_LABELS: Record<Language, Record<string, string>> = {
  en: {
    about: "About",
    projects: "Projects",
    contact: "Contact",
    "source-code": "Source Code",
    langSwitch: "IT",
  },
  it: {
    about: "Chi sono",
    projects: "Progetti",
    contact: "Contatti",
    "source-code": "Codice",
    langSwitch: "EN",
  },
};
