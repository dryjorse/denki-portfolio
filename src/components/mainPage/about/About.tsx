import { FC } from "react";
import hdIcon from "../../../assets/images/icons/hd.svg";
import denkiImage from "../../../assets/images/denki2.png";
import { languages } from "../../../constants/data";
import { useSkills } from "../../../hooks/queries/useSkills";
import { useSpecializations } from "../../../hooks/queries/useSpecializations";
import { useTranslation } from "react-i18next";
import { useTranslate } from "../../../hooks/useTranslate";
import Skeleton from "../../ui/skeleton/Skeleton";

const About: FC = () => {
  const { data: skills } = useSkills();
  const { data: specializations } = useSpecializations();
  const { t } = useTranslation();
  const translate = useTranslate();

  return (
    <>
      <div className="pt-[42px] pb-[92px] container blt:pt-90">
        <div className="flex justify-between items-center blt:flex-col blt:gap-[90px]">
          <div className="relative rounded-[32px] pt-[45px] px-[28px] pb-20 bg-black">
            <img
              src={hdIcon}
              alt="HD"
              className="absolute top-[-23px] right-[-27px] w-[150px] h-[63px]"
            />
            <div className="rounded-[32px] border border-primary py-[12px] px-[14px] bg-black bg-blend-luminosity">
              <div className="relative rounded-[32px] bg-[linear-gradient(180deg,#E08932_0%,#FFB162_100%)] w-[360px] h-[450px] flex items-end before:absolute before:w-full before:top-[100px] before:bottom-0 before:bg-[linear-gradient(180deg,rgba(196,196,196,0)_0%,#111111_100%)] before:opacity-[80%] blt:w-[300px] blt:h-[360px] blt:justify-center bmb:h-[300px] bmb:max-w-[240px] amb:h-[260px] amb:w-[200px]">
                <img src={denkiImage} alt="denki" className="blt:h-full" />
              </div>
            </div>
            <strong className="my-10 block text-[48px] text-white font-bold text-center leading-[43px]">
              {t("beka")}
            </strong>
          </div>
          <div className="flex-[0_1_560px] text-[24px] font-light blt:text-center blt:flex-auto">
            <h2 className="text-[48px] leading-[68px] font-bold">
              <span className="text-[38px]">{t("about.iAm")}</span>{" "}
              {t("about.name")}
            </h2>
            <span className="block mb-[23px] text-primary leading-[34px] italic">
              {specializations ? (
                specializations.map(
                  (spec, key) =>
                    `${key > 0 ? " / " : ""}${translate(spec, "title")}`
                )
              ) : (
                <Skeleton width={463} height={34} />
              )}
            </span>
            <p className="bmb:text-start">
              Lorem ipsum dolor sit amet consectetur. Sit ultrices cursus in
              pellentesque sed mauris at adipiscing odio. Purus vitae
              scelerisque leo ullamcorper. Accumsan et maecenas ullamcorper eget
              sed nunc. Sed{" "}
            </p>
            <h3 className="mt-[29px] mb-[23px] text-[48px] leading-[68px]">
              <span className="text-[38px]">{t("about.software")}</span>{" "}
              {t("about.skills")}
            </h3>
            <div className="flex gap-[8px] items-center flex-wrap blt:justify-center">
              {skills
                ? skills.map((skill) => (
                    <img
                      key={skill.id}
                      src={skill.icon}
                      alt={skill.title}
                      className="rounded-circle w-[86px] h-[84px]"
                    />
                  ))
                : [...new Array(3)].map((_, key) => (
                    <Skeleton key={key} width={86} height={84} rounded="50%" />
                  ))}
            </div>
          </div>
        </div>
        <div className="mt-40 flex justify-between blt:flex-col blt:text-center blt:mt-[100px]">
          <div>
            <h3 className="mb-[23px] leading-[90px] text-[64px] blt:mb-30 tb:text-[40px]">
              {t("about.language")}
            </h3>
            <ul className="blt:flex blt:gap-[11px] blt:justify-center blt:flex-wrap">
              {languages.map((language, key) => (
                <li
                  key={key}
                  className="text-[24px] leading-[34px] text-light-gray"
                >
                  {t(`about.languages.${language}`)}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-[0_1_560px] blt:flex-auto blt:mt-[150px]">
            <h3 className="mb-[23px] leading-[90px] text-[64px] tb:text-[40px]">
              {t("about.skills")}
            </h3>
            <div className="flex gap-x-[70px] gap-y-[30px] flex-wrap blt:justify-center">
              {specializations
                ? specializations.map((spec) => (
                    <div key={spec.id} className="text-light-gray">
                      <h4 className="mb-10 border-gray border-b pb-10 text-[32px] font-medium leading-[35px] ">
                        {translate(spec, "title")}
                      </h4>
                      {spec.skills.map((skill) => (
                        <span
                          key={skill.id}
                          className="block text-24 leading-[34px] whitespace-nowrap"
                        >
                          -{translate(skill, "title")}
                        </span>
                      ))}
                    </div>
                  ))
                : [...new Array(3)].map((_, key) => (
                    <div key={key}>
                      <Skeleton
                        key={key}
                        width={122}
                        height={38}
                        className="mb-10"
                      />
                      {[...new Array(3)].map((_, key) => (
                        <Skeleton
                          key={key}
                          width={112}
                          height={34}
                          className="mb-[5px]"
                        />
                      ))}
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-gray"></div>
    </>
  );
};

export default About;
