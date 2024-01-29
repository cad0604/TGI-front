import React from "react";
// import { PCRContextProvider } from "@/context/onboarding/personal.credit.repair.context";
import { ACContextProvider } from "@/context/business-credit/add-client/personal.credit.repair.context";

export default function PCRLayout({ children }: { children: React.ReactNode }) {
  return (
    <ACContextProvider>
      <div className={"pb-20"}> {children}</div>
    </ACContextProvider>
  );
}
