"use client";
// @ts-ignore
import useForm from "new-react-use-form";
import React, { FormEventHandler, useEffect, useLayoutEffect } from "react";

import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/outline";
import { Button } from "@mui/material";
import { AccountPersonItem } from "@/components/business_credit_elements/account-package/item";
import { useAP } from "@/context/business-credit/account-package/personal.account.pacakge.context";
import { handleFormError } from "@/utils/error";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ArrowForward } from "@mui/icons-material";

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

      <div className="w-full grid grid-cols-12 mt-[1rem] justify-between">
        <div className="flex flex-col col-start-4 col-end-10 w-full justify-center content-center items-center bg-gray-100 mt-6 rounded-[5rem]">
          <div className="flex">
                      <Image src={"/business-account/banner.png"} objectFit="cover" alt="" width={700} height={1000} />

          </div>
          {/* // <div className="flex flex-col w-full h-80 bg-[url(/business-account/banner.png)] justify-center content-center items-center bg-cover"> */}
            {/*I have to change this account package banner png file.  */}
            {/* <img className=" object-center max-w-full h-28 z-0" src="/package1.png" alt="banner" /> */}
          {/* I</div> */}

          <div className="flex md:w-[80%] text-gray-700 justify-center content-center items-center space-y-[-0.5rem] mt-3">
            <span className="text-4xl">$1997/</span>
            One Time Payment<br /> (Save You $200)
          </div>
          <div className="flex w-36 text-3xl text-white justify-center content-center items-center rounded-2xl py-1 pt-2 bg-gradient-to-t from-green-300 to-green-700 mt-3">QR</div>
          <div className="text-gray-500 text-lg mt-2">$1000 Down Payment And 399 Monthly</div>

          <div>
            <div className="flex flex-row my-8">
              <ArrowForward style={{ marginRight: '1.5rem', color: 'rgb(94, 89, 89)', fontSize: '2rem' }} /><Link href={"#"} style={{ fontSize: '1.5rem', marginLeft: '1,5rem' }}>Business Formation</Link>
            </div>
            <div className="flex flex-row my-8">
              <ArrowForward style={{ marginRight: '1.5rem', color: 'rgb(94, 89, 89)', fontSize: '2rem' }} /><Link href={"#"} style={{ fontSize: '1.5rem' }}>Website Setup</Link>
            </div>
            <div className="flex flex-row my-8">
              <ArrowForward style={{ marginRight: '1.5rem', color: 'rgb(94, 89, 89)', fontSize: '2rem' }} /><Link href={"#"} style={{ fontSize: '1.5rem' }}>Business Email Setup</Link>
            </div>
            <div className="flex flex-row my-8">
              <ArrowForward style={{ marginRight: '1.5rem', color: 'rgb(94, 89, 89)', fontSize: '2rem' }} /><Link href={"#"} style={{ fontSize: '1.5rem' }}>Business Credit Builder</Link>
            </div>
            <div className="flex flex-row my-8">
              <ArrowForward style={{ marginRight: '1.5rem', color: 'rgb(94, 89, 89)', fontSize: '2rem' }} /><Link href={"#"} style={{ fontSize: '1.5rem' }}>Access To Lines Of Credit</Link>
            </div>
            <div className="flex flex-row my-8">
              <ArrowForward style={{ marginRight: '1.5rem', color: 'rgb(94, 89, 89)', fontSize: '2rem' }} /><Link href={"#"} style={{ fontSize: '1.5rem' }}>Business Credit Cards & More Funding</Link>
            </div>
          </div>

          <div className="flex w-[65%] rounded-full mt-6">
            <Link href={"#"} style={{ height: '4rem', width:'100%'}}>
              <Button style={{ height: '4rem', backgroundColor: 'rgb(222, 226, 128)', borderRadius: '4rem', fontSize: '2rem' }} onClick={() => { ; }}>CHOOSE PLAN</Button>
            </Link>
          </div>

          <div className="flex w-full rounded-[5rem] mt-28">
            <Link href={"/leads/business-credit/add-client/option2"} style={{ height: '5rem', width:'100%'}}>
              <Button style={{ height: '5rem', backgroundColor: 'rgb(46, 45, 45)', borderRadius: '2rem', fontSize: '2rem' }} onClick={() => { ; }}>CONTINUE</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full content-center justify-center items-center mt-[4rem] z-20">
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
