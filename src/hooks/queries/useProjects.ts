import { useQuery } from "@tanstack/react-query";
import projectService from "../../services/projectService";
import { IProjectsParams } from "../../types/apiTypes";

export const useProjects = (
  params?: IProjectsParams,
  key?: string | null,
  enabled?: boolean
) =>
  useQuery({
    queryKey: [key || "projects"],
    queryFn: () => projectService.getAll(params),
    select: ({ data }) => data,
    enabled: typeof enabled !== undefined ? enabled : true,
  });
