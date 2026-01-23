"use client"

import { useState, useMemo } from "react"
import { Search, X } from "lucide-react"
import { categorizedTreks } from "@/features/mockData/categorizedTreks"
import Link from "next/link"



export default function TrekSearch() {
    const [searchTerm, setSearchTerm] = useState("")
    const [isOpen, setIsOpen] = useState(false)

    const filteredTreks = useMemo(() => {
        if (!searchTerm.trim()) return []

        const results: typeof categorizedTreks[keyof typeof categorizedTreks] = []
        const lowerSearchTerm = searchTerm.toLowerCase()

        Object.values(categorizedTreks).forEach((categoryTreks) => {
            categoryTreks.forEach((trek) => {
                if (trek.title.toLowerCase().includes(lowerSearchTerm)) {
                    results.push(trek)
                }
            })
        })

        return results
    }, [searchTerm])

    return (
        <div className="relative max-w-2xl mx-auto z-50 w-full">
            {/* Search Input Field */}
            <div className="relative flex items-center w-full">
                <input
                    type="text"
                    placeholder="Search treks by name..."
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                        setIsOpen(true)
                    }}
                    onFocus={() => setIsOpen(true)}
                    className="w-full px-4 py-3 sm:py-4 pl-12 pr-10 rounded-lg shadow-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 text-gray-400" size={20} />
                {searchTerm && (
                    <button
                        onClick={() => {
                            setSearchTerm("")
                            setIsOpen(false)
                        }}
                        className="absolute right-3 text-gray-400 hover:text-gray-600"
                    >
                        <X size={20} />
                    </button>
                )}
            </div>

            {/* Search Results Container - Bounded within Hero Section */}
            {isOpen && searchTerm && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-2xl z-50 border border-gray-200 overflow-hidden">
                    <div className="max-h-56 overflow-y-auto">
                        {filteredTreks.length > 0 ? (
                            <div className="divide-y divide-gray-200">
                                {filteredTreks.map((trek) => (
                                    <Link
                                        key={trek.id}
                                        href={`/trek/${trek.id}`}
                                        onClick={() => {
                                            setSearchTerm("")
                                            setIsOpen(false)
                                        }}
                                        className="flex items-center gap-3 p-3 hover:bg-gray-50 transition cursor-pointer"
                                    >
                                        <img
                                            src={trek.image || "/placeholder.svg"}
                                            alt={trek.title}
                                            className="w-12 h-12 rounded object-cover"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-gray-900 text-sm truncate">
                                                {trek.title}
                                            </h4>
                                            <p className="text-xs text-gray-600">{trek.location}</p>
                                        </div>
                                        <span className="text-sm font-bold text-blue-600 whitespace-nowrap">
                                            {trek.price}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="p-4 text-center text-gray-500">
                                No treks found matching "{searchTerm}"
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
