import { FC } from "react";
import Welcome from "../../components/mainPage/welcome/Welcome";
import About from "../../components/mainPage/about/About";
import Projects from "../../components/mainPage/projects/Projects";
import Specializations from "../../components/mainPage/specializations/Specializations";

const MainPage: FC = () => {
  return (
    <>
      <Welcome />
      <About />
      <Projects />
      <Specializations />
    </>
  );
};

export default MainPage;
