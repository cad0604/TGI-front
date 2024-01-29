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
export const ApplicantDetailsForm = () => {
  const searchParams = useSearchParams();

  const router = useRouter();
  const Form = useForm({
    application_id: searchParams.get("id"),
    firstName: "",
    lastName: "",
    creditScore: "",
    dob: "",
    ssn: "",
    addressLine1: "",
    addressLine2: null,
    city: "",
    state: "",
    zipCode: "",
  });
  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.IBusinessFundingApplicantDetails,
    Error,
    Calls.IRequest.IBusinessFundingApplicantDetails
  >({
    mutationFn: (variables) =>
      ApiCalls.Module.three.ApplicantDetails(variables),
    onSuccess: (res) => {
      router.push(
        `/leads/business-funding/loan-details?id=${searchParams.get("id")}`
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
        Please fill all Applicant Details in the required field and one of our
        agents will contact you within 24 hours
      </Typography>
      <div className={"flex flex-col gap-11 mt-12 justify-between"}>
        <div
          className={
            "flex flex-col md:flex-row items-center gap-y-8  md:gap-3.5 "
          }
        >
          <Input
            required={true}
            value={Form.firstName}
            onChange={(e) => {
              Form.set("firstName", e.target.value);
              Form.errors.clear("firstName");
            }}
            error={Form.errors.has("firstName")}
            color={"red"}
            variant="static"
            label="First Name"
            placeholder="Enter First Name"
            type={"text"}
            crossOrigin={undefined}
          />
          <Input
            required={true}
            value={Form.lastName}
            onChange={(e) => {
              Form.set("lastName", e.target.value);
              Form.errors.clear("lastName");
            }}
            error={Form.errors.has("lastName")}
            color={"red"}
            variant="static"
            label="Last Name "
            placeholder="Enter Last Name"
            type={"text"}
            crossOrigin={undefined}
          />
        </div>
        <div className={"flex flex-col  items-center gap-y-8 "}>
          <Input
            required={true}
            value={Form.creditScore}
            onChange={(e) => {
              Form.set("creditScore", e.target.value);
              Form.errors.clear("creditScore");
            }}
            error={Form.errors.has("creditScore")}
            color={"red"}
            variant="static"
            label="Approx Credit Ccore"
            placeholder="Enter Approx Credit Ccore"
            type={"text"}
            crossOrigin={undefined}
          />
        </div>
        <div
          className={
            "flex flex-col md:flex-row items-center gap-y-8  md:gap-3.5 "
          }
        >
          <Input
            required={true}
            value={Form.dob}
            onChange={(e) => {
              Form.set("dob", e.target.value);
              Form.errors.clear("dob");
            }}
            error={Form.errors.has("dob")}
            color={"red"}
            variant="static"
            label="Date of birth"
            placeholder="Enter Date Of Birth"
            type={"date"}
            crossOrigin={undefined}
          />
          <Input
            required={true}
            value={Form.ssn}
            onChange={(e) => {
              Form.set("ssn", e.target.value);
              Form.errors.clear("ssn");
            }}
            error={Form.errors.has("ssn")}
            color={"red"}
            variant="static"
            label="SSN"
            placeholder="Enter SSN"
            type={"text"}
            crossOrigin={undefined}
          />
        </div>

        <div
          className={
            "flex flex-col md:flex-row items-center gap-y-8  md:gap-3.5 "
          }
        >
          <Input
            required={true}
            value={Form.addressLine1}
            onChange={(e) => {
              Form.set("addressLine1", e.target.value);
              Form.errors.clear("addressLine1");
            }}
            error={Form.errors.has("addressLine1")}
            color={"red"}
            variant="static"
            label="Address Line 1"
            placeholder="Enter address line 1"
            type={"text"}
            crossOrigin={undefined}
          />
          <Input
            value={Form.addressLine2}
            onChange={(e) => {
              Form.set("addressLine2", e.target.value);
              Form.errors.clear("addressLine2");
            }}
            error={Form.errors.has("addressLine2")}
            color={"red"}
            variant="static"
            label="Address Line 2"
            placeholder="Enter address line 2"
            type={"text"}
            crossOrigin={undefined}
          />
        </div>
        <div
          className={
            "flex flex-col md:flex-row items-center gap-y-8  md:gap-3.5 "
          }
        >
          <Input
            required={true}
            value={Form.city}
            onChange={(e) => {
              Form.set("city", e.target.value);
              Form.errors.clear("city");
            }}
            error={Form.errors.has("city")}
            color={"red"}
            variant="static"
            label="City"
            placeholder="Enter City"
            type={"text"}
            crossOrigin={undefined}
          />
          <Select
            onChange={(e) => {
              Form.set("state", e);
              Form.errors.clear("state");
            }}
            color={"red"}
            error={Form.errors.has("state")}
            variant="static"
            label="State"
          >
            {[
              "Alabama",
              "Alaska",
              "Arizona",
              "Arkansas",
              "California",
              "Colorado",
              "Connecticut",
              "Delaware",
              "Florida",
              "Georgia",
              "Hawaii",
              "Idaho",
              "Illinois",
              "Indiana",
              "Iowa",
              "Kansas",
              "Kentucky",
              "Louisiana",
              "Maine",
              "Maryland",
              "Massachusetts",
              "Michigan",
              "Minnesota",
              "Mississippi",
              "Missouri",
              "Montana",
              "Nebraska",
              "Nevada",
              "New Hampshire",
              "New Jersey",
              "New Mexico",
              "New York",
              "North Carolina",
              "North Dakota",
              "Ohio",
              "Oklahoma",
              "Oregon",
              "Pennsylvania",
              "Rhode Island",
              "South Carolina",
              "South Dakota",
              "Tennessee",
              "Texas",
              "Utah",
              "Vermont",
              "Virginia",
              "Washington",
              "West Virginia",
              "Wisconsin",
              "Wyoming",
            ].map((value, index) => (
              <Option key={index} value={value.toLowerCase()}>
                {value}
              </Option>
            ))}
          </Select>
        </div>
        <div className={"flex flex-col  items-center gap-y-8   "}>
          <Input
            required={true}
            value={Form.zipCode}
            onChange={(e) => {
              Form.set("zipCode", e.target.value);
              Form.errors.clear("zipCode");
            }}
            error={Form.errors.has("zipCode")}
            color={"red"}
            variant="static"
            label="Zip Code"
            placeholder="zip Code"
            type={"text"}
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
