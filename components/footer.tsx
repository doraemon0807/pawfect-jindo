import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p>&copy; Pawfect Jindo. All rights reserved.</p>
        <div className="mt-4">
          <Link href="/" className="mr-6 text-gray-400 hover:text-white">
            Home
          </Link>
          <Link href="/about" className="mr-6 text-gray-400 hover:text-white">
            About
          </Link>
          <Link href="/adopt" className="mr-6 text-gray-400 hover:text-white">
            Adopt
          </Link>
          <Link href="/dogs" className="mr-6 text-gray-400 hover:text-white">
            Dogs
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-white">
            Contact
          </Link>
        </div>
        <div className="mt-6">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 text-gray-400 hover:text-white"
          >
            Facebook
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 text-gray-400 hover:text-white"
          >
            Instagram
          </Link>
          <Link
            href="mailto:info@adoptjindo.org"
            className="text-gray-400 hover:text-white"
          >
            Email Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
