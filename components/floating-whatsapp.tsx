'use client'

import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
    const whatsappNumber = '916362816443'
    const message = "Hi! I'm interested in your trek packages. Can you help me?"

    const handleWhatsAppClick = () => {
        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
        window.open(whatsappUrl, '_blank')
    }

    return (
        <button
            onClick={handleWhatsAppClick}
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center hover:scale-110"
            aria-label="Contact us on WhatsApp"
            title="Contact us on WhatsApp"
        >
            <MessageCircle size={32} />
        </button>
    )
}
