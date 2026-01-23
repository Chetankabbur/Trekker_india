"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { categorizedTreks } from "@/features/mockData/categorizedTreks"
import TrekCard from "@/components/trek-card"

export default function TreksPage() {
    const [selectedCategory, setSelectedCategory] = useState("Karnataka")
    const categories = Object.keys(categorizedTreks)
    const displayedTreks = categorizedTreks[selectedCategory] || []

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-140 bg-gradient-to-b from-gray-800/60 to-gray-700/40">
                <img
                    src="/hero.png" // Reference the image from the public directory
                    alt="Mountain trek"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                    <p className="text-sm mb-2">Explore</p>
                    <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 text-balance">
                        Where to next?
                    </h1>
                </div>
            </section>

            {/* Category Filter */}
            <section className="bg-white py-6 px-4 border-b border-gray-200">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-lg font-medium transition-all ${selectedCategory === category
                                    ? "bg-black text-white"
                                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trek Cards Grid */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayedTreks.map((trek) => (
                            <TrekCard key={trek.id} trek={trek} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
