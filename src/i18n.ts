import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // @ts-ignore
    lng: localStorage.getItem("selectedLanguage"),
    fallbackLng: "en",

    debug: false,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/denki-portfolio/locales/{{lng}}/translation.json",
    },
  });

export default i18n;
