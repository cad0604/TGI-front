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
} from "@material-tailwind/react";
import React, { FormEventHandler } from "react";
import { useMutation } from "@tanstack/react-query";
import { Calls } from "@/api/calls/type";
import { ApiCalls } from "@/api/calls/calls";
import { handleFormError } from "@/utils/error";
export const LoanDetailsForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const Form = useForm({
    application_id: searchParams.get("id"),
    loanAmount: "",
    useOfFunds: "",
    avgMonthlyRevenue: "",
    desiredProduct: "",
    existingLoan: false,
    balance: 0,
  });
  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.IBusinessFundingLoanDetails,
    Error,
    Calls.IRequest.IBusinessFundingLoanDetails
  >({
    mutationFn: (variables) => ApiCalls.Module.three.LoanDetails(variables),
    onSuccess: (res) => {
      router.push(
        `/leads/business-funding/documentation?id=${searchParams.get("id")}`
      );
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
        <div
          className={
            "flex flex-col md:flex-row items-center gap-y-8  md:gap-3.5 "
          }
        >
          <Select
            onChange={(e) => {
              Form.set("loanAmount", e);
              Form.errors.clear("loanAmount");
            }}
            color={"red"}
            error={Form.errors.has("loanAmount")}
            variant="static"
            label="Loan Amount Requested ($)"
          >
            {["10,000", "20,000", "50,000+"].map((value, index) => (
              <Option key={index} value={value.toLowerCase()}>
                {value}
              </Option>
            ))}
          </Select>
          <Select
            onChange={(e) => {
              Form.set("useOfFunds", e);
              Form.errors.clear("useOfFunds");
            }}
            color={"red"}
            error={Form.errors.has("useOfFunds")}
            variant="static"
            label="Use Of Funds"
          >
            {["test", "test2", "test3"].map((value, index) => (
              <Option key={index} value={value.toLowerCase()}>
                {value}
              </Option>
            ))}
          </Select>
        </div>
        <div
          className={
            "flex flex-col md:flex-row items-center gap-y-8  md:gap-3.5 "
          }
        >
          <Input
            required={true}
            value={Form.avgMonthlyRevenue}
            onChange={(e) => {
              Form.set("avgMonthlyRevenue", e.target.value);
              Form.errors.clear("avgMonthlyRevenue");
            }}
            error={Form.errors.has("avgMonthlyRevenue")}
            color={"red"}
            variant="static"
            label="Average Monthly Revenue"
            placeholder="$"
            type={"number"}
            crossOrigin={undefined}
          />
          <Select
            onChange={(e) => {
              Form.set("desiredProduct", e);
              Form.errors.clear("desiredProduct");
            }}
            color={"red"}
            error={Form.errors.has("desiredProduct")}
            variant="static"
            label="Desired Product"
          >
            {["test", "test1", "test2", "test3"].map((value, index) => (
              <Option key={index} value={value.toLowerCase()}>
                {value}
              </Option>
            ))}
          </Select>
        </div>
        <div
          className={
            "flex flex-col md:flex-row items-center gap-y-8  md:gap-3.5 "
          }
        >
          <Select
            onChange={(e) => {
              Form.set("existingLoan", e === "true");
              Form.errors.clear("existingLoan");
            }}
            color={"red"}
            error={Form.errors.has("existingLoan")}
            variant="static"
            label="Existing Loan Balances"
          >
            {["Yes", "No"].map((value, index) => (
              <Option key={index} value={value}>
                {value}
              </Option>
            ))}
          </Select>
          <Input
            required={true}
            value={Form.balance}
            onChange={(e) => {
              Form.set("balance", e.target.value);
              Form.errors.clear("balance");
            }}
            error={Form.errors.has("balance")}
            color={"red"}
            variant="static"
            label="Balance"
            placeholder="$"
            type={"number"}
            crossOrigin={undefined}
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
