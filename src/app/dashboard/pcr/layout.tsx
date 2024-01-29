import React from "react";
import { Metadata } from "next";
import { PcrHeader } from "@/components/dashboard/pcr/pcr.header";

export const metadata: Metadata = {
  title: "Personal Credit Repair lol",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full">
      <div className="z-[5000] sticky top-0">
        <PcrHeader />
      </div>
      <div className="flex flex-col gap-6 w-full md:px-[80px] px-4 my-4">
        {children}
      </div>
    </div>
  );
}
