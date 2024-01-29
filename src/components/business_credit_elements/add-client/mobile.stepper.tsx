"use client";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React from "react";

interface MobileStepperAddClientProps {
  value: number;
  text: string;
  h4: string;
}
export const MobileStepperAddClient: React.FC<MobileStepperAddClientProps> = (props) => {
  return (
    <div className={"bg-white  w-full h-fit"}>
      <div
        className={"flex flex-row items-center justify-between w-full gap-4 "}
      >
        <div className={"w-[30%] "}>
          <div className={"w-[80px] h-[80px]"}>
            <CircularProgressbar value={props.value} text={props.text} />
          </div>
        </div>
        <div className={"w-full "}>
          <h4 className={"text-[18px] font-semibold "}>{props.h4}</h4>
          <p>Please fill out all necessary</p>
        </div>
      </div>
    </div>
  );
};
