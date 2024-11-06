import type { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import MenuBar from "../../../public/svgs/menu_bar.svg";
import Logo from "../../../public/svgs/logo.svg";
import Travel_img from "../../../public/images/travel_img.png";
import News from "../../../public/images/news.png";
import Header_home from "../../../public/images/header_home.png";
import LocalSwitcher from "../local-switcher";

const Header: FC = () => {
  const t = useTranslations();

  return (
    <header>
      <nav className="shadow-[0px_4px_12px_0px_#0000000F] fixed z-30 top-0 bg-white left-0 right-0 w-full ">
        <div className="w-[90%] m-auto flex items-center h-[73px] justify-between">
          <div className="flex items-center">
            <Image
              className="mr-6"
              src={MenuBar}
              alt="menubar"
            />
            <Image src={Logo} alt="logo" />
          </div>
          <div>
            <LocalSwitcher />
            <button className="leading-[19.6px] ml-3 text-white text-[14px] w-[138px] h-[40px] rounded-[12px] bg-gradient-to-tl from-buttoBgLeft to-buttoBgRight">
              {t("registrationBtn.title")}
            </button>
          </div>
        </div>
      </nav>
      <div className="lg:grid grid-cols-12 sm:flex sm:flex-wrap w-[90%] m-auto mt-28 mb-[120px] gap-x-[10px]">
        <div className="col-start-1 col-end-9 lg:mb-0 box-border mb-0 sm:mb-3 md:mb-3">
          <div className="md:flex lg:flex-row bg-headerBlock1 md:flex-row sm:flex-col rounded-[20px] px-10 py-16 ">
            <div>
              <h1 className="leading-10 text-[29px] font-bold">
                {t("headerBlock1.title")}
              </h1>
              <p className="leading-[30px] text-[20px] mt-[24px]">
                {t("headerBlock1.description")}
              </p>
            </div>
            <Image src={Travel_img} alt="travel_img" />
          </div>
          <div className="lg:grid grid-cols-12 msx-sm:flex sm:flex-wrap gap-x-[10px]">
            <div className="col-start-1 col-end-8 bg-headerBlock2 mt-[10px] rounded-[20px] p-4">
              <h2 className="leading-[38.25px] text-[28px] text-white font-bold">
                {t("headerBlock3.title")}
              </h2>
              <p className="leading-[16.39px] text-[12px] text-white font-medium mt-3">
                {t("headerBlock3.description")}
              </p>

              <p className="leading-[16.39px] text-[12px] text-white font-medium mt-3">
                {t("headerBlock3.description2")}
              </p>
              <p className="leading-[16.39px] text-[12px] text-white font-medium mt-3">
                {t("headerBlock3.description3")}
              </p>
              <p className="leading-[16.39px] text-[12px] text-white font-medium mt-3">
                {t("headerBlock3.description4")}
              </p>
            </div>
            <div className="col-start-8 col-end-13 bg-headerBlock3 mt-[10px] rounded-[20px] p-4 ">
              <h2 className="leading-[21.86px] text-[16px] font-bold text-white">
                {t("headerBlock4.title")}
              </h2>
              <p className="leading-[19.12px] text-[12px] font-normal text-white mt-3">
                {t("headerBlock4.description")}
              </p>
              <div className="flex justify-center">
                <Image
                  className="text-center"
                  src={News}
                  alt="news img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-9 col-end-13 bg-headerBlock4 rounded-[20px] p-7 mt-0  max-sm:mt-3">
          <h2 className="leading-[38.25px] text-[24px] text-white font-bold">
            {t("headerBlock2.title")}
          </h2>
          <p className="leading-[30px] text-[19px] text-textRgb font-medium mt-3 ">
            {t("headerBlock2.description")}
          </p>
          <Image
            className="mt-12"
            src={Header_home}
            alt="home img"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
