export type Language = "en" | "it";

export const LANGUAGE_STORAGE_KEY = "portfolio-language";

export const DEFAULT_LANGUAGE: Language = "en";

export const NAV_LABELS: Record<Language, Record<string, string>> = {
  en: {
    about: "About",
    work: "Work",
    contact: "Contact",
    "source-code": "Source Code",
    langSwitch: "IT",
  },
  it: {
    about: "Chi sono",
    work: "Progetti",
    contact: "Contatti",
    "source-code": "Codice",
    langSwitch: "EN",
  },
};
