'use client'

import React from "react"

import { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'

interface EnquiryFormProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    trekTitle: string
    trekLocation: string
    whatsappNumber: string
}

export function EnquiryForm({
    open,
    onOpenChange,
    trekTitle,
    trekLocation,
    whatsappNumber,
}: EnquiryFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        guests: '1',
        destination: trekLocation,
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Format message for WhatsApp
        const whatsappMessage = `Hi! I'm interested in the ${trekTitle} trek.

Name: ${formData.name}
Number of Guests: ${formData.guests}
Destination: ${formData.destination}
Message: ${formData.message}

Please provide more details about the trek.`

        // Encode message for WhatsApp URL
        const encodedMessage = encodeURIComponent(whatsappMessage)
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

        // Open WhatsApp
        window.open(whatsappUrl, '_blank')

        // Reset form and close dialog
        setTimeout(() => {
            setFormData({
                name: '',
                guests: '1',
                destination: trekLocation,
                message: '',
            })
            onOpenChange(false)
            setIsSubmitting(false)
        }, 500)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Enquire About {trekTitle}</DialogTitle>
                    <DialogDescription>
                        Fill in your details and we'll send the information to our team via WhatsApp.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Number of Guests */}
                    <div className="space-y-2">
                        <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
                            Number of Guests <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="guests"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <option key={num} value={num}>
                                    {num} {num === 1 ? 'Guest' : 'Guests'}
                                </option>
                            ))}
                            <option value="10+">10+ Guests</option>
                        </select>
                    </div>

                    {/* Destination */}
                    <div className="space-y-2">
                        <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                            Destination <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="destination"
                            name="destination"
                            type="text"
                            value={formData.destination}
                            onChange={handleChange}
                            placeholder="Trek destination"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your preferences or any special requirements..."
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-black text-white py-3 font-medium rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400"
                    >
                        {isSubmitting ? 'Sending...' : 'Send via WhatsApp'}
                    </button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
