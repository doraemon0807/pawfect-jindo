import Link from "next/link";

export default function NavBar() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <img
          src="/logo.png" // Placeholder logo, replace with the actual logo
          alt="Pawfect Jindo"
          className="h-12"
        />

        {/* Navigation */}
        <nav className="space-x-6 text-gray-700 font-semibold flex items-center">
          <Link href="/about" className="hover:text-yellow-500">
            About
          </Link>
          <Link href="/adopt" className="hover:text-yellow-500">
            Adopt
          </Link>
          <Link href="/dogs" className="hover:text-yellow-500">
            Dogs
          </Link>
          <Link href="/contact" className="hover:text-yellow-500">
            Contact
          </Link>

          <Link href="donate" className="text-gray-50">
            <div className="bg-green-700 px-3 py-2 rounded-md hover:bg-green-600">
              Donate
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
