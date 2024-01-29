"use client";
import React, { createContext, useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

// import {
//   DesktopOnboardingPages,
//   DesktopOnboardingPagesType,
// } from "@/context/business-credit/add-client/path";
import { DesktopBusinessCreditAccountPackagePages, DesktopBusinessCreditAccountPackagePagesType } from "./path";
import { LinkOption } from "@/components/link/add-client/link.option3";

const PCRContext = createContext<IPCRContext | undefined>(undefined);

export const APContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [formID, SetFormID] = useState("");
  const [isPending, SetIsPending] = useState(false);
  const [buttonText, SetButtonText] = useState("Loading..");
  const [activetab, SetActiveTab] = useState(0);
  const [value, SetMobileValue] = useState(20);

  const [text, SetMobileText] = useState("");
  const [h4, SetMobileH4] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const isVisible = pathname === "/leads/business-credit/add-client/option3";
  const page = () => {
    const currentPage =
      DesktopBusinessCreditAccountPackagePages[pathname as keyof DesktopBusinessCreditAccountPackagePagesType] ||
      {};
    return {
      title: (
        <h3 className="textforHederTitle capitalize font-bold">
          {currentPage.title}
        </h3>
      ),
      description: currentPage.description,
    };
  };

  const contextValue: IPCRContext = {
    page,
    SetFormID: (formId) => SetFormID(formId),
    SetIsPending: (isPending) => SetIsPending(isPending),
    SetButtonText: (buttonText) => SetButtonText(buttonText),
    SetActiveTab: (activetab) => SetActiveTab(activetab),
    ActiveTab: activetab,
    SetMobileValue: (value) => SetMobileValue(value),
    SetMobileText: (text) => SetMobileText(text),
    SetMobileH4: (h4) => SetMobileH4(h4),
  };
  return (
    <PCRContext.Provider value={contextValue}>
      <div className={"flex w-full justify-center content-center items-center"}>
        <div className={"space-y-2 h-fit w-[80%] mt-2"}>

          <div
            className={
              "w-full flex md:flex-row flex-col justify-center items-center gap-8  md:gap-x-4 h-full"
            }
          >
            <div className={"w-full"}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </PCRContext.Provider >
  );
};
export const useAP = () => {
  const context = useContext(PCRContext);

  if (!context) {
    throw new Error("useAP must be used within a ACContextProvider");
  }

  return context;
};
