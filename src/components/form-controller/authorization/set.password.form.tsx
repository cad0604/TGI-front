"use client";
import {
  Input,
  Button,
  Checkbox,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import { FormEventHandler, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import toast, { Toaster } from "react-hot-toast";
import { handleFormError } from "@/utils/error";
import { useMutation } from "@tanstack/react-query";
// @ts-ignore
import useForm from "new-react-use-form";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import Link from "next/link";
import { useRouter } from "next/navigation";
export const SetPasswordForm = () => {
  const [typeInput, setTypeInput] = useState(true);
  const router = useRouter();
  const form = useForm({
    email: "mysganguli@gmail.com",
    password: "",
    remember: false,
  });
  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.SignIn,
    Error,
    Calls.IRequest.SignIn
  >({
    mutationFn: async (variables) => await ApiCalls.SignIn(variables),
    onSuccess: (r) => {
      toast.success(r.message);
    },
    onError: (e) => handleFormError(e as any, form),
  });
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await mutateAsync(form.originalData);
  };

  return (
    <form className={"mt-4 flex flex-col gap-6 "} onSubmit={onSubmit}>
      <div className={" min-h-[40px] max-h-auto"}>
        <Input
          required={true}
          disabled={form.busy}
          value={form.password}
          onChange={(e) => {
            form.set("password", e.target.value);
            form.errors.clear("password");
          }}
          type={typeInput ? "password" : "text"}
          className={""}
          color={"blue"}
          size={"lg"}
          variant="static"
          placeholder={"Enter New Password"}
          label="New Password"
          error={form.errors.has("password")}
          crossOrigin={undefined}
          icon={
            typeInput ? (
              <EyeSlashIcon onClick={() => setTypeInput(false)} />
            ) : (
              <EyeIcon onClick={() => setTypeInput(true)} />
            )
          }
        />
        <Typography color="red" className="mt-1 text-[12px]  font-medium">
          {form.errors.has("password") && form.errors.get("password")}
        </Typography>
      </div>
      <div className={" min-h-[40px] max-h-auto"}>
        <Input
          required={true}
          disabled={form.busy}
          value={form.password}
          onChange={(e) => {
            form.set("password", e.target.value);
            form.errors.clear("password");
          }}
          type={typeInput ? "password" : "text"}
          className={""}
          color={"blue"}
          size={"lg"}
          variant="static"
          placeholder={"Enter Confirm Password"}
          label="Confirm Password"
          error={form.errors.has("password")}
          crossOrigin={undefined}
          icon={
            typeInput ? (
              <EyeSlashIcon onClick={() => setTypeInput(false)} />
            ) : (
              <EyeIcon onClick={() => setTypeInput(true)} />
            )
          }
        />
        <Typography color="red" className="mt-1 text-[12px]  font-medium">
          {form.errors.has("password") && form.errors.get("password")}
        </Typography>
      </div>
      <div className={""}>
        <Button
          className={"flex items-center justify-center rounded-full"}
          disabled={isPending || form.busy}
          color={"blue"}
          size={"lg"}
          fullWidth={true}
          type={"submit"}
        >
          {isPending ? <Spinner /> : "Submit"}
        </Button>
      </div>
      <div className={""}>
        <Button
          onClick={() => router.replace("/authentication/sign-in")}
          className={"flex items-center justify-center rounded-full"}
          color={"blue"}
          variant={"outlined"}
          size={"lg"}
          fullWidth={true}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};
