"use client";
import React, { createContext, useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AddClientButton } from "@/components/business_credit_elements/add-client/button";
import { HeaderAddClientTitle } from "@/components/business_credit_elements/add-client/header.title";
import { DesktopAddClientStepper } from "@/components/business_credit_elements/add-client/desktop.stepper";
import { MobileStepperAddClient } from "@/components/business_credit_elements/add-client/mobile.stepper";
import { AddClientOption2QRForm } from "@/components/form-controller/modules/six/add.client.option2.qr.form";
// import {
//   DesktopOnboardingPages,
//   DesktopOnboardingPagesType,
// } from "@/context/business-credit/add-client/path";
import { DesktopBusinessCreditAddClientPages, DesktopBusinessCreditAddClientPagesType } from "./path";
import { LinkOption } from "@/components/link/add-client/link.option3";

const PCRContext = createContext<IPCRContext | undefined>(undefined);

interface LinkAddresss {
  title: string,
  linkAddress: string,
};

let linkArray = [
  {
    title: "12 Credit Linea Website",
    linkAddress: "www.freelancer.com",
    linkColor: "#11e245",
  },
  {
    title: "7 Vendors Website",
    linkAddress: "www.freelancer.com",
    linkColor: "#3a3c3a"
  },
  {
    title: "Christine Website",
    linkAddress: "www.freelancer.com",
    linkColor: "#3a3c3a"
  },
];

export const ACContextProvider = ({
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
  const isVisible = pathname === "/leads/business-credit/add-client/option4";
  const page = () => {
    const currentPage =
      DesktopBusinessCreditAddClientPages[pathname as keyof DesktopBusinessCreditAddClientPagesType] ||
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
      <div className={"flex flex-col w-full justify-center content-center items-center"}>
        <div className={"space-y-2 h-fit w-[90%] border-2 border-blue-400 mt-2 rounded-2xl"}>
          <div
            style={{
              marginTop: "16px",
            }}
            className={"md:flex hidden md:px-8 px-[16px] py-[8px] w-full "}
          >
            <HeaderAddClientTitle />
          </div>
          <div
            style={{
              zIndex: 20,
              marginTop: "16px",
            }}
            className={"md:px-8  md:flex sticky top-0 hidden w-[60%]"}
          >
            <DesktopAddClientStepper />
          </div>
          <div
            style={{
              zIndex: 20,
            }}
            className={
              "md:px-8 px-[16px] py-4 bg-white h-fit  md:hidden sticky top-0  w-full"
            }
          >
            <MobileStepperAddClient text={text} h4={h4} value={value} />
          </div>
          <div
            className={
              "w-full flex md:flex-row flex-col justify-center items-center gap-8  md:gap-x-4"
            }
          >
            <div className={"w-[60%]"}>
              {children}

              {!isVisible && (
                <div
                  style={{
                    zIndex: 0,
                  }}
                  className={
                    "md:px-8 px-[16px] z-[500] border-gray-300 flex flex-row-6 items-center justify-center gap-4 w-full h-[80px] bg-white"
                  }
                >
                  <AddClientButton
                    buttonText={buttonText}
                    formId={formID}
                    isPending={isPending}
                  />
                </div>
              )}
            </div>
            <div className={"w-[40%] flex flex-col mt-[-50px] z-[500]"}>
              <AddClientOption2QRForm />
            </div>
          </div>
          {isVisible &&
            <div className="flex flex-col w-full content-center justify-center items-center">
              <div className="w-[80%] grid grid-cols-2 gap-4 justify-center content-center items-center">
                <LinkOption linkData={linkArray[0]} />
                <LinkOption linkData={linkArray[1]} />
              </div>
              <div className="flex w-full justify-center content-center items-center mt-6">
                <div className="w-[40%]"><LinkOption linkData={linkArray[2]} /></div>
              </div>
            </div>
          }
        </div>
        <div className="text-red-100 my-4 mb-8">
          @2024 Created
        </div>
      </div>
    </PCRContext.Provider >
  );
};
export const useAC = () => {
  const context = useContext(PCRContext);

  if (!context) {
    throw new Error("useAC must be used within a ACContextProvider");
  }

  return context;
};
