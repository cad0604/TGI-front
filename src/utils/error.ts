import { AxiosError } from "axios";

// @ts-ignore
import { FormType } from "new-react-use-form/src/hooks/useForm";
type ValidationError = {
  validation: string;
  code: string;
  message: string;
  path: string[];
};
type BodyErrorItem = {
  type: string;
  errors: {
    issues: ValidationError[];
    name: string;
  };
};

type GenericErrorItem = {
  code: number;
  Success: boolean;
  message: string;
};

export const handleFormError = (e: AxiosError, form: FormType) => {
  const error = e as AxiosError;
  if (error.response?.status === 403) {
    const { code, Success, message } = error.response.data as GenericErrorItem;
    console.error(
      `Generic Error: Code ${code}, Success: ${Success}, Message: ${message}`
    );
  } else {
    const bodyError = error.response?.data as BodyErrorItem[];

    if (Array.isArray(bodyError)) {
      const mappedErrors = bodyError?.flatMap((errorItem) =>
        errorItem.errors.issues.map((issue) => ({
          message: issue.message,
          path: issue.path.join("."),
        }))
      );

      mappedErrors?.forEach(({ path, message }) => {
        form.errors.set(path, message);
        return {
          path,
          message,
        };
      });
    } else {
      const { path, message } = bodyError || {};
      form.errors.set(path, message);
      return {
        path,
        message,
      };
    }
  }
};
