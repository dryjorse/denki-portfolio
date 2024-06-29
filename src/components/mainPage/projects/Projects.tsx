import { FC } from "react";
import { useProjects } from "../../../hooks/queries/useProjects";
import { months } from "../../../constants/data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTranslate } from "../../../hooks/useTranslate";
import Skeleton from "../../ui/skeleton/Skeleton";

const ProjectSkeleton: FC = () => (
  <div>
    <Skeleton width="100%" height={565} />
    <div className="container mt-50 flex justify-between blt:flex-col blt:items-center">
      <div>
        <Skeleton width={423} height={80}/>
        <Skeleton width={388} height={80} className="mt-10 blt:mx-auto" />
      </div>
      <div className="pt-[26px]">
        <Skeleton width={221} height={57} className="blt:mx-auto"/>
        <Skeleton width={560} height={90} className="mt-10 mb-50" />
        <Skeleton width={560} height={3} />
      </div>
    </div>
  </div>
);

const Projects: FC = () => {
  const { t } = useTranslation();
  const translate = useTranslate();
  const { data: projects } = useProjects(
    { limit: 2, ordering: "-date" },
    "recent-projects"
  );

  const dateFormat = (date: string) => {
    const dateArray = date.split("-");
    return `${t(`months.${months[+dateArray[1] - 1]}`).slice(0, 3)}${
      dateArray[2]
    }, ${dateArray[0]}`;
  };

  return (
    <div className="pt-[126px] pb-[160px] border-gray border-b blt:border-none blt:pb-0">
      <h2 className="container mb-[128px] uppercase tb:mb-50">
        {t("projects.myLatest")}{" "}
        <span className="title-help">{t("projects.project")}</span>
      </h2>
      <ul className="[&>:not(:last-child)]:mb-[170px]">
        {projects
          ? projects.results?.map((project) => (
              <li key={project.id}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="block w-full h-[565px] object-cover object-top"
                />
                <div className="container mt-50 relative flex justify-between items-end blt:flex-col blt:items-center blt:pt-50">
                  <h3 className="flex-[0_1_450px] text-[64px] leading-[90px] font-extrabold blt:flex-auto tb:text-[40px]">
                    {translate(project, "title")}
                  </h3>
                  <div className="flex-[0_1_570px] text-light-gray blt:flex-auto blt:text-center">
                    <span className="text-[40px] font-bold leading-[56px]">
                      {dateFormat(project.date)}
                    </span>
                    <p className="text-[32px] font-light leading-[45px] tb:text-24">
                      {translate(project, "description")}
                    </p>
                  </div>
                  <Link
                    to={`/projects/${project.id}`}
                    className="rounded-circle border-[10px] border-white absolute top-[-130px] right-[90px] w-[160px] h-[160px] flex justify-center items-center bg-primary text-center text-24 text-white blt:right-[50%] blt:translate-x-[50%] tb:w-[131px] tb:h-[131px] tb:text-[20px]"
                  >
                    {t("projects.view")}
                  </Link>
                </div>
                <div className="container mt-50 flex justify-end">
                  <div className="flex-[0_1_570px] h-[1px] bg-gray blt:flex-auto"></div>
                </div>
              </li>
            ))
          : [...new Array(2)].map((_, key) => <ProjectSkeleton key={key} />)}
      </ul>
    </div>
  );
};

export default Projects;
