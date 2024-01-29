"use client";
import React, { createContext, useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { OnboardButton } from "@/components/onboarding_elements/one/button";
import { HeaderTitle } from "@/components/onboarding_elements/one/header.title";
import { DesktopStepper } from "@/components/onboarding_elements/one/desktop.stepper";
import { MobileStepper } from "@/components/onboarding_elements/one/mobile.stepper";
import {
  DesktopOnboardingPages,
  DesktopOnboardingPagesType,
} from "@/context/onboarding/path";
const PCRContext = createContext<IPCRContext | undefined>(undefined);
export const PCRContextProvider = ({
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
  const isVisible = pathname === "/onboarding/pcr/plans";
  const page = () => {
    const currentPage =
      DesktopOnboardingPages[pathname as keyof DesktopOnboardingPagesType] ||
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
      <div className={"space-y-2 h-fit w-full"}>
        <div
          style={{
            marginTop: "16px",
          }}
          className={"md:flex hidden md:px-8 px-[16px] py-[8px] w-full"}
        >
          <HeaderTitle />
        </div>
        <div
          style={{
            zIndex: 20,
            marginTop: "16px",
          }}
          className={"md:px-8  md:flex sticky top-0 hidden w-full"}
        >
          <DesktopStepper />
        </div>
        <div
          style={{
            zIndex: 20,
          }}
          className={
            "md:px-8 px-[16px] py-4 bg-white h-fit  md:hidden sticky top-0  w-full"
          }
        >
          <MobileStepper text={text} h4={h4} value={value} />
        </div>
        {children}

        {!isVisible && (
          <div
            style={{
              zIndex: 500,
            }}
            className={
              "md:px-8 px-[16px] z-[500] border-t-2 border-gray-300 flex flex-row items-center justify-center gap-4 fixed bottom-0 w-full h-[80px] bg-white"
            }
          >
            <OnboardButton
              buttonText={buttonText}
              formId={formID}
              isPending={isPending}
            />
          </div>
        )}
      </div>
    </PCRContext.Provider>
  );
};
export const usePCR = () => {
  const context = useContext(PCRContext);

  if (!context) {
    throw new Error("usePCR must be used within a PCRContextProvider");
  }

  return context;
};
