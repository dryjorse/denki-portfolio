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
    <div className="border border-black rounded-[20px] pt-[27px] px-[22px] pb-[33px] flex-[0_1_568px] blt:flex-auto tb:px-10">
      <h2 className="mb-60 font-bold text-[64px] leading-[70px] text-center blt:leading-[45px] blt:mb-20 tb:text-[32px] tb:text-light-gray">
        {t("project.other")}
      </h2>
      <div className="flex gap-[4px] flex-wrap tb:justify-center">
        {isFetching || !data
          ? [...new Array(6)].map((_, key) => (
              <div key={key} className="w-[170px] h-[115px] bmb:w-full">
                <Skeleton
                  width="100%"
                  height="100%"
                  className="rounded-[12px]"
                />
              </div>
            ))
          : projects?.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}/`}
                className="bmb:w-full"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-[12px] w-[170px] h-[115px] object-cover object-center bmb:w-full"
                />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Other;
