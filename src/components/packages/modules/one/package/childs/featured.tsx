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
export const Featured: React.FC<NormalProps> = (props) => {
  return (
    <div
      className={
        "shadow-tremor-card ring-1 ring-gray-100 rounded-[16px] w-[300px] h-[700px]"
      }
    >
      <div className={"relative h-fit min-w-full"}>
        <img
          className={"rounded-t-[16px] object-fill max-w-[300px] h-[240px]"}
          src={props?.imgUrl || "/module/one/red.png"}
        />
        <div className={" py-2 px-4 absolute top-0"}>
          <div
            className={"flex flex-row items-center justify-end w-full gap-2"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="none"
            >
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m15.129 3.62262-.0613 3.31623c-.0087.455.2801 1.05876.6476 1.33001l2.1699 1.64498c1.3913 1.04996 1.1638 2.33626-.4987 2.86126l-2.8263.8837c-.4725.1488-.9712.6651-1.0937 1.1463l-.6738 2.5725c-.5337 2.03-1.8637 2.2312-2.96624.4462l-1.54-2.4937c-.28-.455-.945-.7962-1.47-.77l-2.92247.1488c-2.09125.105-2.68626-1.1025-1.32126-2.695l1.73249-2.0126c.32375-.3762.47249-1.07619.32374-1.54869l-.8837-2.82626c-.51625-1.6625.41123-2.58124 2.06498-2.03874l2.58127.84875c.4375.14 1.09373.04374 1.46123-.22751l2.69506-1.9425c1.4525-1.05 2.6162-.43748 2.5812 1.35627Zm4.0427 15.62748-2.6512-2.6512"
              />
            </svg>
            <p className={"text-white font-medium "}>Popular</p>
          </div>
          <h3 className={"mt-2 uppercase text-[16px] text-white font-bold "}>
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
            "hover:bg-gray-600 hover:text-white hover:border-white tracking-tight font-medium border-[1px] border-amber-400 rounded-full w-[80%] p-2 bg-amber-400 "
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
