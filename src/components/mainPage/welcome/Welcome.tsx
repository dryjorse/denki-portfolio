import { FC } from "react";
import portfolioImage from "../../../assets/images/portfolio.png";
import denkiImage from "../../../assets/images/denki.png";
import bekaIcon from "../../../assets/images/icons/beka.svg";

const Welcome: FC = () => {
  return (
    <>
      <div className="container pt-30 pb-[73px] blt:pb-0">
        <div className="text-end font-thin bmb:text-14">
          <span className="block">Web, UX-UI designer</span>
          <span>2D artist, Photo Gallery </span>
        </div>
        <div className="relative mt-[54px]">
          <img
            src={portfolioImage}
            alt="portfolio"
            className="blt:max-w-[768px] blt:mx-auto tb:max-w-[360px] bmb:max-w-[260px]"
          />
          <img
            src={denkiImage}
            alt="denki"
            className="absolute top-[-92px] z-[2] blt:max-w-[786px] blt:left-[50%] blt:translate-x-[-50%] tb:max-w-[750px] bmb:max-w-[700px]"
          />
          <div className="mt-50 mr-[-30px] flex justify-end items-start blt:mr-0 blt:justify-center">
            <img
              src={bekaIcon}
              alt="beka"
              className="mt-[-35px] blt:w-[70px] tb:w-[40px] tb:mt-[140px] bmb:max-w-[680px] bmb:mt-[130px]"
            />
            <span className="text-[300px] font-black opacity-[20%] bg-blend-hard-light mix-blend-hard-light leading-[426px] blt:text-[200px] blt:leading-[220px] tb:text-[100px] tb:leading-[460px] bmb:text-[80px]">
              Nurkas
            </span>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-gray"></div>
    </>
  );
};

export default Welcome;
