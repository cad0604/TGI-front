import api from "@/api/config/config";
import { Calls } from "@/api/calls/type";

export namespace ApiCalls {
  export const SignIn = async (
    data: Calls.IRequest.SignIn
  ): Promise<Calls.IResponse.SignIn> => {
    return await api
      .post("/authentication.sign_in", data)
      .then((res) => res.data);
  };
  export const ForgotPassword = async (
    data: Calls.IRequest.ForgotPassword
  ): Promise<Calls.IResponse.SignIn> => {
    return await api
      .post("/authentication.forgot_password", data)
      .then((res) => res.data);
  };
  export const Module = {
    one: {
      Status: async () => {
        return await api
          .get("/")
          .then((res) => res.data)
          .catch((e) => e.response.data);
      },
      signUp: async (
        data: Calls.IRequest.ModuleOneSignUp
      ): Promise<Calls.IResponse.ModulesSignUp> => {
        return await api
          .post("/modules/one.sign_up", data)
          .then((res) => res.data);
      },
      bureauCredential: async (
        data: Calls.IRequest.PullReport
      ): Promise<Calls.IResponse.PullReport> => {
        return await api
          .post("/modules/one.bureau_credential", data)
          .then((res) => res.data);
      },
      meeting: async (): Promise<Calls.IResponse.Meeting> => {
        return await api.post("/modules/one.meeting").then((res) => res.data);
      },
      docs: async (
        data: Calls.IRequest.Docs
      ): Promise<Calls.IResponse.DocUploaded> => {
        const formData = new FormData();
        if (data) {
          formData.append("identityCard1", data.identityCard1 as File);
          formData.append("proofOfAddress1", data.proofOfAddress1 as File);
          formData.append(
            "socialSecurityCard1",
            data.socialSecurityCard1 as File
          );
          formData.append("identityCard2", data.identityCard2 as File);
          formData.append("proofOfAddress2", data.proofOfAddress2 as File);
          formData.append(
            "socialSecurityCard2",
            data.socialSecurityCard2 as File
          );
        }
        return await api
          .postForm("/modules/one.docs", formData)
          .then((res) => res.data)
          .catch((e) => e.response.data);
      },
      plans: async (): Promise<Calls.IResponse.ModuleOnePackageResponse> => {
        return await api.get("/modules/one.plans").then((res) => res?.data);
      },
      PFAccount: async (
        data: Calls.IRequest.PFAccount
      ): Promise<Calls.IResponse.PFAccount> => {
        return await api
          .post("/modules/one.fp.account", data)
          .then((res) => res?.data);
      },
    },
    three: {
      BusinessDetails: async (
        data: Calls.IRequest.BusinessFundingBusinessDetails
      ) => {
        return await api
          .post("/modules/three.lead.business_details", data)
          .then((res) => res?.data);
      },
      ApplicantDetails: async (
        data: Calls.IRequest.IBusinessFundingApplicantDetails
      ) => {
        return await api
          .post("/modules/three.lead.applicant_details", data)
          .then((res) => res?.data);
      },
      LoanDetails: async (data: Calls.IRequest.IBusinessFundingLoanDetails) => {
        return await api
          .post("/modules/three.lead.loan_details", data)
          .then((res) => res?.data);
      },
      Documentation: async (
        data: Calls.IRequest.IBusinessFundingDocumentation
      ) => {
        const formData = new FormData();
        if (data) {
          formData.append("application_id", data.application_id);
          formData.append("bankStatement", data.bankStatement as File);
          formData.append("signature", data.signature as File);
          formData.append("ownership", data.ownership);
          formData.append("tAndC", data.tAndC);
        }
        return await api
          .post("/modules/three.lead.documentation", formData)
          .then((res) => res?.data);
      },
    },
    four: {
      lead: async (data: Calls.IRequest.LeadRequestFour) => {
        return await api
          .post("/modules/four.lead.request", data)
          .then((res) => res?.data);
      },
    },
  };
  export const Checkout = async (
    data: Calls.IRequest.Checkout
  ): Promise<Calls.IResponse.Checkout> => {
    return await api.post("/checkout", data).then((res) => res.data.data);
  };

  export const CheckOutBilling = async (data: {
    type: "module1" | "module2";
    _id: string;
    paytype: "full" | "emi";
  }) => {
    return await api
      .get("/checkout.bill_details", {
        params: { ...data },
      })
      .then((res) => res.data.data);
  };
}
