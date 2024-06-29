import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useProjects } from "../../../hooks/queries/useProjects";
import { Link } from "react-router-dom";
import Skeleton from "../../ui/skeleton/Skeleton";

interface Props {
  id: number;
  spec?: number;
}

const Other: FC<Props> = ({ id, spec }) => {
  const { t } = useTranslation();

  const { data, isFetching } = useProjects(
    { limit: 7, specialization: spec },
    "other-projects",
    !!spec
  );

  const projects = data?.results
    .filter((project) => project.id !== id)
    .slice(0, 6);

  return (
    <div className="border border-black rounded-[20px] pt-[27px] px-[22px] pb-[33px] flex-[0_1_568px]">
      <h2 className="mb-60 font-bold text-[64px] leading-[70px] text-center">
        {t("project.other")}
      </h2>
      <div className="flex gap-[4px] flex-wrap">
        {isFetching || !data
          ? [...new Array(6)].map((_, key) => (
              <Skeleton key={key} width={170} height={115} rounded={12} />
            ))
          : projects?.map((project) => (
              <Link to={`/projects/${project.id}/`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-[12px] w-[170px] h-[115px] object-cover object-center"
                />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Other;
