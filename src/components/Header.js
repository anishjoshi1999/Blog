import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1>
          {" "}
          <Link href="/" className="text-3xl font-bold text-gray-800">
            Anish Joshi
          </Link>
        </h1>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
