"use client";
import { Typography } from "@material-tailwind/react";
// @ts-ignore
import useForm from "new-react-use-form";
import React, { FormEventHandler, useEffect, useLayoutEffect } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { RadioGroup } from "@headlessui/react";
import { usePCR } from "@/context/onboarding/personal.credit.repair.context";
import { Calls } from "@/api/calls/type";
import { ApiCalls } from "@/api/calls/calls";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { handleFormError } from "@/utils/error";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
export const BureauCredentialForm = () => {
  const router = useRouter();
  const {
    SetActiveTab,
    SetFormID,
    SetButtonText,
    SetIsPending,
    SetMobileH4,
    SetMobileText,
    SetMobileValue,
  } = usePCR();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const form = useForm({
    provider: "IdentityfyIQ",
    username: "",
    phone: "",
    password: "",
    notes: "",
  });
  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.PullReport,
    Error,
    Calls.IRequest.PullReport
  >({
    mutationFn: (variables) => ApiCalls.Module.one.bureauCredential(variables),
    onSuccess: (r) => {
      toast.success(r.message);

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
    SetActiveTab(1);
    SetFormID("pull-report");
    SetButtonText("Pull Report & Next");
    SetMobileH4("Get Credit Report");
    SetMobileText("2/6");
    SetMobileValue(40);
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
      id={"pull-report"}
      className={
        " my-10 flex flex-col h-fit justify-center items-center  md:px-8 px-[16px] w-full"
      }
    >
      <Typography
        variant={"h5"}
        color="blue-gray"
        className="text-center md:w-[35%] w-full capitalize font-semibold"
      >
        Complete the form below and submit credentials before proceeding
      </Typography>
      <div
        className={
          "mt-6 h-fit flex flex-col justify-center items-center gap-8 md:w-[35%] w-full"
        }
      >
        <div className={"select-none w-full flex flex-row gap-8"}>
          <RadioGroup
            className={"flex flex-col gap-4 w-full"}
            value={form.provider}
            onChange={(value) => {
              form.set("provider", value);
            }}
          >
            <RadioGroup.Label
              className={"after:content-['*'] after:ml-0.5 after:text-red-500"}
            >
              Select report provider
            </RadioGroup.Label>
            <RadioGroup.Option
              className={({ active, checked }) =>
                `${
                  active
                    ? "bg-blue-50/50  ring-2 ring-blue-700 text-blue-gray-700"
                    : "bg-white text-blue-gray-700"
                }
                  ${
                    checked
                      ? "bg-blue-50/50  ring-2 ring-blue-700 "
                      : "bg-white ring-2 ring-gray-200 "
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4  focus:outline-none`
              }
              value="IdentityfyIQ"
            >
              {({ active, checked }) => (
                <div
                  className={
                    "w-full flex flex-row items-center justify-between"
                  }
                >
                  <div className={"text-blue-gray-700 font-semibold"}>
                    IdentityfyIQ
                  </div>
                  <div className={"flex flex-col items-end "}>
                    <div className={"text-[13px] text-blue-gray-800"}>
                      Create Account If have not
                    </div>
                    <div className={"text-blue-900"}>
                      <a href={"https://google.com"}>Create</a>
                    </div>
                  </div>
                </div>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option
              className={({ active, checked }) =>
                `${
                  active
                    ? "bg-blue-50/50  ring-2 ring-blue-700 text-blue-gray-700"
                    : "bg-white text-blue-gray-700"
                }
                  ${
                    checked
                      ? "bg-blue-50/50  ring-2 ring-blue-700 "
                      : "bg-white ring-2 ring-gray-200 "
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4  focus:outline-none`
              }
              value="SmartCredit"
            >
              {({}) => (
                <div
                  className={
                    "w-full flex flex-row items-center justify-between"
                  }
                >
                  <div className={"text-blue-gray-700 font-semibold"}>
                    Smart Credit
                  </div>
                  <div className={"flex flex-col items-end "}>
                    <div className={"text-[13px] text-blue-gray-800"}>
                      Create Account If have not
                    </div>
                    <div className={"text-blue-900"}>
                      <a href={"https://google.com"}>Create</a>
                    </div>
                  </div>
                </div>
              )}
            </RadioGroup.Option>
          </RadioGroup>
        </div>
        <div className={"w-full"}>
          <TextField
            required={true}
            disabled={form.busy}
            value={form.username}
            onChange={(e) => {
              form.set("username", e.target.value);
              form.errors.clear("username");
            }}
            label="Username/Email"
            error={form.errors.has("username")}
            helperText={
              form.errors.has("username") && form.errors.get("username")
            }
          />
        </div>
        <div className={"w-full"}>
          <TextField
            required={true}
            disabled={form.busy}
            value={form.phone}
            onChange={(e) => {
              form.set("phone", e.target.value);
              form.errors.clear("phone");
            }}
            label="Phone"
            error={form.errors.has("phone")}
            helperText={form.errors.has("phone") && form.errors.get("phone")}
          />
        </div>
        <div className={"w-full"}>
          <TextField
            required={true}
            disabled={form.busy}
            value={form.password}
            onChange={(e) => {
              form.set("password", e.target.value);
              form.errors.clear("password");
            }}
            label="Password"
            error={form.errors.has("password")}
            type={showPassword ? "text" : "password"}
            helperText={
              form.errors.has("password") && form.errors.get("password")
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className={"w-full"}>
          <TextField
            disabled={form.busy}
            value={form.notes}
            onChange={(e) => {
              form.set("notes", e.target.value);
              form.errors.clear("notes");
            }}
            label="Security word ( Optional )"
            error={form.errors.has("notes")}
            multiline={true}
            maxRows={4}
            helperText={form.errors.has("notes") && form.errors.get("notes")}
          />
        </div>
      </div>
    </form>
  );
};
