import MainPage from "../pages/mainPage/MainPage";
import ProjectPage from "../pages/projectPage/ProjectPage";
import ProjectsPage from "../pages/projectsPage/ProjectsPage";

export const routes = [
  { path: "/", element: <MainPage /> },
  { path: "/projects", element: <ProjectsPage /> },
  { path: "/projects/:id", element: <ProjectPage /> },
];
