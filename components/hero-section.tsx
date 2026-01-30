"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import TrekSearch from "./trek-search"


export default function HeroSection() {
  return (
    <section className="relative w-full h-screen md:h-[60vh] lg:h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/hero.png?height=1080&width=1920&query=mountain-landscape-nature)",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4 mb-4 sm:mb-6 md:mb-8">
        <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-7xl font-marcellus text-white leading-tight">
          Where Earth Touches Sky
        </h2>
      </div>

      {/* TrekSearch Component - placed just below the text with bounded container */}
      <div className="relative z-10 text-center px-4 mt-4 sm:mt-6 md:mt-8 w-full max-w-md">
        <div className="flex flex-col items-center">
          <TrekSearch />
        </div>
      </div>

      {/* Left Control */}
      {/* <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-8 z-10 hidden md:flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
          <ChevronLeft size={20} className="text-white" />
        </div>
        <span className="text-white text-sm">Scroll Down</span>
      </div> */}

      {/* Right Control */}
      {/* <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-8 z-10 hidden md:flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
          <ChevronRight size={20} className="text-white" />
        </div>
      </div> */}
    </section>
  )
}