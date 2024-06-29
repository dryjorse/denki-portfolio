import { FC } from "react";
import { useSpecializations } from "../../../hooks/queries/useSpecializations";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTranslate } from "../../../hooks/useTranslate";
import Skeleton from "../../ui/skeleton/Skeleton";

const SpecializationSkeleton: FC = () => (
  <div>
    <Skeleton width={163} height={303} className="mb-[58px]" rounded={73} />
    <Skeleton width={175} height={60} />
  </div>
);

const Specializations: FC = () => {
  const { t } = useTranslation();
  const translate = useTranslate();
  const { data } = useSpecializations();

  return (
    <>
      <div className="container pt-[130px] pb-[180px] tb:pt-100 tb:pb-[135px]">
        <div className="flex uppercase italic gap-[50px] ublt:flex-col ublt:gap-[30px] tb:gap-[20px]">
          <h2>
            {t("specializations.service")}{" "}
            <span className="title-help">{t("specializations.contents")}</span>
          </h2>
          <div className="flex-[0_0_5px] h-[190px] bg-black rotate-[21.77deg] ublt:hidden"></div>
          <h2>
            <span className="title-help pl-[63px] ublt:pl-0">
              {t("specializations.my")}
            </span>{" "}
            {t("specializations.works")}
          </h2>
        </div>
        <div className="mt-[130px] flex gap-[100px] gap-y-[50px] flex-wrap blt:justify-center tb:mt-[75px]">
          {data
            ? data.map((spec) => (
                <Link
                  to={`/projects/?specialization=${spec.id}`}
                  key={spec.id}
                  className="group"
                >
                  <div className="mb-[58px] rounded-[73px] w-[163px] h-[300px] bg-primary tb:mb-[38px]">
                    <div className="w-[calc(100%+50px)] h-full flex items-center overflow-hidden">
                      <img
                        src={spec.icon}
                        alt={spec.title}
                        className="ml-[-30px] trans-def group-hover:ml-[0px]"
                      />
                    </div>
                  </div>
                  <span className="max-w-[185px] block text-[64px] font-extrabold text-light-gray text-center trans-def group-hover:text-black tb:text-[40px]">
                    {translate(spec, "title")}
                  </span>
                </Link>
              ))
            : [...new Array(4)].map((_, key) => (
                <SpecializationSkeleton key={key} />
              ))}
        </div>
      </div>
      <div className="h-[1px] bg-gray"></div>
    </>
  );
};

export default Specializations;
