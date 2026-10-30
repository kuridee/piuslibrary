"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ExternalLink } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-20">
        
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Pius XII College Logo"
              fill
              className="object-contain rounded-md transition-transform group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-red-600 transition-colors">
              PIUS XII COLLEGE ILOILO
            </span>
            <span className="text-[11px] font-semibold tracking-wider text-red-600 uppercase">
              Library Portal
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link
            href="/"
            className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-red-600 hover:bg-slate-100/70 rounded-lg transition-colors"
          >
            Home
          </Link>
          <Link
            href="/facilities"
            className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-red-600 hover:bg-slate-100/70 rounded-lg transition-colors"
          >
            Library Facility
          </Link>
          <Link
            href="/about"
            className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-red-600 hover:bg-slate-100/70 rounded-lg transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-red-600 hover:bg-slate-100/70 rounded-lg transition-colors"
          >
            Contact Us
          </Link>

          {/* OPAC CTA Button */}
          <Link
            href="https://opac-sepia.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>OPAC Catalog</span>
            <ExternalLink size={15} />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="lg:hidden p-2 text-slate-700 hover:text-red-600 hover:bg-slate-100 rounded-lg focus:outline-none transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile / Tablet Dropdown Drawer */}
      <div
        className={`lg:hidden overflow-hidden bg-white border-b border-slate-200 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-4 px-6" : "max-h-0 opacity-0 py-0 px-6"
        }`}
      >
        <div className="flex flex-col space-y-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-slate-800 hover:text-red-600 py-1 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/facilities"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-slate-800 hover:text-red-600 py-1 transition-colors"
          >
            Library Facility
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-slate-800 hover:text-red-600 py-1 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-slate-800 hover:text-red-600 py-1 transition-colors"
          >
            Contact Us
          </Link>
          <div className="pt-2">
            <Link
              href="https://opac-sepia.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-xl shadow-sm transition-colors"
            >
              <span>Explore OPAC Catalog</span>
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}