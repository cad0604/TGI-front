"use client";
import { Button, Spinner } from "@material-tailwind/react";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
interface AccountPackageButtonProps {
  isPending: boolean;
  formId: string;
  buttonText: string;
}
export const AccountPackageButton: React.FC<AccountPackageButtonProps> = (props) => {
  const router = useRouter();
  const pathName = usePathname();
  const handleOnClick = () => {
    if (pathName === "/onboarding/pcr/sign-up") {
      console.log(pathName);
    } else {
      return null;
    }
  };

  return (
    <>
      <Button
        onClick={handleOnClick}
        className={
          "flex flex-row items-center justify-center md:text-[16px] text-[13px] bg-[#137FFF] md:w-[80%] w-full"
        }
        disabled={props.isPending}
        color={"blue"}
        size={"lg"}
        form={props.formId}
        type={"submit"}
      >
        {props.isPending ? <Spinner /> : props.buttonText}
      </Button>
    </>
  );
};
