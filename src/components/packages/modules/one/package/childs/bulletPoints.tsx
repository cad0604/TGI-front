"use client";
import React from "react";

interface BulletPoints {
  bulletPoints?: {
    value: string;
  }[];
}

export const BulletPoints: React.FC<BulletPoints> = (props) => {
  return (
    <>
      {props.bulletPoints?.map((value, index) => (
        <div
          key={index}
          className={
            "flex flex-row gap-2 justify-start items-start text-left w-full h-auto"
          }
        >
          <div className={"w-[10%]"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 22 22"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <p
            className={
              "text-left text-gray-700 text-[12px] font-normal break-words w-[90%]"
            }
          >
            {value?.value || "test"}
          </p>
        </div>
      ))}
    </>
  );
};
