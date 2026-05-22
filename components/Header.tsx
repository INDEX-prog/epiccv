"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/90 backdrop-blur-md border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <span className="text-navy-900 font-medieval font-bold text-xl">E</span>
            </div>
            <span className="font-medieval text-xl md:text-2xl gradient-text font-bold">
              EpicCV
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-gray-300 hover:text-gold-400 transition-colors font-medium"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-300 hover:text-gold-400 transition-colors font-medium"
            >
              How It Works
            </Link>
            <Link
              href="#free-trial"
              className="text-gray-300 hover:text-gold-400 transition-colors font-medium"
            >
              Free Preview
            </Link>
            <Link
              href="#pricing"
              className="text-gray-300 hover:text-gold-400 transition-colors font-medium"
            >
              Pricing
            </Link>
            <Link href="https://epiccv.vercel.app" className="btn-primary text-base py-2 px-6">
              <span className="mr-1">🎁</span>
              Try Free
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-300 hover:text-gold-400 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gold-500/20">
            <nav className="flex flex-col gap-4">
              <Link
                href="#features"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-gold-400 transition-colors font-medium py-2"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-gold-400 transition-colors font-medium py-2"
              >
                How It Works
              </Link>
              <Link
                href="#free-trial"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-gold-400 transition-colors font-medium py-2"
              >
                Free Preview
              </Link>
              <Link
                href="#pricing"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-gold-400 transition-colors font-medium py-2"
              >
                Pricing
              </Link>
              <Link
                href="https://epiccv.vercel.app"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary text-base py-3 px-6 text-center mt-2"
              >
                <span className="mr-1">🎁</span>
                Try Free Preview
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
