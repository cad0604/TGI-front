"use client";
import React from "react";
import { LoginFormController } from "@/components/form-controller/login/Login.form.controller";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";
import { SignInForm } from "@/components/form-controller/authentication/signin";
import { ForgotPasswordForm } from "@/components/form-controller/authentication/forgotpassword";

export const ForgotPasswordView = () => {
  return (
    <section className={" flex h-screen justify-center items-center "}>
      <div
        className={
          "rounded-lg flex flex-col items-center justify-start md:p-[1rem]  p-[1.5rem] bg-white  md:w-[450px] md:h-[600px] w-full h-full "
        }
      >
        <div className={"mt-3  md:w-[90%] w-full h-[500px]"}>
          <Tooltip title="Back">
            <button
              onClick={useRouter().back}
              className={
                "select-none flex flex-row items-center justify-start  gap-2 rounded-lg  w-[30%] h-[40px]"
              }
            >
              <ArrowBackIcon />
              <p>Back</p>
            </button>
          </Tooltip>
          <div
            className={
              "select-none flex flex-row items-center justify-start  rounded-lg  w-full h-[60px]"
            }
          >
            <h4 className={"text-2xl font-semibold"}>Forgot Password</h4>
          </div>
          <ForgotPasswordForm />
        </div>
      </div>
    </section>
  );
};
