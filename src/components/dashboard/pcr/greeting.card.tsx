"use client";

import { Button } from "@material-tailwind/react";
import React from "react";

export const GreetingCard = () => {
  return (
    <div
      className={
        "ring-1 ring-tremor-ring shadow-tremor-card rounded-tremor-default flex flex-col items-center justify-start  p-4 bg-gradient-to-b from-blue-50 to-sky-100 w-full h-[400px]"
      }
    >
      <div className={"w-[230px] h-[230px]"}>
        <img className="" src="/userbig.png" alt="userbigavater" />
      </div>
      <div className="flex flex-col gap-2  text-center ">
        <div className="">
          <p className="capitalize text-[15px] font-medium">Welcome back</p>
          <h3 className="text-[22px] font-semibold">Fred Jonathan!</h3>
        </div>
        <Button
          className="border border-blue-600 bg-white rounded-full text-blue-500"
          color="white"
          size="sm"
          variant="gradient"
        >
          Update Profile
        </Button>
      </div>
    </div>
  );
};
