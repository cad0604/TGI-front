"use client";
// @ts-ignore
import React from "react";
import { MonitorReportForm } from "@/components/business-account-elements/monitor.report.form";
import { LineAxis } from "@mui/icons-material";
interface Option {
    label: string;
}
export const BuildBusinessCredit = () => {
    return (
        <>
            <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl">
                
                <div className="flex flex-col w-[76%] justify-start mt-6">
                    <div className="flex ml-[-1.5rem] p-4 bg-blue-100 rounded-r-3xl text-blue-700 text-3xl h-max w-32">Step1</div>
                    <div className="flex w-full justify-center  mt-[-1.5rem]"><h1 className="text-2xl">Fundability Foundation</h1></div>
                    <div className="flex w-full ml-4 text-2xl text-gray-300 mt-4"><span className="mt-[-0.5rem] mr-">.........</span>&gt;<h4 className="text-lg ml-5">CREATE A BUSINESS NAME</h4></div>
                    <div className="flex w-full px-2 justify-center mt-6">
                        <h2 className="border-b-2 border-blue-700">DO YOU HAVE A BUSINESS NAME?</h2>

                    </div>
                </div>
                <div className="flex w-[24%]">
                    <MonitorReportForm />
                </div>
                
            </div>

        </>
    );
};
