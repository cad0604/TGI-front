"use client";

import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { OneSidebar } from "@/components/sidebar/modules/one.sidebar";
export const DashBoardHeader = () => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div
      className={
        "flex flex-row items-center  md:gap-0 gap-4 justify-start   bg-white w-full h-[60px]"
      }
    >
      <div>
        <div className={"md:hidden block"} onClick={openDrawer}>
          <IconButton color={"blue"} variant="filled">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </IconButton>
        </div>
        <Drawer open={open} onClose={closeDrawer} className="">
          <OneSidebar />
        </Drawer>
      </div>
      <div className={"md:text-[30px] text-[18px] font-semibold"}>
        My Dashboard <span className={"text-blue-800"}>!</span>
      </div>
    </div>
  );
};
