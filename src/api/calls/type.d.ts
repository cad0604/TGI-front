export namespace Calls {
  export namespace IResponse {
    export type TString = string | null | number;
    export type TStatus = string | null | "0" | "1" | "2";
    export type TIntervalType = "day" | "month" | "week" | "year";
    export type TBulletPoints = {
      value: TString;
      highlight: boolean;
    };
    type code = number;
    type Success = boolean;
    type message = string;

    export interface BaseResponse {
      code: code;
      Success: Success;
      message: message;
      urlPath?: string;
    }
    export interface SignIn extends BaseResponse {
      accessToken: string;
      refreshToken: string;
      redirectPath: string;
    }
    export interface ModulesSignUp extends SignIn {}
    export interface DocUploaded extends BaseResponse {}
    export interface ForgotPassword extends BaseResponse {}
    export interface PullReport extends BaseResponse {}
    export interface Meeting extends BaseResponse {}
    export interface DocsUploads extends BaseResponse {}
    export interface PFAccount extends BaseResponse {}
    interface Pricing {
      fullPrice: number;
      emiPrice: number;
      intervalType: string;
      intervalCount: number;
    }

    interface bulletPoints {
      value: string;
      highlight: boolean;
    }

    export interface ModuleOnePackage {
      _id: string;
      name: string;
      marketingTag: string;
      module: string;
      position: string;
      pricing: Pricing;
      bulletPoints: bulletPoints[];
      status: string;
      createdAt: string;
      updatedAt: string;
    }
    export interface ModuleOnePackageResponse {
      code: number;
      Success: boolean;
      message: string;
      data: CreditPlan[];
    }
    export interface Checkout extends BaseResponse {
      url: string;
    }
    export interface LeadRequestFour extends BaseResponse {}
    export interface BusinessFundingBusinessDetails extends BaseResponse {
      data: {
        application_id: string;
      };
    }
    export interface IBusinessFundingApplicantDetails extends BaseResponse {}
    export interface IBusinessFundingLoanDetails extends BaseResponse {}
    export interface IBusinessFundingDocumentation extends BaseResponse {}
  }

  export namespace IRequest {
    export interface SignIn {
      email: string;
      password: string;
      remember: boolean;
    }
    export interface ForgotPassword {
      email: string;
    }
    export interface ModuleOneSignUp {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      gender: "male" | "female" | "other";
      dob: Date;
      cityName: string;
      zipCode: string;
      ssn: string;
      state: string;
      phone: string;
      cnfPassword: string;
      policy: boolean;
    }
    export interface Docs {
      identityCard1?: File;
      proofOfAddress1?: File;
      socialSecurityCard1?: File;
      identityCard2?: File;
      proofOfAddress2?: File;
      socialSecurityCard2?: File;
    }
    export interface PullReport {
      provider: string;
      username: string;
      phone: string;
      password: string;
      notes: string | null;
    }

    export interface PFAccount {
      primaryAccounts: string[];
      freezeAccount: string[];
    }
    export interface Checkout {
      packageId: string;
      paymentType: "full" | "emi";
    }
    export interface LeadRequestFour {
      companyName: string;
      ownerName: string;
      email: string;
      phone: string;
      budget: number;
      days: number;
    }
    interface BusinessFundingBusinessDetails {
      businessLegalName: string;
      dba: string;
      entityType: string;
      startDate: string;
      taxId: string;
      businessType: string;
      phone: string;
      email: string;
      addressLine1: string;
      addressLine2: string;
      city: string;
      state: string;
      zipCode: string;
    }

    interface IBusinessFundingApplicantDetails {
      application_id: string;
      firstName: string;
      lastName: string;
      creditScore: string;
      dob: string;
      ssn: string;
      addressLine1: string;
      addressLine2: string;
      city: string;
      state: string;
      zipCode: string;
    }
    interface IBusinessFundingLoanDetails {
      application_id: string;
      loanAmount: string;
      useOfFunds: string;
      avgMonthlyRevenue: string;
      desiredProduct: string;
      existingLoan: boolean;
      balance: string;
    }
    interface IBusinessFundingDocumentation {
      application_id: string;
      bankStatement: File;
      tAndC: string;
      signature: File;
      ownership: string;
    }
  }
}
