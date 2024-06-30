import { FC } from "react";
import { ISkill } from "../../../types/apiTypes";
import DenkiAva from "../../denkiAva/DenkiAva";
import { useTranslation } from "react-i18next";
import Skeleton from "../../ui/skeleton/Skeleton";

interface Props {
  tools?: ISkill[];
  isLoading: boolean;
}

const Tools: FC<Props> = ({ tools, isLoading }) => {
  const { t } = useTranslation();

  return (
    <div className="rounded-[20px] border border-black pt-[48px] pb-[34px] px-[17px] flex gap-[21px] tb:items-center blt:py-[27px] bmb:flex-col">
      <div className="border border-black rounded-circle p-[6px] w-fit tb:border-none tb:p-0">
        <DenkiAva className="w-[195px] h-[195px] !border !border-black" />
      </div>
      <div>
        <h2 className="mb-10 text-[48px] leading-[50px] font-bold text-light-gray tb:text-[32px] tb:mb-[3px]">
          {t("project.toolsUsed")}
        </h2>
        <div className="flex gap-[10px] flex-wrap tb:gap-[6px]">
          {isLoading
            ? [...new Array(2)].map((_, key) => (
                <div
                  key={key}
                  className="w-[72px] h-[72px] tb:w-[47px] tb:h-[47px]"
                >
                  <Skeleton
                    width="100%"
                    height="100%"
                    className="rounded-circle"
                  />
                </div>
              ))
            : tools?.map((tool) => (
                <img
                  key={tool.id}
                  src={tool.icon}
                  alt={tool.title}
                  className="rounded-circle w-[72px] h-[72px] object-cover object-center tb:w-[47px] tb:h-[47px]"
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
