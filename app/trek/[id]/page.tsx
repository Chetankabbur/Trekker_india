"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { MapPin, Clock, Users, AlertCircle } from "lucide-react"
import { TrekImageGallery } from "@/components/trek-image-gallery"

import { treksData } from "@/features/mockData/treksData"
import { ExpandableText } from "@/components/expandable-text"
import { useState } from "react"
import { EnquiryForm } from "@/components/enquiry-form"

export default function TrekDetailPage() {
  const { id } = useParams()
  const trekId = Number(id)
  const trek = treksData.find((t) => t.id === trekId)
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)
  const whatsappNumber = "916362816443"

  if (!trek) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Trek Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  const similarTreks = treksData.filter(t => t.id !== trekId && (t as any).category === (trek as any).category)

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb & Title */}
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2 text-sm text-gray-600 border-b border-gray-200">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <span>→</span>
          <Link href="#" className="hover:text-gray-900">
            {trek.title}
          </Link>
          <span>→</span>
          <span className="text-gray-900">{trek.location}</span>
          <div className="ml-auto flex gap-4">
            <button className="text-gray-700 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15.898 4.045c-1.6-1.6-4.194-1.6-5.792 0l-.707.707-.707-.707c-1.6-1.6-4.194-1.6-5.792 0-1.6 1.6-1.6 4.194 0 5.792l6.499 6.499c.78.78 2.048.78 2.828 0l6.499-6.499c1.6-1.598 1.6-4.194 0-5.792z" />
              </svg>
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8 text-center border-b border-gray-200">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">{trek.title}</h1>
          <ExpandableText
            text={trek.subtitle}
            lines={1}
            className="text-lg text-gray-600 font-light"
          />
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left Column - Image Gallery */}
            <div className="lg:col-span-2">
              <TrekImageGallery trekName={trek.title} images={trek.images} />
            </div>

            {/* Right Column - Travel Details Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white">
                <h3 className="text-xl font-bold mb-6">Travel Details</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Days</p>
                      <p className="font-semibold text-gray-900">{trek.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                      <p className="font-semibold text-gray-900">{trek.location}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsEnquiryOpen(true)}
                  className="w-full bg-black text-white py-3 font-medium mt-8 hover:bg-gray-800 transition">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              {/* Price Section */}
              <div>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-bold">{trek.price}</span>
                  <span className="text-gray-500 line-through text-lg">{trek.originalPrice}</span>
                </div>
              </div>

              {/* Features Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 bg-white rounded">
                    <span className="text-2xl mb-2">🍽️</span>
                    <p className="text-xs font-medium text-center">Meals Included</p>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded">
                    <span className="text-2xl mb-2">🛏️</span>
                    <p className="text-xs font-medium text-center">Stay Available</p>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded">
                    <span className="text-2xl mb-2">👨‍👩‍👧</span>
                    <p className="text-xs font-medium text-center">Family Friendly</p>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded">
                    <span className="text-2xl mb-2">🚗</span>
                    <p className="text-xs font-medium text-center">Pickup & Drop</p>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded">
                    <span className="text-2xl mb-2">👤</span>
                    <p className="text-xs font-medium text-center">Free Guide</p>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded">
                    <span className="text-2xl mb-2">✈️</span>
                    <p className="text-xs font-medium text-center">Flight Booking</p>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded">
                    <span className="text-2xl mb-2">🏥</span>
                    <p className="text-xs font-medium text-center">Medical Help</p>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded">
                    <span className="text-2xl mb-2">📞</span>
                    <p className="text-xs font-medium text-center">24/7 Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-2">Tour will cover</h2>
            <h3 className="text-3xl font-bold mb-8 text-gray-800">destinations</h3>

            <div className="space-y-8 mb-16">
              {trek.itinerary.map((day, idx) => (
                <div key={idx}>
                  <div className="pb-8 border-b border-gray-200">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                          <span className="text-2xl font-bold text-gray-600">Day {day.day}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2">{day.title}</h4>
                        <p className="text-gray-600 mb-4">{day.description}</p>
                        <ul className="space-y-2">
                          {day.details.map((detail, detailIdx) => (
                            <li key={detailIdx} className="text-sm text-gray-700 flex items-start gap-3">
                              <span className="text-gray-400 mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Show Inclusions and Exclusions below Day 1 and Day 2 */}
                  {(day.day === 1 || day.day === 2) && (
                    <div className="mt-6 ml-26 space-y-6">
                      {day.day === 1 && trek.inclusions && (
                        <div>
                          <h5 className="text-lg font-semibold mb-3 text-gray-900">Inclusions</h5>
                          <p className="text-sm text-gray-600">
                            {trek.inclusions.slice(0, 3).join(", ")}
                          </p>
                        </div>
                      )}
                      {day.day === 2 && trek.exclusions && (
                        <div>
                          <h5 className="text-lg font-semibold mb-3 text-gray-900">Exclusions</h5>
                          <p className="text-sm text-gray-600">
                            {trek.exclusions.slice(0, 3).join(", ")}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Inclusions Section */}
            <div className="mb-16 border-t border-gray-200 pt-12">
              <h2 className="text-3xl font-bold mb-8">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trek.inclusions && trek.inclusions.map((inclusion, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{inclusion}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exclusions Section */}
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-3xl font-bold mb-8">What's Not Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trek.exclusions && trek.exclusions.map((exclusion, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{exclusion}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Similar Treks Section */}
          {similarTreks.length > 0 && (
            <section className="bg-white py-16 border-t border-gray-200 mt-16">
              <div className="mb-12">
                <p className="text-gray-600 text-sm mb-2">Explore</p>
                <h2 className="text-4xl font-bold text-gray-900">Similar {(trek as any).category} Treks</h2>
              </div>

              {/* Horizontal Scrolling Container */}
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-6 pb-4">
                  {similarTreks.map((similarTrek) => (
                    <Link key={similarTrek.id} href={`/trek/${similarTrek.id}`}>
                      <div className="group cursor-pointer overflow-hidden rounded-lg flex-shrink-0 w-72">
                        <div className="relative h-64 bg-gray-200 overflow-hidden rounded-lg">
                          <img
                            src={similarTrek.images[0]?.src || "/placeholder.jpg"}
                            alt={similarTrek.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex flex-col justify-end p-4">
                            <h3 className="text-white text-lg font-bold">{similarTrek.title}</h3>
                            <p className="text-white text-xs mt-2 opacity-90">{similarTrek.location}</p>
                            <p className="text-white text-sm mt-1 font-semibold">{similarTrek.price}</p>
                            <button className="text-white text-xs mt-3 underline">View More</button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Enquiry Form Modal */}
      <EnquiryForm
        open={isEnquiryOpen}
        onOpenChange={setIsEnquiryOpen}
        trekTitle={trek.title}
        trekLocation={trek.location}
        whatsappNumber={whatsappNumber}
      />
    </div>
  )
}
