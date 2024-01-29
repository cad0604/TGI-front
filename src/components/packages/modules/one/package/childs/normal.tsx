"use client";
import { CheckIcon } from "@heroicons/react/24/outline";

import React from "react";
import { BulletPoints } from "@/components/packages/modules/one/package/childs/bulletPoints";
interface NormalProps {
  imgUrl?: string;
  name?: string;
  fullPrice?: number;
  emiPrice?: number;
  validity?: number;
  bulletPoints?: {
    value: string;
  }[];
  onClick?: () => void;
}
export const Normal: React.FC<NormalProps> = (props) => {
  return (
    <div
      className={
        "shadow-tremor-card ring-1 ring-gray-100 rounded-[16px] w-[300px] h-[700px]"
      }
    >
      <div className={"relative h-fit min-w-full"}>
        <img
          className={"rounded-t-[16px] object-fill max-w-[300px]"}
          src={props?.imgUrl || "/module/one/red.png"}
        />
        <div className={" py-3 px-4 absolute top-0"}>
          <h3 className={" uppercase text-[16px] text-white font-bold "}>
            {props?.name || "Credit Ascend Activator"}
          </h3>
          <div className={"mt-2 text-white flex flex-row items-start"}>
            <h2 className={" align-top font-extrabold text-[24px]"}>
              ${props?.fullPrice || 999}
            </h2>
            <p className={"ml-3 text-sm "}>
              One time payment saves you{" "}
              <span className={"font-bold"}>
                $
                {Number(props?.emiPrice) * Number(props?.validity) -
                  Number(props?.fullPrice)}
              </span>
            </p>
          </div>
          <div
            className={
              "mt-2 font-bold rounded-md bg-white w-[60px] h-[36px] flex flex-row items-center justify-center p-2"
            }
          >
            OR
          </div>
          <h4 className={"mt-2 text-[18px] font-bold  text-white"}>
            ${props?.emiPrice || 299}/
            <span className={"font-normal text-sm"}>Month</span>
          </h4>
        </div>
      </div>
      <div
        className={
          "border-b-[1px] border-gray-300 mt-1.5 pb-3.5 p-2 flex flex-col gap-2 items-center justify-start"
        }
      >
        <p className={"text-gray-700 text-sm"}>
          Validity {props?.validity || 3} months
        </p>
        <button
          onClick={props.onClick}
          className={
            "hover:bg-gray-600 hover:text-white tracking-tight font-medium border-[1px] border-gray-400 rounded-full w-[80%] p-2 bg-gray-50 "
          }
        >
          Choose Plan
        </button>
      </div>
      <div className={"my-4 space-y-3.5 pl-3 pr-4 py-2 w-full h-auto"}>
        <BulletPoints bulletPoints={props.bulletPoints} />
      </div>
    </div>
  );
};
