"use client";
import { useRouter } from "next/navigation";
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
export const BusinessDetailsForm = () => {
  const router = useRouter();
  const Form = useForm({
    businessLegalName: "",
    dba: "",
    entityType: "",
    startDate: "",
    taxId: "",
    businessType: "",
    phone: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const { mutateAsync, isPending } = useMutation<
    Calls.IResponse.BusinessFundingBusinessDetails,
    Error,
    Calls.IRequest.BusinessFundingBusinessDetails
  >({
    mutationFn: (variables) => ApiCalls.Module.three.BusinessDetails(variables),
    onSuccess: (res) => {
      router.push(
        `/leads/business-funding/applicant-details?id=${res.data.application_id}`
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
        Please fill all Business Details in the required field and one of our
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
            value={Form.businessLegalName}
            onChange={(e) => {
              Form.set("businessLegalName", e.target.value);
              Form.errors.clear("businessLegalName");
            }}
            error={Form.errors.has("businessLegalName")}
            color={"red"}
            variant="static"
            label="Business Legal Name"
            placeholder="Enter Business Legal Name"
            type={"text"}
            crossOrigin={undefined}
          />
          <Input
            required={true}
            value={Form.dba}
            onChange={(e) => {
              Form.set("dba", e.target.value);
              Form.errors.clear("dba");
            }}
            error={Form.errors.has("dba")}
            color={"red"}
            variant="static"
            label="DBA ( Doing business as ? ) "
            placeholder="Write down here "
            type={"text"}
            crossOrigin={undefined}
          />
        </div>
        <div
          className={
            "flex flex-col md:flex-row items-center gap-y-8  md:gap-3.5 "
          }
        >
          <Select
            onChange={(e) => {
              Form.set("entityType", e);
              Form.errors.clear("entityType");
            }}
            color={"red"}
            error={Form.errors.has("entityType")}
            variant="static"
            label="Choose Entity Type"
          >
            {["Corporation", "LLC", "Sole Proprietor", "Other"].map(
              (value, index) => (
                <Option key={index} value={value.toLowerCase()}>
                  {value}
                </Option>
              )
            )}
          </Select>
          <Input
            required={true}
            value={Form.startDate}
            onChange={(e) => {
              Form.set("startDate", e.target.value);
              Form.errors.clear("startDate");
            }}
            error={Form.errors.has("startDate")}
            color={"red"}
            variant="static"
            label="Business Start Date"
            placeholder="Enter Business Legal Name"
            type={"date"}
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
            value={Form.taxId}
            onChange={(e) => {
              Form.set("taxId", e.target.value);
              Form.errors.clear("taxId");
            }}
            error={Form.errors.has("taxId")}
            color={"red"}
            variant="static"
            label="Tax ID "
            placeholder="Enter Tax ID "
            type={"text"}
            crossOrigin={undefined}
          />

          <Select
            onChange={(e) => {
              Form.set("businessType", e);
              Form.errors.clear("businessType");
            }}
            color={"red"}
            error={Form.errors.has("businessType")}
            variant="static"
            label="Business Type"
          >
            {[
              "Technology and Information Technology (IT)",
              "Finance and Banking",
              "Healthcare and Pharmaceuticals",
              "Manufacturing",
              "Retail",
              "Energy",
              "Agriculture",
              "Telecommunications",
              "Entertainment and Media",
              "Transportation and Logistics",
              "Real Estate",
              "Consulting and Professional Services",
              "Other",
            ].map((value, index) => (
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
            value={Form.email}
            onChange={(e) => {
              Form.set("email", e.target.value);
              Form.errors.clear("email");
            }}
            error={Form.errors.has("email")}
            color={"red"}
            variant="static"
            label="Email"
            placeholder="Enter Email Address"
            type={"email"}
            crossOrigin={undefined}
          />
          <Input
            required={true}
            value={Form.phone}
            onChange={(e) => {
              Form.set("phone", e.target.value);
              Form.errors.clear("phone");
            }}
            error={Form.errors.has("phone")}
            color={"red"}
            variant="static"
            label="Phone "
            placeholder="Enter Phone"
            type={"tel"}
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
    </form>
  );
};
