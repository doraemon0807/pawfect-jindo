"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const path = usePathname();

  const aboutPath = "/about-us";
  const adoptionPath = "/adoption-process";
  const dogsPath = "/find-a-dog";
  const contactPath = "/contact-us";
  const donatePath = "/donate";

  return (
    <header className="bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img
            src="/logo.png" // Placeholder logo, replace with the actual logo
            alt="Pawfect Jindo Logo"
            className="h-12"
          />
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 text-jindo-dark-gray font-semibold flex items-center">
          <Link
            href={`${aboutPath}`}
            className={`hover:text-jindo-yellow pb-2 ${
              path === aboutPath ? "border-b-4" : ""
            }`}
          >
            About Us
          </Link>
          <Link
            href={`${adoptionPath}`}
            className={`hover:text-jindo-yellow pb-2 ${
              path === adoptionPath ? "border-b-4" : ""
            }`}
          >
            Adoption Process
          </Link>
          <Link
            href={`${dogsPath}`}
            className={`hover:text-jindo-yellow pb-2 ${
              path === dogsPath ? "border-b-4" : ""
            }`}
          >
            Find Dogs
          </Link>
          <Link
            href={`${contactPath}`}
            className={`hover:text-jindo-yellow pb-2 ${
              path === contactPath ? "border-b-4" : ""
            }`}
          >
            Contact Us
          </Link>

          <Link href={`${donatePath}`} className="text-jindo-light-gray pb-2">
            <div className="button">Donate</div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
