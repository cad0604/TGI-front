"use client";
import { PersonalUserSVG } from "@/components/svg/personal.user.svg";
import { BusinessUserSVG } from "@/components/svg/business.user.svg";
import Link from "next/link";

export const TypeofServices = () => {
  return (
    <>
      <div
        className={
          " select-none flex gap-12 md:flex-row flex-col justify-center items-center"
        }
      >
        <Link
          href={"/onboarding/pcr/sign-up"}
          className={
            " select-none flex flex-col justify-center items-center rounded-[28px]  hover:ring-1 ring-white  shadow-lg shadow-blue-500/50  boxGradient1st p-2 w-60 h-60"
          }
        >
          <PersonalUserSVG />
          <p className={"text-white"}>Personal Credit Repair</p>
        </Link>
        <Link
          href={"/business-credit"}
          className={
            "cursor-pointer select-none  hover:ring-1 ring-[#2684ff] flex flex-col justify-center items-center rounded-[28px]   bg-white p-2 w-60 h-60"
          }
        >
          <BusinessUserSVG />
          <p className={"text-slate-800"}>Business Credit</p>
        </Link>
      </div>
      <div
        className={
          " select-none flex gap-12 md:flex-row flex-col justify-center items-center"
        }
      >
        <Link
          href={"/leads/business-funding/business-details"}
          className={
            "cursor-pointer  select-none hover:ring-1 ring-[#2684ff] flex flex-col justify-center items-center rounded-[28px]  bg-white p-2 w-60 h-60"
          }
        >
          <img src={"bf.png"} alt={"business_funding"} />
          <p className={"text-slate-800"}> Business Funding</p>
        </Link>
        <Link
          href={"/leads/digital-marketing"}
          className={
            "cursor-pointer select-none hover:ring-1 ring-[#2684ff] flex flex-col justify-center items-center rounded-[28px]  bg-white p-2 w-60 h-60"
          }
        >
          <img src={"dm.png"} alt={"digital_marketing"} />
          <p className={"text-slate-800"}>Digital Marketing</p>
        </Link>
      </div>
    </>
  );
};
