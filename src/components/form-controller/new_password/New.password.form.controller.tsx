"use client";
import React from "react";
import { TextBox } from "@/components/form_elements/TextBox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TValidationZod_Login_set_new_password,
  ValidationZod,
} from "@/components/form-controller/validation/Validation.zod";
import { TextBoxPassword } from "@/components/form_elements/TextBox.password";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LoadingButton } from "@mui/lab";

export const NewPasswordFormController = () => {
  const Router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isDirty },
  } = useForm<TValidationZod_Login_set_new_password>({
    mode: "all",
    resolver: zodResolver(ValidationZod.set_new_password),
  });

  const OnSubmit = (data: TValidationZod_Login_set_new_password) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(OnSubmit)}>
      <div className={"flex flex-col justify-center items-center gap-4"}>
        <TextBoxPassword
          control={control}
          errors={errors}
          fieldName={"password"}
          inputProps={{
            label: "New Password",
          }}
        />
        <TextBoxPassword
          control={control}
          errors={errors}
          fieldName={"cnfPassword"}
          inputProps={{
            label: "Confirm Password",
          }}
        />
      </div>
      <div
        className={
          "mt-6 flex flex-col gap-4 items-center justify-center w-full "
        }
      >
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
        <Button
          onClick={() => Router.replace("/login")}
          variant="outlined"
          size="large"
          type={"reset"}
          color={"primary"}
          sx={{
            boxShadow: 0,

            borderRadius: "40px",
            ":hover": {
              boxShadow: 0,
            },
          }}
        >
          CANCEL
        </Button>
      </div>
    </form>
  );
};
