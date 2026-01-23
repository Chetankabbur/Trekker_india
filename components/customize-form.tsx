"use client"

import React from "react"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

export default function CustomizeForm() {
    const [formData, setFormData] = useState({
        destination: "",
        dates: "",
        duration: "",
        groupType: "",
        adults: "",
        children: "",
        stayStyle: "",
        additionalOptions: "",
        name: "",
        whatsapp: "",
        email: "",
        specialRequests: "",
    })

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Create WhatsApp message
        const message = `
📍 *Trek Customization Request*

*Destination:* ${formData.destination}
*Dates:* ${formData.dates}
*Duration:* ${formData.duration}
*Group Type:* ${formData.groupType}
*Adults:* ${formData.adults}
*Children:* ${formData.children}
*Stay Style:* ${formData.stayStyle}
${formData.additionalOptions ? `*Additional Options:* ${formData.additionalOptions}` : ""}

*Contact Information:*
*Name:* ${formData.name}
*WhatsApp:* ${formData.whatsapp}
*Email:* ${formData.email}
${formData.specialRequests ? `*Special Requests:* ${formData.specialRequests}` : ""}
    `.trim()

        // Encode message for WhatsApp URL
        const encodedMessage = encodeURIComponent(message)
        const whatsappNumber = "916362816443" // Trekkar India WhatsApp number
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

        // Open WhatsApp
        window.open(whatsappUrl, "_blank")

        // Show success message
        setIsSubmitted(true)
        setIsLoading(false)

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({
                destination: "",
                dates: "",
                duration: "",
                groupType: "",
                adults: "",
                children: "",
                stayStyle: "",
                additionalOptions: "",
                name: "",
                whatsapp: "",
                email: "",
                specialRequests: "",
            })
            setIsSubmitted(false)
        }, 3000)
    }

    if (isSubmitted) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white">
                <CheckCircle size={64} className="text-green-500 mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Your escape is being planned!
                </h2>
                <p className="text-gray-600 text-center max-w-md">
                    Our expert will reach out on WhatsApp within 2 hours.
                </p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* First Section */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                    Design Your Dream Escape
                </h2>
                <p className="text-gray-600">
                    Tell us what you love, and we'll build the perfect itinerary for you.
                </p>

                {/* Where do you want to go? */}
                <div>
                    <label className="block text-gray-900 font-medium mb-2">
                        Where do you want to go? (e.g. Manali)
                    </label>
                    <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="Manali"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                        required
                    />
                </div>

                {/* Dates and Duration */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-900 font-medium mb-2">
                            Dates
                        </label>
                        <input
                            type="date"
                            name="dates"
                            value={formData.dates}
                            onChange={handleChange}
                            placeholder="01-01-2026"
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-900 font-medium mb-2">
                            Duration
                        </label>
                        <input
                            type="text"
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            placeholder="e.g. 5 days"
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                            required
                        />
                    </div>
                </div>

                {/* Who is coming along? */}
                <div>
                    <label className="block text-gray-900 font-medium mb-2">
                        Who is coming along?
                    </label>
                    <select
                        name="groupType"
                        value={formData.groupType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                        required
                    >
                        <option value="">Select group type</option>
                        <option value="Family">Family</option>
                        <option value="Friends">Friends</option>
                        <option value="Couple">Couple</option>
                        <option value="Solo">Solo</option>
                    </select>
                </div>

                {/* Adults and Children */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-900 font-medium mb-2">
                            Adults
                        </label>
                        <input
                            type="number"
                            name="adults"
                            value={formData.adults}
                            onChange={handleChange}
                            placeholder="0"
                            min="0"
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-900 font-medium mb-2">
                            Children
                        </label>
                        <input
                            type="number"
                            name="children"
                            value={formData.children}
                            onChange={handleChange}
                            placeholder="0"
                            min="0"
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                        />
                    </div>
                </div>

                {/* Choose your stay style */}
                <div>
                    <label className="block text-gray-900 font-medium mb-2">
                        Choose your stay style
                    </label>
                    <select
                        name="stayStyle"
                        value={formData.stayStyle}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                        required
                    >
                        <option value="">Select stay style</option>
                        <option value="Camps & Hostels">Camps & Hostels</option>
                        <option value="Hotels">Hotels</option>
                        <option value="Resorts">Resorts</option>
                        <option value="Homestays">Homestays</option>
                    </select>
                </div>

                {/* Additional options */}
                <div>
                    <label className="block text-gray-900 font-medium mb-2">
                        If your option is missing drop it below
                    </label>
                    <textarea
                        name="additionalOptions"
                        value={formData.additionalOptions}
                        onChange={handleChange}
                        placeholder="Enter any additional requirements..."
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                    />
                </div>
            </div>

            {/* Second Section */}
            <div className="space-y-6 border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-900">
                    Where should we send your custom plan?
                </h2>

                {/* Name */}
                <div>
                    <label className="block text-gray-900 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                        required
                    />
                </div>

                {/* WhatsApp Number */}
                <div>
                    <label className="block text-gray-900 font-medium mb-2">
                        WhatsApp Number
                    </label>
                    <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-gray-900 font-medium mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                        required
                    />
                </div>

                {/* Special Requests */}
                <div>
                    <label className="block text-gray-900 font-medium mb-2">
                        Special Requests
                    </label>
                    <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        placeholder="Any special requests or dietary requirements..."
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-black text-white py-3 text-lg font-semibold hover:bg-gray-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? "Processing..." : "Submit"}
                </button>
            </div>
        </form>
    )
}
