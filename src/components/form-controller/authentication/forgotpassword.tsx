"use client";
import {
  Input,
  Button,
  Checkbox,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import { FormEventHandler } from "react";
import toast, { Toaster } from "react-hot-toast";
import { handleFormError } from "@/utils/error";
import { useMutation } from "@tanstack/react-query";
// @ts-ignore
import useForm from "new-react-use-form";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
export const ForgotPasswordForm = () => {
  const form = useForm({
    email: "mysganguli@gmail.com",
  });
  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.ForgotPassword,
    Error,
    Calls.IRequest.ForgotPassword
  >({
    mutationFn: async (variables) => await ApiCalls.ForgotPassword(variables),
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
          value={form.email}
          onChange={(e) => {
            form.set("email", e.target.value);
            form.errors.clear("email");
          }}
          className={""}
          color={"blue"}
          size={"lg"}
          variant="static"
          placeholder={"Enter Email Address"}
          label="Email "
          error={form.errors.has("email")}
          crossOrigin={undefined}
        />
        <Typography color="red" className="mt-1 text-[12px] font-medium">
          {form.errors.has("email") && form.errors.get("email")}
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
    </form>
  );
};
