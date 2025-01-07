import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-jindo-lighter-gray px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-jindo-darker-gray mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-jindo-gray mb-6 text-center max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link href="/" className="button">
        Go Back Home
      </Link>
      <img
        src="/images/404-dog.svg"
        alt="Lost Dog Illustration"
        className="mt-8 max-w-md w-full"
      />
    </div>
  );
}
