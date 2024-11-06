import type { FC } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Heart from "../../../public/images/heart.png";
import Telefon from "../../../public/images/telefon.png";
import PlayStore from "../playStore";

const Main: FC = () => {
  const t = useTranslations();
  return (
    <main className="w-[90%] m-auto">
      <div className="flex max-md:flex-wrap mb-[120px]">
        <div className="w-[550px] mr-10">
          <h2 className="text-[38px] font-bold">{t("mainTitle")}</h2>
        </div>
        <div className="max-md:mt-4">
          <div className="flex max-lg:flex-wrap bg-mainBoxRgb p-6 rounded-[24px]">
            <div className="max-w-[482px]">
              <h2 className="leading-[32px] text-[24px] font-bold">{t("mainFirst.title")}</h2>
              <p className="leading-[27px] text-[20px] font-medium mt-4">
                {t("mainFirst.description")}
              </p>
            </div>
            <Image
              className="min-w-[156px] h-[121px] m-auto"
              src={Heart}
              alt="Heart"
            />
          </div>
          <div className="bg-mainBoxRgb p-6 rounded-[24px] mt-5">
            <h2 className="leading-[32px] text-[24px] font-bold">{t("mainSecond.title")}</h2>
            <p className="max-w-[482px] leading-[27px] text-[20px] font-medium mt-4">
              {t("mainSecond.description")}
            </p>
          </div>
          <div className="bg-mainBoxRgb p-6 rounded-[24px] mt-5">
            <h2 className="leading-[32px] text-[24px] font-bold">{t("mainThird.title")}</h2>
            <p className="max-w-[482px] leading-[27px] text-[20px] font-medium mt-4">
              {t("mainThird.description")}
            </p>
          </div>
        </div>
      </div>

      <PlayStore />

      <div className="bg-mainBoxRgb my-20 px-10 pt-10 rounded-[32px] flex max-md:flex-col justify-between">
        <div className="py-6">
          <h2 className="leading-[44px] text-[48px] font-bold mt-8">
            {t("mainBottom.title")}
          </h2>
          <p className="text-mainP leading-[33.6px] mt-[24px] text-[24px] font-medium ">
            {t("mainBottom.description")} <br />
            {t("mainBottom.description2")} <br />
            {t("mainBottom.description3")}
          </p>
        </div>

        <Image
          className="mr-6"
          src={Telefon}
          alt="Telefon"
        />
      </div>
    </main>
  );
};

export default Main;
