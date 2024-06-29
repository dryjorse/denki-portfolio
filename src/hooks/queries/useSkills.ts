import { useQuery } from "@tanstack/react-query";
import skillsService from "../../services/skillsService";

export const useSkills = () =>
  useQuery({
    queryKey: ["skills"],
    queryFn: () => skillsService.getAll(),
    select: ({ data }) => data,
  });
