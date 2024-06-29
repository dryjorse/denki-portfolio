import { FC } from "react";
import { IProject } from "../../../types/apiTypes";
import { Link } from "react-router-dom";
import Skeleton from "../../ui/skeleton/Skeleton";

interface Props {
  projects?: IProject[];
  isLoading: boolean;
}

const Projects: FC<Props> = ({ projects, isLoading }) => {
  return (
    <>
      <div className="container pt-[27px] pb-[120px] stb:px-0">
        <div className="mb-[8px] flex flex-wrap gap-[8px] justify-between blt:flex-col">
          {isLoading
            ? [...new Array(3)].map((_, key) => (
                <Skeleton key={key} width={375} height={290} rounded={22} />
              ))
            : projects!.slice(0, 3).map((project) => (
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
                <Skeleton key={key} width={280} height={190} rounded={22} className="blt:max-w-full" />
              ))
            : projects!.slice(3).map((project) => (
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
