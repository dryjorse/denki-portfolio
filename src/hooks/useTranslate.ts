import { useTranslation } from "react-i18next";

export const useTranslate = () => {
  const { i18n } = useTranslation();

  const translate = (object: { [key: string]: any }, key: string) => {
    return object[key + "_" + i18n.resolvedLanguage] || object[key + "_en"];
  };

  return translate;
};
