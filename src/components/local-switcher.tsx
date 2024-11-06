"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import Image from "next/image";
import Globus from "../../public/svgs/globus.svg";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <label className="">
      <div className="relative">
        <Image
          priority
          src={Globus}
          className="absolute top-2.5 left-1"
          alt="Follow us on Twitter"
        />
        <p className="sr-only">UZ</p>
      </div>
      <select
        defaultValue={localActive}
        className="py-2 pl-6 rounded-[12px] bg-selectBg focus:border-none"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">EN</option>
        <option value="uz">UZ</option>
        <option value="ru">RU</option>
      </select>
    </label>
  );
}
