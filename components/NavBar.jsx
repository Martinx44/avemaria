'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const navRef = useRef(null);

  const handleToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <nav className="relative" ref={navRef}>
      <div className="flex justify-end mb-4">
        <button
          className="text-[#858585] focus:outline-none bg-transparent"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-12 right-0 bg-white w-48 rounded-lg shadow-lg z-50">
          <ul className="text-gray-800">
            <li className="p-4 hover:bg-gray-100">
              <Link href="/" className="block w-full h-full">
                Home
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-100">
              <Link href="/2000hailmary/opening" className="block w-full h-full">
                opening
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-100">
              <Link href="/contact" className="block w-full h-full">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}