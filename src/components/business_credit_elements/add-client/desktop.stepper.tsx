"use client";
import React from "react";
import { Step, Stepper, Typography } from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useAC } from "@/context/business-credit/add-client/personal.credit.repair.context";
interface steps {
  label: string;
  desc: string;
  imgURL: string;
}
export const DesktopAddClientStepper = () => {
  const { ActiveTab, SetActiveTab } = useAC();

  const dataArray: steps[] = [
    {
      label: "  Business Credit Builder",
      desc: "  (It requires...)",
      imgURL: "https://via.placeholder.com/19x19",
    },
    {
      label: "  Finance Blue Print(Only)",
      desc: "  (It requires...)",
      imgURL: "https://via.placeholder.com/26x26",
    },
  ];
  return (
    <div className={" flex flex-row items-center justify-center w-full h-auto"}>
      <div className="  rounded-l-md flex flex-row justify-center items-center w-[80%] bg-[#ffffff] h-[100px] py-4 pl-20 ">
        <Stepper
          className={"-mt-5"}
          lineClassName=" h-1 bg-blue-200"
          activeLineClassName="h-1 bg-white"
          activeStep={ActiveTab}
        >
          {dataArray.map((item, index) => (
              <Step
                key={index}
                className={
                  "text-gray-500 bg-blue-gray-50 h-[32px] w-[32px] ring-4 ring-white border-2 border-blue-gray-300"
                }
                activeClassName={"bg-[#137FFF]  ring-4 ring-white"}
                completedClassName="bg-[#137FFF] ring-4 ring-white"
              >
                <div className={"w-[19px] h-[19px]"}>
                  <img className="" src={item.imgURL} alt="image" />
                </div>
                <div className=" absolute -bottom-[3rem] w-max text-center">
                  <Typography
                    variant="small"
                    color={ActiveTab === index ? "black" : "black"}
                  >
                    {item.label}<br />
                    {item.desc}
                  </Typography>
                </div>
              </Step>
          ))}
        </Stepper>
      </div>
      <div
        className="   flex flex-row justify-center items-center w-[2%] bg-[#ffffff] h-[100px] py-4 px-20"
      ></div>
    </div>
  );
};
