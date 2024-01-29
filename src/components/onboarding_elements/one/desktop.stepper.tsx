"use client";
import React from "react";
import { Step, Stepper, Typography } from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { usePCR } from "@/context/onboarding/personal.credit.repair.context";
interface steps {
  label: string;
}
export const DesktopStepper = () => {
  const { ActiveTab, SetActiveTab } = usePCR();

  const dataArray: steps[] = [
    {
      label: "  Enter sign up details",
    },
    {
      label: "  Pull report",
    },
    {
      label: " Schedule a meeting",
    },
    {
      label: " Select Packages",
    },
    {
      label: "Upload verification IDs",
    },
    {
      label: "Positive account",
    },
  ];
  return (
    <div className={" flex flex-row items-center justify-center w-full h-auto"}>
      <div className="  rounded-l-md flex flex-row justify-center items-center w-[96%] bg-[#137FFF] h-[100px] py-4 pl-20 ">
        <Stepper
          className={"-mt-5"}
          lineClassName=" h-1 bg-white"
          activeLineClassName="h-1 bg-white"
          activeStep={ActiveTab}
        >
          {dataArray.map((item, index) => (
            <Step
              key={index}
              className={
                "text-gray-500 bg-blue-gray-50 h-[32px] w-[32px] ring-4 ring-white"
              }
              activeClassName={"bg-[#137FFF]  ring-4 ring-white"}
              completedClassName="bg-[#137FFF] ring-4 ring-white"
            >
              <CheckIcon className={"w-[24px] h-[24px]"} />
              <div className=" absolute -bottom-[2rem] w-max text-center">
                <Typography
                  variant="small"
                  color={ActiveTab === index ? "white" : "white"}
                >
                  {item.label}
                </Typography>
              </div>
            </Step>
          ))}
        </Stepper>
      </div>
      <div
        style={{
          clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
        }}
        className="   flex flex-row justify-center items-center w-[4%] bg-[#137FFF] h-[100px] py-4 px-20"
      ></div>
    </div>
  );
};
