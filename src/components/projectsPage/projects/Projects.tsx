import { FC } from "react";
import { IProject, IResults } from "../../../types/apiTypes";
import { Link } from "react-router-dom";
import Skeleton from "../../ui/skeleton/Skeleton";
import ProjectsCount from "../projectsCount/ProjectsCount";

interface Props {
  data?: IResults<IProject>;
  isLoading: boolean;
}

const Projects: FC<Props> = ({ data, isLoading }) => {
  return (
    <>
      <div className="container relative pt-[27px] pb-[120px] stb:px-0 blt:pt-40">
        <ProjectsCount
          isLoading={isLoading}
          count={data?.count!}
          className="hidden absolute left-[48px] translate-y-[-50%] w-[66px] h-[66px] bg-white font-bold text-light-gray blt:flex"
        />
        <div className="mb-[8px] flex flex-wrap gap-[8px] justify-between blt:flex-col">
          {isLoading
            ? [...new Array(3)].map((_, key) => (
                <div
                  key={key}
                  className="w-[375px] h-[290px] blt:w-full stb:h-[260px]"
                >
                  <Skeleton
                    width="100%"
                    height="100%"
                    className="rounded-[22px] stb:rounded-none"
                  />
                </div>
              ))
            : data!.results!.slice(0, 3).map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="rounded-[22px] max-w-[375px] w-full h-[290px] overflow-hidden blt:max-w-full stb:rounded-none stb:h-[260px]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                </Link>
              ))}
        </div>
        <div className="gap-[8px] grid grid-cols-4 blt:grid-cols-2 stb:grid-cols-1">
          {isLoading
            ? [...new Array(8)].map((_, key) => (
                <div
                  key={key}
                  className="w-[280px] h-[190px] blt:w-full stb:h-[260px]"
                >
                  <Skeleton
                    width="100%"
                    height="100%"
                    className="rounded-[22px] stb:rounded-none"
                  />
                </div>
              ))
            : data!.results!.slice(3).map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="rounded-[22px] max-w-[280px] w-full h-[190px] overflow-hidden blt:max-w-full stb:rounded-none stb:h-[260px]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                </Link>
              ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
