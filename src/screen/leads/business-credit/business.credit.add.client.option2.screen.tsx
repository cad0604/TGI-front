"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";

export const BusinessCreditAddClientOption2Screen = ({
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
      <div className={"w-full md:w-[60%]"}>
        <Typography className={"px-[16px] mt-4 text-center"} variant="h4">
          Choose From below options
        </Typography>
        {children}
      </div>
      <div className={" px-16 py-4 w-full md:w-[40%]"}>
        <div>
          <img src={"/module/bfund.png"} alt={"dg"} />
        </div>
      </div>
    </div>
  );
};
