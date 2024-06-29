import { useQuery } from "@tanstack/react-query";
import specializationsService from "../../services/specializationsService";

export const useSpecializations = () =>
  useQuery({
    queryKey: ["specializations"],
    queryFn: () => specializationsService.getAll(),
    select: ({ data }) => data,
  });
