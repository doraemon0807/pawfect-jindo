"use client";

import { useFormStatus } from "react-dom";

interface IFormButton {
  text: string;
}

export default function FormButton({ text }: IFormButton) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-jindo-blue text-jindo-white py-2 px-4 max-h-10 rounded-md hover:bg-jindo-dark-blue focus:scale-95 transition-all disabled:bg-jindo-light-blue disabled:cursor-not-allowed"
    >
      {pending ? (
        <div className="loading loading-spinner" />
      ) : (
        <span className="">{text}</span>
      )}
    </button>
  );
}
