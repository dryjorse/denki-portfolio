import { FC } from "react";
import Skeleton from "../../ui/skeleton/Skeleton";
import clsx from "clsx";

interface Props {
  count: number;
  isLoading: boolean;
  className?: string;
}

const ProjectsCount: FC<Props> = ({ isLoading, count, className = "" }) => {
  return isLoading ? (
    <Skeleton
      width={72}
      height={72}
      className={clsx("rounded-circle", className)}
    />
  ) : (
    <span
      className={clsx(
        "border border-black rounded-circle w-[72px] h-[72px] flex justify-center items-center text-[36px] leading-[50px]",
        className
      )}
    >
      {count}
    </span>
  );
};

export default ProjectsCount;
