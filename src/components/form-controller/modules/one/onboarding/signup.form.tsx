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
import { handleFormError } from "@/utils/error";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
interface Option {
  label: string;
}
export const SignupForm = () => {
  const router = useRouter();
  const {
    SetFormID,
    SetIsPending,
    SetButtonText,
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
    SetButtonText("Sign up & Next");
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
        " md:my-10 mb-10 flex flex-col h-fit justify-center items-center  md:px-8 px-[16px] w-full"
      }
    >
      <div
        className={
          "mt-6 h-fit flex flex-col justify-center items-center gap-8 md:w-[35%] w-full"
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
        <div className={"flex flex-row gap-4 w-full"}>
          <div className={"w-full"}>
            <TextField
              select={true}
              required={true}
              disabled={form.busy}
              value={form.gender}
              onChange={(e) => {
                form.set("gender", e.target.value);
                form.errors.clear("gender");
              }}
              label="Gender"
              error={form.errors.has("gender")}
              helperText={
                form.errors.has("gender") && form.errors.get("gender")
              }
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"other"}>Other</MenuItem>
            </TextField>
          </div>
          <div className={"w-full"}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label={"Date of Birth"}
                disabled={false}
                defaultValue={null}
                disableFuture={true}
                onChange={(e) => {
                  // @ts-ignore
                  form.set("dob", e.toString());
                  form.errors.clear("dob");
                }}
                slotProps={{
                  textField: {
                    variant: "standard",
                    required: true,
                    error: form.errors.has("dob"),
                    helperText:
                      form.errors.has("gender") && form.errors.get("gender"),
                    fullWidth: true,
                  },
                }}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div
          className={
            "w-full flex md:flex-row flex-col justify-center items-center gap-8  md:gap-x-4 h-full"
          }
        >
          <div className={"w-full"}>
            <TextField
              required={true}
              disabled={form.busy}
              value={form.email}
              onChange={(e) => {
                form.set("email", e.target.value);
                form.errors.clear("email");
              }}
              label="Email Address"
              error={form.errors.has("email")}
              helperText={form.errors.has("email") && form.errors.get("email")}
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
              label="Phone Number"
              error={form.errors.has("phone")}
              helperText={form.errors.has("phone") && form.errors.get("phone")}
            />
          </div>
        </div>
        <div
          className={
            "w-full flex md:flex-row flex-col justify-center items-center gap-8  md:gap-x-4 h-full"
          }
        >
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
              helperText={
                form.errors.has("password") && form.errors.get("password")
              }
              type={showPassword ? "text" : "password"}
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
              required={true}
              disabled={form.busy}
              value={form.cnfPassword}
              onChange={(e) => {
                form.set("cnfPassword", e.target.value);
                form.errors.clear("cnfPassword");
              }}
              label="Confirm Password"
              error={form.errors.has("cnfPassword")}
              helperText={
                form.errors.has("cnfPassword") && form.errors.get("cnfPassword")
              }
              type={showPassword ? "text" : "password"}
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
        </div>
        <div
          className={
            "w-full flex md:flex-row flex-col justify-center items-center gap-8  md:gap-x-4 h-full"
          }
        >
          <div className={"w-full"}>
            <TextField
              required={true}
              disabled={form.busy}
              value={form.ssn}
              onChange={(e) => {
                form.set("ssn", e.target.value);
                form.errors.clear("ssn");
              }}
              label="SSN"
              error={form.errors.has("ssn")}
              helperText={form.errors.has("ssn") && form.errors.get("ssn")}
            />
          </div>
          <div className={"w-full"}>
            <TextField
              required={true}
              disabled={form.busy}
              value={form.cityName}
              onChange={(e) => {
                form.set("cityName", e.target.value);
                form.errors.clear("cityName");
              }}
              label="City Name"
              error={form.errors.has("cityName")}
              helperText={
                form.errors.has("cityName") && form.errors.get("cityName")
              }
            />
          </div>
        </div>
        <div
          className={
            "w-full flex md:flex-row flex-col justify-center items-center gap-8  md:gap-x-4 h-full"
          }
        >
          <div className={"w-full"}>
            <TextField
              required={true}
              disabled={form.busy}
              value={form.zipCode}
              onChange={(e) => {
                form.set("zipCode", e.target.value);
                form.errors.clear("zipCode");
              }}
              label="Zip Code"
              error={form.errors.has("zipCode")}
              helperText={
                form.errors.has("zipCode") && form.errors.get("zipCode")
              }
            />
          </div>
          <div className={"w-full"}>
            <Autocomplete
              disableClearable
              defaultValue={null}
              options={states}
              onChange={(e, value) => {
                form.set("state", value?.label);
                form.errors.clear("state");
              }}
              value={form.state}
              renderInput={(params) => (
                <TextField
                  autoComplete={"false"}
                  {...params}
                  label={"State Name"}
                  required={true}
                  disabled={form.busy}
                  error={form.errors.has("state")}
                  helperText={
                    form.errors.has("state") && form.errors.get("state")
                  }
                />
              )}
            />
          </div>
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
