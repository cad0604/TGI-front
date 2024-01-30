"use client";
// @ts-ignore
import React, { FormEventHandler, useEffect, useLayoutEffect } from "react";
import { MonitorReportForm } from "@/components/business-account-elements/monitor.report.form";
interface Option {
  label: string;
}
export const MonitorReport = () => {
  return (
    <>
    <div className="flex w-[80%] ml-[10%] mt-10 justify-center content-center items-center">
      <MonitorReportForm />
    </div>
      
    </>
  );
};
