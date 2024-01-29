"use client";
import { Input, Button, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
// @ts-ignore
import useForm from "new-react-use-form";
import { FormEventHandler } from "react";
import { useMutation } from "@tanstack/react-query";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import { handleFormError } from "@/utils/error";
export const LeadForm = () => {
  const router = useRouter();
  const Form = useForm({
    companyName: "",
    ownerName: "",
    email: "",
    phone: "",
    budget: null,
    days: null,
  });
  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.LeadRequestFour,
    Error,
    Calls.IRequest.LeadRequestFour
  >({
    mutationFn: (variables) => ApiCalls.Module.four.lead(variables),
    onSuccess: (res) => {
      router.push("/done");
    },
    onError: (e) => handleFormError(e as any, Form),
  });
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await mutateAsync(Form.data());
  };
  return (
    <form onSubmit={onSubmit} className={"p-[16px] w-full h-full"}>
      <Typography className={"text-center"} variant="h4">
        Request For Digital Marketing
      </Typography>
      <div
        className={
          "mt-12 items-center justify-center flex flex-col w-full gap-8"
        }
      >
        <div className={"w-full"}>
          <Input
            value={Form.companyName}
            onChange={(e) => {
              Form.set("companyName", e.target.value);
              Form.errors.clear("companyName");
            }}
            required={true}
            color={"red"}
            variant="static"
            label="Company Name"
            placeholder="Enter legal name of company"
            error={Form.errors.has("companyName")}
            crossOrigin={undefined}
          />
          <Typography color="red" className="mt-1 text-[12px] font-medium">
            {Form.errors.has("companyName") && Form.errors.get("companyName")}
          </Typography>
        </div>
        <Input
          value={Form.ownerName}
          onChange={(e) => {
            Form.set("ownerName", e.target.value);
          }}
          required={true}
          color={"red"}
          variant="static"
          label="Owner Name"
          placeholder="Enter registerd owner name"
          crossOrigin={undefined}
        />
        <Input
          value={Form.email}
          onChange={(e) => {
            Form.set("email", e.target.value);
          }}
          required={true}
          color={"red"}
          variant="static"
          type={"email"}
          label="Email"
          placeholder="Enter email address"
          crossOrigin={undefined}
        />
        <Input
          value={Form.phone}
          onChange={(e) => {
            Form.set("phone", e.target.value);
          }}
          type={"tel"}
          required={true}
          color={"red"}
          variant="static"
          label="Phone"
          placeholder="Enter conatct phone number"
          crossOrigin={undefined}
        />
        <Input
          value={Form.days}
          onChange={(e) => {
            Form.set("days", Number(e.target.value));
          }}
          required={true}
          type={"number"}
          color={"red"}
          variant={"static"}
          label="Days"
          placeholder="Enter the duration of the camping"
          crossOrigin={undefined}
        />
        <Input
          value={Form.budget}
          onChange={(e) => {
            Form.set("budget", Number(e.target.value));
          }}
          required={true}
          type={"number"}
          color={"red"}
          variant="static"
          label="Budget "
          placeholder="Enter your budget"
          crossOrigin={undefined}
        />

        <div className={"w-full h-fit space-y-4"}>
          <Button color={"red"} fullWidth={true} type={"submit"}>
            Submit
          </Button>
          <Button
            onClick={() => router.push("/")}
            color={"red"}
            variant={"outlined"}
            fullWidth={true}
          >
            Back
          </Button>
        </div>
      </div>
    </form>
  );
};
