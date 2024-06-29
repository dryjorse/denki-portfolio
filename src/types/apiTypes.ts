export interface IResults<T> {
  count: number;
  results: T[];
}
interface IPagination {
  offset?: number;
  limit?: number;
}
export interface ISkill {
  id: number;
  title: string;
  icon: string;
}

export interface ISpecialization {
  id: number;
  title: string;
  icon: string;
  skills: ISkill[];
}

export interface IProjectsParams extends IPagination {
  ordering?: "date" | "-date" | "order" | "-order";
  specialization?: number;
}
export interface IProject {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  skills: ISkill[];
  specialization: number;
}
