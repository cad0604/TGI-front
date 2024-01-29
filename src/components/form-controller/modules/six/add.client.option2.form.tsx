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
export const AddClientOption2Form = () => {
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
      id={"option2"}
      className={
        " md:mt-10 mb-1 flex flex-col h-fit justify-start items-start  md:px-8 px-[16px] w-full"
      }
    >
      <div
        className={
          "mt-6 h-fit ml-24 mr-5 flex flex-col justify-start items-start gap-8 w-[80%]"
        }
      >
        <div className={"w-full"}>
          <TextField
            required={true}
            disabled={form.busy}
            value={form.firstName}
            onChange={(e) => {
              form.set("firstName", e.target.value);
              form.errors.clear("firstName");
            }}
            label="First Name"
            error={form.errors.has("firstName")}
            helperText={
              form.errors.has("firstName") && form.errors.get("firstName")
            }
          />
        </div>
        <div className={"w-full"}>
          <TextField
            required={true}
            disabled={form.busy}
            value={form.lastName}
            onChange={(e) => {
              form.set("lastName", e.target.value);
              form.errors.clear("lastName");
            }}
            label="Last Name"
            error={form.errors.has("lastName")}
            helperText={
              form.errors.has("lastName") && form.errors.get("lastName")
            }
          />
        </div>
        <div className={"w-full"}>
          <TextField
            required={true}
            disabled={form.busy}
            value={form.firstName}
            onChange={(e) => {
              form.set("Client's email or address", e.target.value);
              form.errors.clear("Client's email or address");
            }}
            label="Client's email or address"
            error={form.errors.has("Client's email or address")}
            helperText={
              form.errors.has("Client's email or address") && form.errors.get("Client's email or address")
            }
          />
        </div>

        <div className={"w-full"}>
          <TextField
            select={true}
            required={true}
            disabled={form.busy}
            value={form.gender}
            onChange={(e) => {
              form.set("state", e.target.value);
              form.errors.clear("state");
            }}
            label="State"
            error={form.errors.has("state")}
            helperText={
              form.errors.has("state") && form.errors.get("state")
            }
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
            <MenuItem value={"other"}>Other</MenuItem>
          </TextField>
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
              label="Client's Phone Number"
              error={form.errors.has("phone")}
              helperText={form.errors.has("phone") && form.errors.get("phone")}
            />
          </div>
         
          <div className={"w-full"}>
            <TextField
              required={true}
              disabled={form.busy}
              value={form.ssn}
              onChange={(e) => {
                form.set("ssn", e.target.value);
                form.errors.clear("ssn");
              }}
              label="Amount add to client"
              error={form.errors.has("ssn")}
              helperText={form.errors.has("ssn") && form.errors.get("ssn")}
            />
          </div>
        
        <div className={"w-full"}>
          <Checkbox
            checked={form.policy}
            onChange={(e) => {
              form.set("policy", e.target.checked);
              form.errors.clear("policy");
            }}
            color="blue"
            crossOrigin={undefined}
            label={
              <div>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  I agree to terms and conditions.
                </Typography>
              </div>
            }
          />
        </div>
      </div>
    </form>
  );
};
