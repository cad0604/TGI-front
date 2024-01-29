"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import Link from "next/link";
import { LoadingButton } from "@mui/lab";
import {
  TValidationZod_signup,
  Validation,
  ValidationZod,
} from "@/components/form-controller/validation/Validation.zod";

import { TextBox } from "@/components/form_elements/TextBox";
import { TextBoxPassword } from "@/components/form_elements/TextBox.password";
import { AutocompleteBox } from "@/components/form_elements/Autocomplete";
import { states } from "@/data/ states";

import { DatePickerBox } from "@/components/form_elements/DatePicker";
import { SelectBox } from "@/components/form_elements/Select";
import MenuItem from "@mui/material/MenuItem";
import { z } from "zod";
import { CheckBox } from "@/components/form_elements/Check.box";
export const SignUpController = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isDirty },
  } = useForm<z.infer<typeof Validation.Form.moduleOne.signUp>>({
    mode: "onSubmit",
    resolver: zodResolver(Validation.Form.moduleOne.signUp),
  });

  const OnSubmit = (data: z.infer<typeof Validation.Form.moduleOne.signUp>) => {
    console.log(data);
  };
  return (
    <form
      className={"md:w-[30%] w-full h-auto "}
      id={"signup-form"}
      onSubmit={handleSubmit(OnSubmit)}
    >
      <div
        className={
          " flex flex-col justify-center items-center gap-[10px] w-full h-full"
        }
      >
        <TextBox
          control={control}
          errors={errors}
          fieldName={"firstName"}
          inputProps={{
            label: "First Name",
            required: true,
            disabled: false,
          }}
        />
        <TextBox
          control={control}
          errors={errors}
          fieldName={"lastName"}
          inputProps={{
            label: "Last Name",
            required: true,
            disabled: false,
          }}
        />

        <SelectBox
          control={control}
          errors={errors}
          fieldName={"gender"}
          inputProps={{
            label: "Gender",
            required: true,
            disabled: false,
          }}
        >
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
        </SelectBox>
        <DatePickerBox
          DatePickerComponent={{
            label: "Date of birth",
          }}
          control={control}
          errors={errors}
          fieldName={"dob"}
          inputProps={{
            label: "Date of Birth",
            required: true,
            disabled: false,
          }}
        />

        <div
          className={
            "w-full flex md:flex-row flex-col justify-center items-center gap-2"
          }
        >
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
          <TextBox
            control={control}
            errors={errors}
            fieldName={"phone"}
            inputProps={{
              label: "Phone",
              required: true,
              disabled: false,
            }}
          />
        </div>

        <div
          className={
            "w-full flex md:flex-row flex-col justify-center items-center gap-x-2 h-full"
          }
        >
          <TextBox
            control={control}
            errors={errors}
            fieldName={"ssn"}
            inputProps={{
              label: "Social Security Number",
              required: true,
              disabled: false,
            }}
          />
          <TextBox
            control={control}
            errors={errors}
            fieldName={"zipCode"}
            inputProps={{
              label: "Zip Code",
              required: true,
              disabled: false,
            }}
          />
        </div>
        <div
          className={
            "w-full flex md:flex-row flex-col justify-center items-center gap-x-2 h-full"
          }
        >
          <TextBox
            control={control}
            errors={errors}
            fieldName={"cityName"}
            inputProps={{
              label: "City Name",
              required: true,
              disabled: false,
            }}
          />
          <AutocompleteBox
            control={control}
            errors={errors}
            options={states}
            fieldName={"state"}
            inputProps={{
              label: "State Name",
              required: true,
              disabled: false,
            }}
          />
        </div>
        <div
          className={
            "w-full flex md:flex-row flex-col justify-center items-center gap-x-2 h-full"
          }
        >
          <TextBoxPassword
            key={"password"}
            control={control}
            errors={errors}
            fieldName={"password"}
            inputProps={{
              label: "Password",
              required: true,
              disabled: false,
            }}
          />
          <TextBoxPassword
            key={"cnfPassword"}
            control={control}
            errors={errors}
            fieldName={"cnfPassword"}
            inputProps={{
              label: "Confirm Password",
              required: true,
              disabled: false,
            }}
          />
        </div>
      </div>
      <CheckBox
        control={control}
        errors={errors}
        fieldName={"policy"}
        label={"I agree with the terms, conditions, and privacy policy."}
      />
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
          Sign up & Next
        </LoadingButton>
      </div>
      <div
        className={
          "mt-4  flex flex-row gap-2 justify-center items-center w-full text-center"
        }
      >
        <p className={"text-base text-slate-800 "}>Already have an account?</p>
        <Link className={"underline text-blue-500 "} href={"/login"}>
          Sign in
        </Link>
      </div>
    </form>
  );
};
