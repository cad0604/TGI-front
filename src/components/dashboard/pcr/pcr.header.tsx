"use client";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

export const PcrHeader = () => {
  return (
    <div
      className={
        " bg-white md:px-[80px] md:flex hidden flex-row w-full h-[60px] justify-between items-center border-b-[1px] border-gray-200"
      }
    >
      <div className={"flex flex-row justify-between items-center gap-12"}>
        <div className={"text-[24px] font-bold  w-fit"}>Logo</div>
        <div
          className={
            "font-medium flex flex-row justify-between gap-6 items-center  w-fit"
          }
        >
          <Link href={"#"}>Dashboard</Link>
          <Link href={"#"}>Billing</Link>
          <Link href={"#"}>Documents</Link>
          <Link href={"#"}>Account</Link>
          <Link href={"#"}>Support</Link>
        </div>
      </div>
      <div className={" w-fit"}>
        <Button color={"blue"} variant={"outlined"}>
          Logout
        </Button>
      </div>
    </div>
  );
};
