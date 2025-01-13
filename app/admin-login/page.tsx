"use client";

import { Login } from "@/app/admin-login/actions";
import FormButton from "@/components/form-button";
import FormInput from "@/components/form-input";
import { useFormState } from "react-dom";

export default function AdminLogin() {
  const [state, dispatch] = useFormState(Login, null);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-jindo-white rounded-lg shadow-lg p-8">
        <h3 className="text-center text-3xl mb-6">🐾</h3>
        <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
        {state?.fieldErrors.email && (
          <div className="bg-error text-jindo-white text-sm p-3 mb-4 rounded-md">
            {state.fieldErrors.email[0]}
          </div>
        )}
        <form action={dispatch} className="space-y-4">
          <FormInput
            required
            name="email"
            label="Email Address"
            type="email"
            placeholder="username@example.com"
          />
          <FormInput
            required
            name="password"
            label="Password"
            type="password"
            placeholder="••••••••"
          />

          <FormButton text="Login" />
        </form>
      </div>
    </div>
  );
}
