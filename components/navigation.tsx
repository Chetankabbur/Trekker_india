"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import Image from "next/image"



export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Homepage", href: "/" },
    { name: "Treks", href: "/treks" },
    { name: "Customize", href: "/customize" },
    { name: "About", href: "#about" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 md:px-8 py-2 max-w-7xl mx-auto w-full">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/TREKKARLOGO.jpeg"
            alt="Trekkar Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors font-poppins"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-3">
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 text-sm hover:text-gray-900 transition-colors py-1 font-poppins"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
