import { $api } from "../constants/api";
import { IProject, IProjectsParams, IResults } from "../types/apiTypes";

class ProjectService {
  getAll(params?: IProjectsParams) {
    return $api<IResults<IProject>>("projects/", {
      params,
    });
  }
  getById(id: number) {
    return $api<IProject>(`projects/${id}/`);
  }
}

export default new ProjectService();
