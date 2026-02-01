

"use client"

import { useState } from "react"
import TrekCard from "./trek-card"

export default function SeasonalTreks() {
  const [activeFilter, setActiveFilter] = useState("monsoon")

  const seasons = [
    { id: "monsoon", label: "Monsoon (Jul–Oct)", emoji: "🌧️" },
    { id: "winter", label: "Winter (Dec–Feb)", emoji: "❄️" },
    { id: "summer", label: "Summer (Mar–Jun)", emoji: "☀️" },
  ]

  const seasonalTreks: Record<string, any[]> = {
    winter: [
      {
        id: 61,
        title: "Spiti Valley Highest Holi Celebration",
        image: "/spiti/SpitiHoli.jpg",
        location: "Spiti",
        duration: "9 Days",
        price: "₹ 21,999/-",
      },
      {
        id: 11,
        title: "Goa Christmas & New Year Escape",
        image: "/Goa/goa.jpg",
        location: "Goa",
        duration: "3 Days",
        price: "₹ 9,999/-",
      },
      {
        id: 42,
        title: "Explore Rajasthan",
        image: "/northEast/Rajasthan.jpg",
        location: "Rajasthan",
        duration: "5 Days",
        price: "₹ 67,500/-",
      },
      {
        id: 41,
        title: "Explore Meghalaya",
        image: "/northEast/Meghalaya.jpg",
        location: "Meghalaya",
        duration: "3 Days",
        price: "₹ 20,999/-",
      },
      {
        id: 53,
        title: "Explore Discover Kashmir",
        image: "/north/Kashmir.jpg",
        location: "Kashmir",
        duration: "6 Days",
        price: "₹ 40,000/-",
      },
      {
        id: 54,
        title: "Explore Manali",
        image: "/north/manali.jpg",
        location: "Manali",
        duration: "5 Days",
        price: "₹ 24,999/-",
      },
      {
        id: 71,
        title: "Discover Vietnam in 6 Days",
        image: "/Vietnam6.jpg",
        location: "Vietnam",
        duration: "6 Days",
        price: "₹ 35,999/-",
      },
      {
        id: 72,
        title: "Vietnam Tour – 8 Nights / 9 Days",
        image: "/Vietnam9-1.jpg",
        location: "Vietnam",
        duration: "9 Days",
        price: "₹ 44,999/-",
      },
    ],

    summer: [
      {
        id: 3,
        title: "Gokarana Beach Trek",
        image: "/Gokarana.jpg",
        location: "Gokarana",
        duration: "2 Days",
        price: "₹ 3,999/-",
      },
      {
        id: 4,
        title: "Hampi Backpack Trip",
        image: "/karnataka/Hampi.jpg",
        location: "Hampi",
        duration: " 2 Days",
        price: "₹ 4,499/-",
      },
    ],

    monsoon: [
      {
        id: 1,
        title: "Netravati Trek",
        image: "/karnataka/Netravati.jpg",
        location: "Netravati ",
        duration: "2 Days",
        price: "₹ 3,999/-",
      },
      {
        id: 2,
        title: "Enchanting Coorg",
        image: "/karnataka/Coorg.jpg",
        location: "Coorg",
        duration: "2 Days",
        price: "₹ 4,499/-",
      },
      {
        id: 3,
        title: "Gokarana Beach Trek",
        image: "/Gokarana.jpg",
        location: "Gokarana",
        duration: "2 Days",
        price: "₹ 3,999/-",
      },
      {
        id: 4,
        title: "Hampi Backpack Trip",
        image: "/karnataka/Hampi.jpg",
        location: "Hampi",
        duration: " 2 Days",
        price: "₹ 4,499/-",
      },
      {
        id: 5,
        title: "Kodachadri Trek",
        image: "/karnataka/Kodachadri.jpg",
        location: "Kodachadri",
        duration: " 2 Days",
        price: "₹3,999/-",
      },
      {
        id: 6,
        title: "Bandaje and Kyathanamakki Trek",
        image: "/karnataka/Bandaje.jpg",
        location: "Bandaje",
        duration: " 2 Days",
        price: "₹3,799/-",
      },
      {
        id: 7,
        title: "Kudremukh and Kyathanamakki Trek",
        image: "/karnataka/Kudremukh.jpg",
        location: "Kudremukh",
        duration: " 2 Days",
        price: "₹3,799/-",
      },
      {
        id: 21,
        title: "Paithalamala",
        image: "/kerala/Paithalamala.jpg",
        location: "Kerala",
        duration: "2 Days",
        price: "₹ 4,499/-",
      },
      {
        id: 22,
        title: "Bose peak & Kolukkumalai",
        image: "/Kolukkumalai.webp",
        location: "Kerala",
        duration: "2 Days",
        price: "₹ 4,999/-",
      },
      {
        id: 23,
        title: "Banasura Trek",
        image: "/kerala/Banasura.jpg",
        location: "Wayanad, Kerala",
        duration: "2 Days",
        price: "₹ 4,799/-",
      },
      {
        id: 24,
        title: "Explore Ranipuram & River Trek",
        image: "/kerala/Ranipuram.jpg",
        location: "Kerala",
        duration: "2 Days",
        price: "₹ 3,899/-",
      },
    ],
  }

  const treks = seasonalTreks[activeFilter] || []

  return (
    <section className="w-full bg-white py-10 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg mb-2 font-poppins">Explore the</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 font-marcellus">
            Best Treks by Season
          </h2>
          <p className="text-gray-500 text-lg font-poppins">Recommended</p>
        </div>


        {/* Season Filter */}
        <div className="flex gap-6 md:gap-12 justify-center mb-12 flex-wrap font-poppins">
          {seasons.map((season) => (
            <button
              key={season.id}
              onClick={() => setActiveFilter(season.id)}
              className={`pb-3 border-b-2 transition-all ${activeFilter === season.id
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-black"
                }`}
            >
              <span className="mr-2">{season.emoji}</span>
              {season.label}
            </button>
          ))}
        </div>

        {/* Trek Cards */}
        <div className="flex overflow-x-auto space-x-6 pb-4 px-4 md:px-0 items-center scroll-smooth snap-x snap-mandatory">
          {treks.length > 0 ? (
            treks.map((trek: any) => (
              <div
                key={trek.id}
                className="flex-none w-80 snap-start"
              >
                <TrekCard trek={trek} />
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center w-full">
              No treks available for this season
            </p>
          )}
        </div>

      </div>
    </section>
  )

}
