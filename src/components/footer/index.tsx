import Image from "next/image";
import type { FC } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Logo from "../../../public/svgs/logo.svg";

const Footer: FC = () => {
  const t = useTranslations();
  return (
    <div className="bg-cardsMainBg">
      <div className="w-[90%] m-auto ">
        <div className="flex justify-between items-center max-md:flex-wrap">
          <div className="my-16 max-md:text-center">
            <Image src={Logo} alt="logo" />

            <ul className="mt-8">
              <li className="inline-block mr-8 text-mainP text-[16px] font-semibold">
                <Link href="/">{t("footer.titleLi1")}</Link>
              </li>
              <li className="inline-block mr-8 text-mainP text-[16px] font-semibold">
                <Link href="/">{t("footer.titleLi2")}</Link>
              </li>
              <li className="inline-block mr-8 text-mainP text-[16px] font-semibold">
                <Link href="/">{t("footer.titleLi3")}</Link>
              </li>
              <li className="inline-block mr-8 text-mainP text-[16px] font-semibold">
                <Link href="/">{t("footer.titleLi4")}</Link>
              </li>
              <li className="inline-block mr-8 text-mainP text-[16px] font-semibold">
                <Link href="/">{t("footer.titleLi5")}</Link>
              </li>
              <li className="inline-block mr-8 text-mainP text-[16px] font-semibold">
                <Link href="/">{t("footer.titleLi6")}</Link>
              </li>
            </ul>
          </div>
          <div className="max-md:mb-6">
            <h5 className="text-[14px] font-semibold mb-4">
              {t("footer.titleH3")}
            </h5>
            <form
              method="POST"
              action="/form"
              className="mt-4 flex items-center"
            >
              <input
                type="text"
                className="px-3.5 py-2.5 rounded-lg border"
                placeholder={t("footer.placeholder")}
              />
              <button className="ml-3 text-white text-[14px] w-[138px] h-[40px] rounded-[12px] bg-gradient-to-tl from-buttoBgLeft to-buttoBgRight">
                {t("footer.subscribe")}
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-between border-t-[1px] border-footerBorder pb-12">
          <div className="mt-8 text-mainP leading-[24px]">
            <p>© 2077 {t("footer.copyryting")}</p>
          </div>
          <div className="mt-8">
            <ul>
              <li className="inline-block mr-8 text-mainP leading-[24px] text-[16px] font-normal">
                <Link href="/">{t("footer.title7")}</Link>
              </li>
              <li className="inline-block mr-8 text-mainP leading-[24px] text-[16px] font-normal">
                <Link href="/">{t("footer.title8")}</Link>
              </li>
              <li className="inline-block mr-8 text-mainP leading-[24px] text-[16px] font-normal">
                <Link href="/">{t("footer.title9")}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
