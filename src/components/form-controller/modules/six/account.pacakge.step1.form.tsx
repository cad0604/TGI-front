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
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/outline";
import { Button } from "@mui/material";
import { AccountPackagePerson } from "@/components/business_credit_elements/account-package/person";
import { AccountPersonItem } from "@/components/business_credit_elements/account-package/item";
import Autocomplete from "@mui/material/Autocomplete";
import { states } from "@/data/ states";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Checkbox, Typography } from "@material-tailwind/react";
import { usePCR } from "@/context/onboarding/personal.credit.repair.context";
import { useAP } from "@/context/business-credit/account-package/personal.account.pacakge.context";
import { handleFormError } from "@/utils/error";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { LinkOption } from "@/components/link/add-client/link.option3";
interface Option {
  label: string;
}
export const AccountPackageStep1Form = () => {
  const router = useRouter();
  const {
    SetFormID,
    SetIsPending,
    SetButtonText,
    SetMobileH4,
    SetMobileText,
    SetMobileValue,
  } = useAP();
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

  const personItems = [
    {
      icon: "scaling",
      title: "SCALING SPECIALISTS",
      subtitle: "We're experts at scaling up credit and transforming financial futures."
    },
    {
      icon: "tailored",
      title: "SCALING SPECIALISTS",
      subtitle: "Our strategies are customized to your unique credit goals and needs"
    },
    {
      icon: "proven",
      title: "SCALING SPECIALISTS",
      subtitle: "Our track record of success showcases the results we deliver"
    },
    {
      icon: "transparent",
      title: "SCALING SPECIALISTS",
      subtitle: "Scaling your credit means unlocking better opportunities and financial freedom"
    },
    {
      icon: "unleash",
      title: "SCALING SPECIALISTS",
      subtitle: "Stay updated on your scaling journey with regular progress reports."
    },
  ];

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
      <div className="grid grid-cols-12 justify-start mt-[-2rem]">
        <div className="w-max h-max col-start3 col-end-5">
          <img className="w-20 h-20" src="/userbig.png" alt="person" />
        </div>
      </div>
      <div className="w-full justify-center text-center text-4xl">
        EMBARK ON YOUR <span className=" text-red-800">"BUSINESS CREDIT"</span> SCALING JOURNEY.
      </div>
      <div className="flex flex-col w-full justify-center content-center items-center">
        <div className="w-[75%] justify-center text-center text-2xl mt-8">
          Your Journey Begins Here With TGI Scale ME, The Key To AxLINF Up Your <span className=" text-blue-800">Financial Future!</span>
        </div>
        <div className="w-[50 %] justify-center text-center text-base mt-6">
          Let's Start Scaling Up Your Credit Together.
        </div>
      </div>

      <div className="w-full grid grid-cols-12 mt-[-3rem] justify-between">
        <div className="flex flex-col col-start-4 col-end-10 w-full justify-center content-center items-center bg-gray-100 mt-6 rounded-[5rem]">
          <div className="flex flex-col w-full h-36 bg-[url(/package1.png)] justify-center content-center items-center">
            {/*I have to change this account package banner png file.  */}
            {/* <img className=" object-center max-w-full h-28 z-0" src="/package1.png" alt="banner" /> */}
            <p className="text-white text-2xl z-10">RECOMMENDED</p>
            <p className="text-white text-5xl">Gold Package</p>
          </div>

          <div className="flex md:w-[80%] text-gray-700 justify-center content-center items-center space-y-[-0.5rem] mt-3">
            <span className="text-4xl">$1997/</span>
            One Time Payment<br /> (Save You $200)
          </div>
          <div className="flex w-36 text-3xl text-white justify-center content-center items-center rounded-2xl py-1 pt-2 bg-gradient-to-t from-green-300 to-green-700 mt-3">QR</div>
          <div className="text-gray-500 text-lg mt-2">$1000 Down Payment And 399 Monthly</div>

          <div>
            <div className="flex flex-row my-4">
              <LinkIcon width={"1.7rem"} style={{ marginRight: '1.5rem' }} /><Link href={"/"} style={{ fontSize: '1.5rem', marginLeft: '1,5rem' }}>Business Formation</Link>
            </div>
            <div className="flex flex-row my-4">
              <LinkIcon width={"1.7rem"} style={{ marginRight: '1.5rem' }} /><Link href={"/"} style={{ fontSize: '1.5rem' }}>Website Setup</Link>
            </div>
            <div className="flex flex-row my-2">
              <LinkIcon width={"1.7rem"} style={{ marginRight: '1.5rem' }} /><Link href={"/"} style={{ fontSize: '1.5rem' }}>Business Email Setup</Link>
            </div>
            <div className="flex flex-row my-4">
              <LinkIcon width={"1.7rem"} style={{ marginRight: '1.5rem' }} /><Link href={"/"} style={{ fontSize: '1.5rem' }}>Business Credit Builder</Link>
            </div>
            <div className="flex flex-row my-4">
              <LinkIcon width={"1.7rem"} style={{ marginRight: '1.5rem' }} /><Link href={"/"} style={{ fontSize: '1.5rem' }}>Access To Lines Of Credit</Link>
            </div>
            <div className="flex flex-row my-4">
              <LinkIcon width={"1.7rem"} style={{ marginRight: '1.5rem' }} /><Link href={"/"} style={{ fontSize: '1.5rem' }}>Business Credit Cards & More Funding</Link>
            </div>
          </div>

          <div className="flex w-[65%] rounded-full mt-6">
            <Button style={{ height: '4rem', backgroundColor: 'rgb(222, 226, 128)', borderRadius: '4rem', fontSize: '2rem' }} onClick={() => { ; }}>CHOOSE PLAN</Button>
          </div>

          <div className="flex w-full rounded-[5rem] mt-28">
            <Button style={{ height: '5rem', backgroundColor: 'rgb(46, 45, 45)', borderRadius: '2rem', fontSize: '2rem' }} onClick={() => { ; }}>CONTINUE</Button>
          </div>
        </div>

        <div className="flex flex-col col-start-10 ml-10 w-max">
          <div className=" flex flex-col w-44 h-44 mt-36 justify-center content-center items-center border-2 border-gray-200 rounded-full">
            <div className="flex w-20 h-20 bg-pink-600 rounded-full justify-center content-center items-center text-5xl text-white z-40">M</div>
            <img className=" object-center w-28 h-28 mt-[-2rem] ml-6 z-50 rounded-full" src="/userbig.png" alt="banner" />
          </div>
          <div className="flex mt-64 ml-28">
            <AccountPackagePerson />
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-12 mt-[-3rem] justify-between z-10">
        <div className="flex flex-col col-start-10 ml-10 w-max">
          <div className="flex mt-36 ml-28">
            <AccountPackagePerson />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full content-center justify-center items-center mt-[-19rem] z-20">
        <div className="w-[90%] grid grid-cols-3 gap-4 justify-center">
          <AccountPersonItem personItem={personItems[0]} />
          <AccountPersonItem personItem={personItems[1]} />
          <AccountPersonItem personItem={personItems[2]} />
        </div>
        <div className="w-[60%] grid grid-cols-2 gap-4 justify-center mt-6">
          <AccountPersonItem personItem={personItems[3]} />
          <AccountPersonItem personItem={personItems[4]} />
        </div>
      </div>

    </form>
  );
};
