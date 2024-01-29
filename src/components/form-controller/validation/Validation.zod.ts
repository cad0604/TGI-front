import { z } from "zod";

export const ValidationZod = {
  login: z
    .object({
      email: z.string().email(),
      password: z.string(),
    })
    .strict(),
  forgot_password: z.object({
    email: z.string().email(),
  }),
  set_new_password: z
    .object({
      password: z.string(),
      cnfPassword: z.string(),
    })
    .strict()
    .refine((data) => data.password === data.cnfPassword, {
      message: "Passwords don't match",
      path: ["cnfPassword"],
    }),

  signup: z.object({
    firstName: z.string(),
    lastName: z.string(),
    gender: z.enum(["male", "female", "other"]), // Add actual enum values for gender
    dob: z.date(),
    city: z.string(),
    state: z.number(),
    zipCode: z.string(),
    ssn: z.string(),
    email: z.string(),
    phone: z.string(),
  }),
};

export namespace Validation {
  export const Form = {
    authentication: {
      signIn: z
        .object({
          email: z.string().email(),
          password: z.string(),
          remember: z.boolean(),
        })
        .strict(),
    },
    moduleOne: {
      signUp: z
        .object({
          firstName: z.string(),
          lastName: z.string(),
          gender: z.enum(["male", "female", "other"]),
          dob: z.date(),
          cityName: z.string(),
          zipCode: z.string(),
          ssn: z.string(),
          state: z.string(),
          email: z.string().email(),
          phone: z.string(),
          password: z.string(),
          cnfPassword: z.string(),
          // remember: z.boolean(),
          policy: z.boolean(),
        })
        .strict()
        .refine((data) => data.password === data.cnfPassword, {
          message: "Passwords don't match",
          path: ["cnfPassword"],
        }),

      docs: z
        .object({
          identityCard: z.custom<File>(),
          proofOfAddress: z.custom<File>(),
          socialSecurityCard: z.custom<File>(),
        })
        .strict(),
    },
  };
}

export type TValidationZod_Login = z.infer<typeof ValidationZod.login>;
export type TValidationZod_forgot_password = z.infer<
  typeof ValidationZod.forgot_password
>;
export type TValidationZod_Login_set_new_password = z.infer<
  typeof ValidationZod.set_new_password
>;

export type TValidationZod_signup = z.infer<typeof ValidationZod.signup>;
