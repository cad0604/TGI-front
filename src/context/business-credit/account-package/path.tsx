"use client";
import { ReactNode } from "react";
// import { HeaderSubTitle } from "@/components/Onboarding_elements/one/header.subtitle";
import { HeaderSubTitle } from "@/components/onboarding_elements/one/header.subtitle";

interface BusinessCreditAccountPackagePage {
  title: string;
  description: ReactNode | JSX.Element;
}

export interface DesktopBusinessCreditAccountPackagePagesType {
  "/leads/business-credit/account-package/step1": BusinessCreditAccountPackagePage;
  "/leads/business-credit/account-package/step2": BusinessCreditAccountPackagePage;
  "/leads/business-credit/account-package/step3": BusinessCreditAccountPackagePage;
}

export const DesktopBusinessCreditAccountPackagePages: DesktopBusinessCreditAccountPackagePagesType = {
  "/leads/business-credit/account-package/step1": {
    title: "Option1",
    description: <HeaderSubTitle />,
  },
  "/leads/business-credit/account-package/step2": {
    title: "Choose From Below Options",
    description: <HeaderSubTitle />,
  },
  "/leads/business-credit/account-package/step3": {
    title: "Option3",
    description: <HeaderSubTitle />,
  },
};
