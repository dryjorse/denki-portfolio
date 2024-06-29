import { FC } from "react";
import denkiImage from "../../assets/images/denki-bottom.png";
import telegramIcon from "../../assets/images/icons/telegram.svg";
import deviantArtIcon from "../../assets/images/icons/deviantart.svg";
import gmailIcon from "../../assets/images/icons/gmail.svg";
import vkIcon from "../../assets/images/icons/vk.svg";
import pinterestIcon from "../../assets/images/icons/pinterest.svg";
import v3Icon from "../../assets/images/icons/v3.svg";
import { useTranslation } from "react-i18next";

const Contacts: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-[42px]">
      <h2 className="container mb-[224px] text-[128px] text-center font-extrabold tracking-[25px] leading-[180px] uppercase blt:text-[80px] blt:tracking-[15px] blt:mb-[130px] tb:text-[60px] stb:text-[40px] stb:tracking-[5px]">
        {t("contacts.contacts")}
      </h2>
      <div className="relative bg-black h-[985px] blt:h-[600px] bmb:h-[400px]">
        <div className="absolute top-[-62px] left-[50%] translate-x-[-50%] w-[838px] blt:w-[560px] blt:*:w-[100px] tb:w-[430px] tb:*:translate-y-[-90px] bmb:w-[320px] bmb:*:w-[80px]">
          <img src={denkiImage} alt="denki" className="!w-full !translate-y-0"/>
          <a
            href="https://t.me/Bene_Ga22"
            target="_blank"
            className="absolute top-[321px] right-[98px] blt:top-[200px] blt:!w-[70px] z-[-1] tb:right-[50px] bmb:!w-[60px] bmb:right-[30px]"
          >
            <img src={telegramIcon} alt="telegram" />
          </a>
          <a
            href=""
            target="_blank"
            className="absolute  top-[385px] right-[-74px] blt:!w-[70px] blt:top-[300px] blt:right-[0px] bmb:!w-[60px]"
          >
            <img src={deviantArtIcon} alt="deviant-art" />
          </a>
          <a
            href=""
            target="_blank"
            className="absolute top-[591px] right-[67px] blt:top-[430px] bmb:top-[390px]"
          >
            <img src={gmailIcon} alt="gmail" />
          </a>
          <a
            href=""
            target="_blank"
            className="absolute top-[295px] left-[84px] blt:top-[200px] blt:left-[40px] bmb:left-[0px]"
          >
            <img src={vkIcon} alt="vk" />
          </a>
          <a
            href=""
            target="_blank"
            className="absolute top-[338px] left-[-135px] blt:left-[-30px] blt:top-[300px]"
          >
            <img src={pinterestIcon} alt="pinterest" />
          </a>
          <a
            href=""
            target="_blank"
            className="absolute top-[468px] left-[-119px] blt:!w-[140px] blt:top-[420px] blt:left-[50px] bmb:!w-[120px] bmb:top-[360px]"
          >
            <img src={v3Icon} alt="v3" />
          </a>
        </div>
      </div>
      <div className="bg-black pb-[131px] bmb:pb-80">
        <span className="block mx-auto max-w-[838px] text-[130px] font-black leading-[100%] text-center text-primary uppercase blt:text-[80px] blt:tracking-[15px] tb:text-[60px] stb:text-[40px] stb:tracking-[5px]">
          {t("contacts.project")}
        </span>
      </div>
    </div>
  );
};

export default Contacts;
