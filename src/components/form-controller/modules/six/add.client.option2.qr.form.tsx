"use client";
// @ts-ignore
import useForm from "new-react-use-form";
import React, { FormEventHandler, useEffect, useLayoutEffect } from "react";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { DatePicker } from "@mui/x-date-pickers-pro";
import { useMutation } from "@tanstack/react-query";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import Autocomplete from "@mui/material/Autocomplete";
import { states } from "@/data/ states";
import { Rotate90DegreesCcw, Visibility, VisibilityOff } from "@mui/icons-material";
import { Checkbox, Typography } from "@material-tailwind/react";
import { usePCR } from "@/context/onboarding/personal.credit.repair.context";
import { useAC } from "@/context/business-credit/add-client/personal.credit.repair.context";
import { handleFormError } from "@/utils/error";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { RotateLeft } from "iconsax-react";
interface Option {
    label: string;
}
export const AddClientOption2QRForm = () => {
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
            id={"sign-up"}
            className={
                " md:mt-10 mb-1 flex flex-col h-fit justify-start items-start  md:px-8 px-[16px] w-full border-2 border-blue-500 rounded-lg ml-[-10px]"
            }
        >
            <div className="flex flex-row w-full">
                <div className=" transform -rotate-90 w-max ml-[-20px] mt-[40px] px-[25px] py-[5px] text-white rounded-l-[50px] content-center items-center justify-center bg-blue-600">
                    Featured
                </div>
                <div className=" flex font-extrabold content-center items-center justify-center w-full pt-9 ml-[-7rem]">
                    <h1 className="">Current Total Credit</h1>
                </div>
            </div>
            <div className="flex content-center items-center justify-center w-full mt-[4rem]">
                <div className="flex justify-center content-center items-center h-[40px] w-[200px]">
                    <img className="flex h-[40px] w-[200px] mb-5" src="/module/six/money.png" alt="image" />
                </div>
            </div>
            <div className="flex content-center items-center justify-center w-full mt-[4rem]">
                Recommended for huge Company
            </div>
            <div className="flex content-center items-center justify-center w-full mt-[1rem] z-40">
                <div className="flex flex-col w-max content-center justify-center items-center text-green-500 border-0 border-blue-300 p-[10px] rounded-b-xl bg-white">
                    <p className="text-2xl">Earn 10% On</p>
                    <p>Bulk Enrolment</p>
                </div>
            </div>
            <div className="flex content-center items-center justify-center w-full mt-[-1.2rem] z-30">
                <div className="w-[80%]">
                    <Button className="flex w-[40%] h-16 bg-green-500 text-lg"><p className=" text-2xl">Add Bulk Earolment</p></Button>
                </div>
            </div>
            <div className="flex content-center items-center justify-center w-full mt-[1rem] z-40">
                <div className="flex flex-col w-max content-center justify-center items-center text-gray-700 border-0 border-blue-300 p-[10px] rounded-b-xl bg-white">
                    <p className="underline text-4xl">QR</p>
                </div>
            </div>
            <div className="flex content-center items-center justify-center w-full mt-[1rem]">
                <div className="flex flex-col w-[80%] content-center justify-center items-center text-gray-700 border-2 border-blue-300 p-[10px] rounded-xl bg-white">
                    <p className="text-xl text-blue-500 py-3 px-3">Purchase Single Client Credit</p>
                </div>
            </div>
            <div className="flex content-center items-center justify-center w-full mt-[1rem]z-40">
                <div className="flex justify-center content-center items-center h-[40px] w-[40px]">
                    <img className="flex h-[40px] w-[400px] mb-5" src="/module/six/money.png" alt="image" />
                </div>
                <div className="flex w-max content-center justify-center items-center text-gray-700 pt-3">
                    <div className="flex text-lg text-gray-500 pl-2">Missing Credits?</div>
                    <div className="flex text-lg text-blue-500 pl-2">Contact</div>
                </div>
            </div>
            <div className="flex flex-col w-full pb-5 content-center justify-center items-center text-gray-700 pt-3">
                <p className="text-red-500">Support@TGLscalme.com</p>
            </div>
        </form>
    );
};
