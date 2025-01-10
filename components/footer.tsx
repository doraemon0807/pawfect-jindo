import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-jindo-darker-gray text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p>&copy; Pawfect Jindo. All rights reserved.</p>
        <div className="mt-4 flex gap-6 justify-center *:text-jindo-light-gray">
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/about" className="">
            About
          </Link>
          <Link href="/adopt" className="">
            Adopt
          </Link>
          <Link href="/dogs" className="">
            Dogs
          </Link>
          <Link href="/contact" className="">
            Contact
          </Link>
          <Link href="/admin-login" className="">
            Admin
          </Link>
        </div>
        <div className="mt-6 flex gap-4 justify-center *:text-jindo-lighter-gray">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" "
          >
            Facebook
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" "
          >
            Instagram
          </Link>
          <Link href="mailto:info@adoptjindo.org" className="">
            Email Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
