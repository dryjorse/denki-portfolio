import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useProjects } from "../../hooks/queries/useProjects";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import specializationsService from "../../services/specializationsService";
import { useTranslate } from "../../hooks/useTranslate";
import Projects from "../../components/projectsPage/projects/Projects";
import Skeleton from "../../components/ui/skeleton/Skeleton";
import BackButton from "../../components/backButton/BackButton";
import DenkiAva from "../../components/denkiAva/DenkiAva";
import bannerImg from "../../assets/images/banner.jpg";
import bannerTwoImg from "../../assets/images/banner2.png";
// @ts-ignore
import useMatchMedia from "use-match-media";

const ProjectsPage: FC = () => {
  const { t } = useTranslation();
  const translate = useTranslate();
  const { search } = useLocation();
  const isLaptop: boolean = useMatchMedia("(max-width: 768px)");
  // @ts-ignore
  const params: { specialization: any } = search
    .slice(1)
    .split("&")
    .reduce((prev, value) => {
      const values = value.split("=");
      return { ...prev, [values[0]]: values[1] };
    }, {});

  const { data: specialization } = useQuery({
    queryKey: ["specializations", params.specialization || 0],
    queryFn: () => specializationsService.getById(params.specialization || 0),
    select: ({ data }) => data,
    enabled: !!params.specialization,
  });

  const { data, isFetching } = useProjects(
    {
      limit: 30,
      specialization: specialization?.id,
    },
    null,
    !!specialization || !params.specialization
  );

  return (
    <>
      <BackButton />
      <div
        className="relative h-[510px] bg-no-repeat bg-cover bg-center tb:h-[476px]"
        style={{ backgroundImage: `url(${isLaptop ? bannerTwoImg : bannerImg})` }}
      >
        <DenkiAva className="absolute bottom-[-94px] right-[50%] translate-x-[50%] stb:bottom-[-50px]" />
      </div>
      <div className="container mt-[34px] flex justify-between items-center text-[48px] text-light-gray font-bold blt:text-[32px]">
        <div className="flex gap-[16px] items-center">
          <span>{t("portfolio")}</span>
          {!data || isFetching ? (
            <Skeleton width={72} height={72} rounded="50%" className="blt:hidden"/>
          ) : (
            <span className="border border-black rounded-circle w-[72px] h-[72px] flex justify-center items-center text-[36px] leading-[50px] blt:hidden">
              {data.results.length}
            </span>
          )}
        </div>
        {params.specialization ? (
          specialization ? (
            <span>{translate(specialization, "title")}</span>
          ) : (
            <Skeleton width={130} height={68} />
          )
        ) : (
          <span>{t("all")}</span>
        )}
      </div>
      <Projects
        projects={data?.results}
        isLoading={!data?.results || isFetching}
      />
    </>
  );
};

export default ProjectsPage;
