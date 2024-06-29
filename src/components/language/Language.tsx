import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { siteLanguages } from "../../constants/data";
// @ts-ignore
import useMatchMedia from "use-match-media";

const Language: FC = () => {
  const { i18n } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const isLaptop: boolean = useMatchMedia("(max-width: 768px)");
  const isMobile: boolean = useMatchMedia("(max-width: 425px)");

  const onChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsActive(false)
  };

  const cardSize = isMobile ? 60 : isLaptop ? 78 : 100;

  return (
    <div className="container fixed top-[30px] left-[50%] translate-x-[-50%] z-10">
      <div
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        style={{
          height: isActive
            ? siteLanguages.length * (cardSize + 15) - 15
            : cardSize,
        }}
        className="relative rounded-[100px] overflow-hidden flex flex-col gap-[15px] justify-start w-[100px] bg-black trans-def duration-[250ms] tb:w-[78px] bmb:w-[60px]"
      >
        {siteLanguages
          .filter((lang) => lang !== i18n.resolvedLanguage)
          .map((lang) => (
            <button
              key={lang}
              onClick={() => onChangeLanguage(lang)}
              className="group rounded-circle py-[28px] px-30 h-[100px] bg-light-gray capitalize text-[32px] leading-[45px] trans-def duration-150 hover:bg-primary tb:h-[78px] tb:text-24 tb:leading-[34px] tb:py-[21px] tb:px-[24px] bmb:h-[60px] bmb:p-[12px]"
            >
              <span className="opacity-[50%] group-hover:opacity-100 trans-def duration-150">
                {lang}
              </span>
            </button>
          ))}
        <div className="rounded-circle py-[28px] px-30 absolute left-0 right-0 bottom-0 h-[100px] bg-primary capitalize text-[32px] leading-[45px] tb:h-[78px] tb:text-24 tb:leading-[34px] tb:py-[21px] tb:px-[24px] bmb:h-[60px] bmb:p-[12px]">
          {i18n.resolvedLanguage}
        </div>
      </div>
    </div>
  );
};

export default Language;
