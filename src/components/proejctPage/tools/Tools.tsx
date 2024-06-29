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
    <div className="rounded-[20px] border border-black pt-[48px] pb-[34px] px-[17px] flex gap-[21px]">
      <div className="border border-black rounded-circle p-[6px] w-fit">
        <DenkiAva className="w-[195px] h-[195px] !border !border-black" />
      </div>
      <div>
        <h2 className="mb-10 text-[48px] leading-[50px] font-bold text-light-gray">
          {t("project.toolsUsed")}
        </h2>
        <div className="flex gap-[10px] flex-wrap">
          {isLoading
            ? [...new Array(2)].map((_, key) => (
                <Skeleton key={key} width={72} height={72} rounded="50%" />
              ))
            : tools?.map((tool) => (
                <img
                  src={tool.icon}
                  alt={tool.title}
                  className="rounded-circle w-[72px] h-[72px] object-cover object-center"
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
