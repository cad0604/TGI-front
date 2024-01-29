"use client";
import React from "react";
import { TextBox } from "@/components/form_elements/TextBox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TValidationZod_forgot_password,
  TValidationZod_Login,
  ValidationZod,
} from "@/components/form-controller/validation/Validation.zod";
import { TextBoxPassword } from "@/components/form_elements/TextBox.password";
import { Button } from "@mui/material";
import Link from "next/link";
import { LoadingButton } from "@mui/lab";

export const ForgotPasswordFormController = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isDirty },
  } = useForm<TValidationZod_forgot_password>({
    mode: "all",
    resolver: zodResolver(ValidationZod.forgot_password),
  });

  const OnSubmit = (data: TValidationZod_forgot_password) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(OnSubmit)}>
      <div className={"flex flex-col justify-center items-center gap-4"}>
        <TextBox
          control={control}
          errors={errors}
          fieldName={"email"}
          inputProps={{
            label: "Email",
          }}
        />
      </div>
      <div className={"mt-6 flex flex-row items-center justify-center w-full "}>
        <LoadingButton
          loading={false}
          disabled={isSubmitting}
          variant="contained"
          size="large"
          type={"submit"}
          color={"primary"}
          sx={{
            boxShadow: 0,
            borderRadius: "40px",
            ":hover": {
              bgcolor: "primary.main",
              color: "white",
              boxShadow: 0,
            },
          }}
        >
          Submit
        </LoadingButton>
      </div>
      <div
        className={
          "mt-4 flex flex-row gap-2 justify-center items-center w-full text-center"
        }
      >
        <p className={"text-base text-slate-800 "}>Don’t have an account?</p>
        <Link className={"underline text-blue-500 "} href={"#"}>
          Sign Up here
        </Link>
      </div>
    </form>
  );
};
