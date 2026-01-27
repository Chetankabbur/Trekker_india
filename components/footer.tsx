"use client"

import { Facebook, Instagram, MessageCircle, Copy, ExternalLink, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/TREKKARLOGO.jpeg"
                alt="Trekkar Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </Link>
            <h3 className="text-3xl font-bold mb-2 font-Marcellus">Trekkar India</h3>
            <p className="text-sm text-gray-600 mb-6 font-Marcellus">Our Expertise. Your Adventure.</p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-start">
            <h4 className="font-semibold text-sm mb-4 font-Marcellus">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-600 font-poppins">
              <li>
                <a href="#" className="hover:text-black transition ">
                  Homepage
                </a>
              </li>
              <li>
                <a href="/treks" className="hover:text-black transition">
                  Treks
                </a>
              </li>
              <li>
                <a href="/customize" className="hover:text-black transition">
                  Customize
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-start">
            <h4 className="font-semibold text-sm mb-4 font-Marcellus">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-600 font-poppins">
              <li>
                <a href="tel:+911234567890" className="text-gray-600 hover:text-black transition">
                  +91 9649646645
                </a>
              </li>
              <li>
                <a href="mailto:info@trekkarindia.com" className="text-gray-600 hover:text-black transition">
                  Trekkarindia@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-start">
            <h4 className="font-semibold text-sm mb-4 font-Marcellus">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600 font-poppins">
              <li>
                <a href="/terms-and-conditions" className="hover:text-black transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-black transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cancellation-refund-policy" className="hover:text-black transition">
                  Cancellation & Refund Policy
                </a>
              </li>
              <li>
                <a href="/payment-policy" className="hover:text-black transition">
                  Payment Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-6 mb-10 justify-center">
          <a
            href="https://www.facebook.com/TrekkarIndia"
            className="text-gray-600 hover:text-black transition"
          >
            <Facebook size={28} />
          </a>

          <a
            href="https://www.instagram.com/trekkarindia/"
            className="text-gray-600 hover:text-black transition"
          >
            <Instagram size={28} />
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-black transition"
          >
            <MessageCircle size={28} />
          </a>
        </div>
        {/* Social & Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-center">
          <p className="text-xs text-gray-600">© 2026 Trekkarindia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
