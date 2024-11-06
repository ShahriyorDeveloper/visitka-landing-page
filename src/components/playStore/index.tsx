import type { FC } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import qrCode from "../../../public/images/qr_code.png";
import playStore from "../../../public/images/play_store.png";
import logo from "../../../public/images/play_store_logo.png";
import iPhone_1 from "../../../public/images/iPhone_1.png";
import iPhone_2 from "../../../public/images/iPhone_2.png";

const PlayStore: FC = () => {
  const t = useTranslations();

  return (
    <div className="bg-mainBoxRgb my-10 px-10 pt-10 rounded-[32px] flex max-md:flex-col justify-between items-center">
      <div>
        <h2 className="leading-[48px] text-[32px] font-semibold">
          {t("playStore.title")} <br /> {t("playStore.title2")}
        </h2>
        <div className="flex items-center my-[24px]">
          <Image className="mr-6" src={qrCode} alt="qrCode" />
          <span className="leading-[21.86px] text-[16px] font-medium">
            {t("playStore.description")} <br /> {t("playStore.description2")}
          </span>
        </div>
        <Link href="/playstore">
          <Image className="mr-6 mt-6" src={playStore} alt="playStore" />
        </Link>
      </div>
      <div className="bg-mainBg_1 relative md:w-[400px] sm:w-[340px]">
        <Image
          className="absolute bottom-32 right-28 z-20"
          src={logo}
          alt="logo"
        />
        <Image
          className="relative bottom-0 right-26 z-10"
          src={iPhone_1}
          alt="iPhone_1"
        />
        <Image
          className="absolute bottom-0 right-3 z-5"
          src={iPhone_2}
          alt="iPhone_2"
        />
      </div>
    </div>
  );
};

export default PlayStore;
