import { Locale } from "@/types";

export const localeToLabel: { [T in Locale]: string } = {
  en: "English",
  ja: "日本語",
} as const;
