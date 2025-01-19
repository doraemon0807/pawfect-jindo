"use server";

import db from "@/lib/db";
import { z } from "zod";
import bcrypt from "bcrypt";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

const loginFailMessage = "Invalid Login Credential.";

const checkEmailExists = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  return Boolean(user);
};

const formSchema = z.object({
  email: z
    .string()
    .email()
    .toLowerCase()
    .refine(checkEmailExists, loginFailMessage),
  password: z.string({
    required_error: "Password is required.",
  }),
});

export const Login = async (prevState: any, formData: FormData) => {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // Validate login form
  const result = await formSchema.safeParseAsync(data);

  if (!result.success) {
    return result.error.flatten();
  } else {
    // Find a user with the email
    const user = await db.user.findUnique({
      where: {
        email: result.data.email,
      },
      select: {
        id: true,
        password: true,
      },
    });
    // If the user is found, check password hash
    const ok = await bcrypt.compare(
      result.data.password,
      user!.password ?? "xxxx"
    );
    if (ok) {
      // Log user in
      const session = await getSession();
      session.id = user!.id;
      redirect("/admin/dashboard");
    } else {
      return {
        fieldErrors: {
          email: [loginFailMessage],
        },
      };
    }
  }
};
