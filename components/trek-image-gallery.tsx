"use client"

import { useState } from "react"
import Image from "next/image"

interface GalleryImage {
  id: number
  src: string
  alt: string
  featured?: boolean
}

interface TrekImageGalleryProps {
  trekName: string
  images: GalleryImage[]
}

export function TrekImageGallery({ trekName, images }: TrekImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images.find((img) => img.featured) || images[0])

  return (
    <div className="mb-12">
      {/* Main Featured Image */}
      <div className="mb-6 bg-gray-100 rounded-lg overflow-hidden">
        <div className="relative w-full h-96 md:h-[500px]">
          <Image
            src={selectedImage.src || "/placeholder.svg"}
            alt={selectedImage.alt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}
