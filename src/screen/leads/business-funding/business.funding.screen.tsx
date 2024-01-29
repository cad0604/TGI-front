"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";

export const BusinessFundingScreen = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      className={
        "w-full flex flex-col-reverse md:flex-row  md:items-center md:justify-center"
      }
    >
      <div className={"w-full md:w-[40%]"}>
        <Typography className={"px-[16px] mt-4 text-center"} variant="h4">
          Scaling Above and Beyond Competitor's Pricing
        </Typography>
        {children}
      </div>
      <div className={" px-16 py-4 w-full md:w-[60%]"}>
        <div>
          <img src={"/module/bfund.png"} alt={"dg"} />
        </div>
      </div>
    </div>
  );
};
