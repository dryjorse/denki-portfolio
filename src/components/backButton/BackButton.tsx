import { FC } from "react";
import { useNavigate } from "react-router-dom";
import arrowLeftIcon from "../../assets/images/icons/arrow-left.svg";

const BackButton: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 bottom-0 flex items-center z-[20]">
      <button
        onClick={() => navigate(-1)}
        className="rounded-[0_50px_50px_0] py-[33px] pl-[11px] pr-[25px] bg-primary trans-def duration-100 hover:pl-[15px] hover:pr-30 tb:py-[26px] tb:pl-[9px] tb:pr-[19px]"
      >
        <img
          src={arrowLeftIcon}
          alt="arrow-left"
          className="tb:w-[26px] tb:h-[19px]"
        />
      </button>
    </div>
  );
};

export default BackButton;
