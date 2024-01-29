"use client";
import { ReactNode } from "react";
// import { HeaderSubTitle } from "@/components/Onboarding_elements/one/header.subtitle";
import { HeaderSubTitle } from "@/components/onboarding_elements/one/header.subtitle";

interface BusinessCreditAddClientPage {
  title: string;
  description: ReactNode | JSX.Element;
}

export interface DesktopBusinessCreditAddClientPagesType {
  "/leads/business-credit/add-client/option1": BusinessCreditAddClientPage;
  "/leads/business-credit/add-client/option2": BusinessCreditAddClientPage;
  "/leads/business-credit/add-client/option3": BusinessCreditAddClientPage;
}

export const DesktopBusinessCreditAddClientPages: DesktopBusinessCreditAddClientPagesType = {
  "/leads/business-credit/add-client/option1": {
    title: "Option1",
    description: <HeaderSubTitle />,
  },
  "/leads/business-credit/add-client/option2": {
    title: "Choose From Below Options",
    description: <HeaderSubTitle />,
  },
  "/leads/business-credit/add-client/option3": {
    title: "Option3",
    description: <HeaderSubTitle />,
  },
};
