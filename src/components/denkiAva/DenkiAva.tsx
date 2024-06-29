import { FC } from "react";
import denkiImg from "../../assets/images/denki2.png";
import clsx from "clsx";

interface Props {
  className?: string;
}

const DenkiAva: FC<Props> = ({ className = "" }) => {
  return (
    <div
      className={clsx(
        "border-[13px] border-white rounded-circle bg-primary overflow-hidden w-[195px] h-[210px] blt:w-[176px] blt:h-[176px] blt:border-[5px] stb:w-[130px] stb:h-[130px]",
        className
      )}
    >
      <img
        src={denkiImg}
        alt="denki"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default DenkiAva;
