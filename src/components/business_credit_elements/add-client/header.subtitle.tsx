"use client";
import { Typography } from "@material-tailwind/react";
import React from "react";

export const HeaderSubAddClientTitle = () => {
  return (
    <Typography variant={"h6"} color="gray" className=" font-medium">
      Please fill out all necessary{" "}
      <span
        style={{ color: "#1380FF" }}
        className={"font-bold text-light-blue-800"}
      >
        steps
      </span>{" "}
      to get started
    </Typography>
  );
};
