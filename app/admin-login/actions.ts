"use server";

import { z } from "zod";

const formSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z.string({
    required_error: "Password is required.",
  }),
});

export const Login = async (prevState: any, formData: FormData) => {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = formSchema.safeParse(data);

  if (!result.success) {
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
};
