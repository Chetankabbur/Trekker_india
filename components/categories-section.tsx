"use client";
import { useState } from "react"
import TrekCard from "./trek-card"
import { categorizedTreks } from "@/features/mockData/categorizedTreks"



const categories = ["Karnataka", "Kerala", "Tamil Nadu", "Goa", "North Tours", "North East", "Spiti", "International"]

export default function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState("Karnataka")

  return (
    <section className="w-full bg-white py-10 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg tracking-wide mb-2 font-poppins">Explore the</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 font-Marcellus">Categories</h2>
          <p className="text-gray-500 text-lg font-poppins">Recommended</p>
        </div>


        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 border-b border-gray-200 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm md:text-base font-medium transition-all pb-2 ${activeCategory === category ? "text-black border-b-2 border-black" : "text-gray-600 hover:text-black"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Horizontal scrollable trek cards grid */}
        <div className="flex overflow-x-auto space-x-6 px-4 pb-4 items-stretch scrollbar-hide">
          {categorizedTreks[activeCategory as keyof typeof categorizedTreks]?.map((trek) => (
            <div key={trek.id} className="flex-none w-72 sm:w-80">
              <TrekCard trek={trek} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
