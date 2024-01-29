"use client";
import { useRouter, useSearchParams } from "next/navigation";
// @ts-ignore
import useForm from "new-react-use-form";
import {
  Input,
  Button,
  Typography,
  Select,
  Option,
  Checkbox,
} from "@material-tailwind/react";
import React, { FormEventHandler } from "react";
import { useMutation } from "@tanstack/react-query";
import { Calls } from "@/api/calls/type";
import { ApiCalls } from "@/api/calls/calls";
import { handleFormError } from "@/utils/error";
import { FileUploadWithOutCropWithOutMultiple } from "@/components/fileupload/fileupload";
import { FileUploadV2 } from "@/components/fileupload/fileuploadv2";
export const DocumentationDetailsForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const Form = useForm({
    application_id: searchParams.get("id"),
    bankStatement: null,
    tAndC: false,
    signature: null,
    ownership: null,
  });
  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.IBusinessFundingDocumentation,
    Error,
    Calls.IRequest.IBusinessFundingDocumentation
  >({
    mutationFn: (variables) => ApiCalls.Module.three.Documentation(variables),
    onSuccess: (res) => {
      router.push(`/done?id=${searchParams.get("id")}`);
    },
    onError: (e) => handleFormError(e as any, Form),
  });
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await mutateAsync(Form.data());
  };
  return (
    <form onSubmit={onSubmit} className={"p-[16px] w-full h-full"}>
      <Typography className={"px-[16px]  text-center"} variant="paragraph">
        Please fill all Loan Details in the required field and one of our agents
        will contact you within 24 hours
      </Typography>
      <div className={"flex flex-col gap-11 mt-12 justify-between"}>
        <div className={"flex flex-col  items-center gap-y-8  "}>
          <div className={"w-full"}>
            <h4>Upload Business bank statement of last 4 month</h4>
            <FileUploadV2
              fileId={"01"}
              nameofFile={"Business bank statement of last 4 month"}
              onChange={(file) => {
                Form.set("bankStatement", file);
                Form.errors.clear("bankStatement");
              }}
            />
          </div>
        </div>
        <div
          className={"w-full flex flex-col  items-center gap-y-8  md:gap-3.5 "}
        >
          <h3 className={"text-xl font-medium"}>Terms and conditions</h3>
          <div className={" w-full h-[200px] space-y-2  overflow-y-auto"}>
            <div className={"w-full"}>
              <h4 className={"font-medium"}>Loan Amount and Interest Rate</h4>
              <p>
                Specify the amount of funding being provided and the interest
                rate that will apply to the loan or investment.
              </p>
            </div>
            <div className={"w-full"}>
              <h4 className={"font-medium"}>Repayment Terms</h4>
              <p>
                Define the terms for repaying the funding, including the
                repayment schedule, frequency, and method (e.g., monthly
                installments).
              </p>
            </div>
            <div className={"w-full"}>
              <h4 className={"font-medium"}>Use of Funds</h4>
              <p>
                Clearly outline the purpose for which the funds can be used.
                This could include working capital, equipment purchase,
                expansion, etc.
              </p>
            </div>
          </div>
        </div>

        <div className={"flex flex-col  items-center gap-y-8  "}>
          <div className={"w-full"}>
            <h4>Upload Original Signature</h4>
            <FileUploadV2
              fileId={"02"}
              nameofFile={"Business bank statement of last 4 month"}
              onChange={(file) => {
                Form.set("signature", file);
                Form.errors.clear("signature");
              }}
            />
          </div>
        </div>
        <div className={"flex flex-col  items-center gap-y-8   "}>
          <Input
            required={true}
            value={Form.ownership}
            onChange={(e) => {
              Form.set("ownership", e.target.value);
              Form.errors.clear("ownership");
            }}
            error={Form.errors.has("ownership")}
            color={"red"}
            variant="static"
            label="Ownership %"
            placeholder="0"
            type={"number"}
            crossOrigin={undefined}
          />
        </div>
        <div className={"w-full"}>
          <Checkbox
            checked={Form.tAndC}
            onChange={(e) => {
              Form.set("tAndC", e.target.checked);
              Form.errors.clear("tAndC");
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
                  By clicking the submit button, I agree to the terms &
                  condition.
                </Typography>
              </div>
            }
          />
        </div>
      </div>
      <Button className={"mt-6"} color={"red"} fullWidth={true} type={"submit"}>
        Next
      </Button>
      <Button
        onClick={() => router.back()}
        variant={"outlined"}
        className={"mt-6"}
        color={"red"}
        fullWidth={true}
        type={"submit"}
      >
        Cancel
      </Button>
    </form>
  );
};
