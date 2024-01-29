"use client";
import { ReactNode } from "react";
import { HeaderSubTitle } from "@/components/onboarding_elements/one/header.subtitle";

interface OnboardingPage {
  title: string;
  description: ReactNode | JSX.Element;
}

export interface DesktopOnboardingPagesType {
  "/onboarding/pcr/sign-up": OnboardingPage;
  "/onboarding/pcr/pull-report": OnboardingPage;
  "/onboarding/pcr/meeting": OnboardingPage;
  "/onboarding/pcr/plans": OnboardingPage;
  "/onboarding/pcr/docs-upload": OnboardingPage;
  "/onboarding/pcr/pf": OnboardingPage;
}

export const DesktopOnboardingPages: DesktopOnboardingPagesType = {
  "/onboarding/pcr/sign-up": {
    title: "Create your TGIScaleme account now!",
    description: <HeaderSubTitle />,
  },
  "/onboarding/pcr/pull-report": {
    title: "Get credit report",
    description: <HeaderSubTitle />,
  },
  "/onboarding/pcr/meeting": {
    title: "Get Started by Scheduling your Free Credit Consultation.",
    description: <HeaderSubTitle />,
  },
  "/onboarding/pcr/plans": {
    title:
      "TGI Scale Me invites you to embark on your credit scaling journey today",
    description: <HeaderSubTitle />,
  },
  "/onboarding/pcr/docs-upload": {
    title: "Upload your Verification Documents",
    description: <HeaderSubTitle />,
  },
  "/onboarding/pcr/pf": {
    title: "Freeze or make your positive account !",
    description: <HeaderSubTitle />,
  },
};
