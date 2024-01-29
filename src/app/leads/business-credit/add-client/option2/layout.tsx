import React from "react";
import { Metadata } from "next";
import { ACContextProvider } from "@/context/business-credit/add-client/personal.credit.repair.context";

export const metadata: Metadata = {
  title: "Choose From Below Options",
  description: "Generated by create next app",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ACContextProvider>
      <div className={"pb-0"}> {children}</div>
    </ACContextProvider>
  );
}