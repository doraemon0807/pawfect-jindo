import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="bg-jindo-black text-white px-6 py-3 rounded-md hover:bg-jindo-green transition-all duration-300"
      >
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
