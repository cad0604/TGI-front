"use client";
// @ts-ignore
import useForm from "new-react-use-form";
import React, { FormEventHandler, useEffect, useLayoutEffect } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { DatePicker } from "@mui/x-date-pickers-pro";
import { useMutation } from "@tanstack/react-query";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import Autocomplete from "@mui/material/Autocomplete";
import { states } from "@/data/ states";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Checkbox, Typography } from "@material-tailwind/react";
import { usePCR } from "@/context/onboarding/personal.credit.repair.context";
import { useAC } from "@/context/business-credit/add-client/personal.credit.repair.context";
import { handleFormError } from "@/utils/error";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
interface Option {
  label: string;
}
export const AddClientOption3Form = () => {
  const router = useRouter();
  const {
    SetFormID,
    SetIsPending,
    SetButtonText,
    SetMobileH4,
    SetMobileText,
    SetMobileValue,
  } = useAC();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const form = useForm({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    ssn: "",
    cityName: "",
    zipCode: "",
    state: "",
    email: "",
    phone: "",
    password: "",
    cnfPassword: "",
    policy: null,
  });

  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.ModulesSignUp,
    Error,
    Calls.IRequest.ModuleOneSignUp
  >({
    mutationFn: (variables) => ApiCalls.Module.one.signUp(variables),
    onSuccess: (r) => {
      toast.success(r.message);
      Cookies.set("accessToken", r.accessToken, {
        expires: 7,
        path: "/",
        secure: true,
      });
      Cookies.set("refreshToken", r.refreshToken, {
        expires: 30,
        path: "/",
        secure: true,
      });
      if (r?.urlPath != null) {
        router.replace(r?.urlPath);
      }
    },
    onError: (e) => {
      // handleFormError(e as any, form);
      const error = handleFormError(e as any, form);
      // @ts-ignore
      toast.error(error?.message);
    },
  });
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log(form.originalData);
    await mutateAsync(form.originalData);
  };
  useLayoutEffect(() => {
    SetFormID("sign-up");
    SetMobileH4("Create your account");
    SetButtonText("ADD SINGLE CLIENT CREDIT");
    SetMobileText("1/6");
    SetMobileValue(20);
  }, []);
  useEffect(() => {
    if (isPending) {
      SetIsPending(true);
    } else {
      SetIsPending(false);
    }
  }, [isPending]);
  return (
    <form
      onSubmit={onSubmit}
      id={"option3"}
      className={
        " md:mt-10 mb-1 flex flex-col h-fit justify-start items-start  md:px-8 px-[16px] w-full"
      }
    >
      <div
        className={
          "mt-6 h-fit flex flex-col justify-start items-start gap-8 w-full "
        }
      >
        <div className={"w-full"}>
          <div className="w-full flex flex-col">
            <div className=" pl-5 text-lg">
              <b>Join With Premier Partner Affiliate Lead Links:</b>
            </div>
            <div className="w-full flex flex-row">
              <div className=" w-5 h-5 bg-black"></div>
              <div className="pl-2">
                Friends, contacts, acquaintances that could benefit from our products and services?
              </div>
            </div>
            <div className="w-full flex flex-row">
              <div className=" w-5 h-5 bg-black"></div>
              <div className="pl-2 text-base">
                Looking to generate more income without building a sales team?
              </div>
            </div>
          </div>
        </div>
        <div className={"w-full pt-5 flex flex-row"}>
          <div className=" text-md text-gray-700 w-[60%]">
            We Close The Sale, You Make A commission
          </div>
          <div className=" text-m pl-6 w-[40%] justify-center content-center text-center text-blue-300">
            Use The Links Below:
          </div>
        </div>
        <div className={"w-full"}>
          <div className="flex flex-row w-full contet-center items-center">
            <div className="w-[1.2rem] h-[3rem] bg-gradient-to-r from-white to-blue-800 rounded-r-full"></div>
            <div className="w-[1.5rem] h-[1.5rem] bg-blue-700 rounded-full text-center ml-2"><span className="text-white">i</span></div>
            <div className="w-full ml-1">
              <p>Important Info</p>
              <span className="text-sm text-gray-700">
                Do not book any meeting on behalf of a lead, unless your lead confirmed they can, and will be available. Meethin no-shows will result in your ability to submit leads and earn commissions in being suspended.
              </span>
            </div>
          </div>
        </div>
        <div className={"w-full"}>
          <div className="flex flex-row w-full contet-center items-center ">
            <div className="w-[1.2rem] h-[15rem] bg-blue-700 rounded-l-full ml-12"></div>
            <div className="flex flex-col w-full justify-center content-center items-center">
              <div className="text-gray-800 text-lg">
                Schedule Consultation Page Link:
              </div>
              <div className="w-[40px] h-[40px] m-6">
                <img className="w-[40px] h-[40px]" src="/done.png" alt="" />
              </div>
              <div className="text-gray-600">
                https://et128.isrefer.com/go/bcconsult/true
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
