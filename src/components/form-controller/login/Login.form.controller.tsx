"use client";
import { useForm } from "react-hook-form";
import {
  TValidationZod_Login,
  Validation,
  ValidationZod,
} from "@/components/form-controller/validation/Validation.zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { z } from "zod";
import { Button } from "@mui/material";
import { TextBox } from "@/components/form_elements/TextBox";
import { TextBoxPassword } from "@/components/form_elements/TextBox.password";
import Link from "next/link";
import { LoadingButton } from "@mui/lab";
import { CheckBox } from "@/components/form_elements/Check.box";
import { useMutation } from "@tanstack/react-query";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import { useRouter } from "next/navigation";

export const LoginFormController = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isValid, isSubmitting, isDirty },
  } = useForm<z.infer<typeof Validation.Form.authentication.signIn>>({
    mode: "onSubmit",
    resolver: zodResolver(Validation.Form.authentication.signIn),
  });
  const {
    data: ApiData,
    isPending,
    mutateAsync,
  } = useMutation<Calls.IResponse.SignIn, Error, Calls.IRequest.SignIn>({
    mutationFn: async (data) => ApiCalls.SignIn(data),
    onSuccess: (data) => {
      router.replace(data.redirectPath);
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const OnSubmit = async (
    data: z.infer<typeof Validation.Form.authentication.signIn>
  ) => {
    try {
      await mutateAsync(data);
    } catch (e) {}
  };
  return (
    <form id={"login-form"} onSubmit={handleSubmit(OnSubmit)}>
      <div className={"flex flex-col justify-center items-center gap-3"}>
        <TextBox
          control={control}
          errors={errors}
          fieldName={"email"}
          inputProps={{
            label: "Email",
            required: true,
            disabled: false,
          }}
        />
        <TextBoxPassword
          control={control}
          errors={errors}
          fieldName={"password"}
          inputProps={{
            label: "Password",
            required: true,
            disabled: false,
          }}
        />
      </div>
      <CheckBox
        control={control}
        errors={errors}
        fieldName={"remember"}
        label={"30 days remember"}
      />
      <div className={" text-sm"}>
        <Link
          className={"underline text-blue-500 text-sm"}
          href={"/forgot-password"}
        >
          Forgot password?
        </Link>
      </div>
      <div className={"mt-6 flex flex-row items-center justify-center w-full "}>
        <LoadingButton
          loading={isPending}
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
          Sign in
        </LoadingButton>
      </div>
      <div
        className={
          "mt-4 flex flex-row gap-2 justify-center items-center w-full text-center"
        }
      >
        <p className={"text-base text-slate-800 "}>Don’t have an account?</p>
        <Link className={"underline text-blue-500 "} href={"/"}>
          Sign Up here
        </Link>
      </div>
    </form>
  );
};
