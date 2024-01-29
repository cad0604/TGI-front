"use client";
// import { usePCR } from "@/context/onboarding/personal.credit.repair.context";
import { useAC } from "@/context/business-credit/add-client/personal.credit.repair.context";
export const HeaderAddClientTitle = () => {
  const { title, description } = useAC().page();

  return (
    <div
      className={
        "w-full flex flex-col px-24 items-start justify-center text-center rounded-[18px]  pt-4 pb-1 h-max "
      }
    >
      {title}
    </div>
  );
};
