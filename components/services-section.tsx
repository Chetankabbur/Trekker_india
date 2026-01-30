"use client"

import ServiceCard from "./service-card"

const services = [
  {
    id: 1,
    title: "Guided Treks",
    description: "Explore guided walks with experienced local guides through pristine landscapes.",
    image: "/mountain-hiking-group-trail.jpg",
    color: "bg-slate-600",
  },
  {
    id: 2,
    title: "Custom Trips",
    description: "Trips designed around your specific interests and travel preferences.",
    image: "/custom-adventure-travel.jpg",
    color: "bg-amber-700",
  },
  {
    id: 3,
    title: "Weekend Getaways",
    description: "Quick escapes tailored for short breaks and quick mountain experiences.",
    image: "/weekend.jpg",
    color: "bg-stone-700",
  },
  {
    id: 4,
    title: "Corporate Outings",
    description: "Team building experiences with mountain adventures and group activities.",
    image: "/corporate-team-adventure.jpg",
    color: "bg-green-900",
  },
  {
    id: 5,
    title: "Homestays & Stays",
    description: "Comfortable accommodations with local experiences during your trek.",
    image: "/homeStay.jpg",
    color: "bg-white",
  },
  {
    id: 6,
    title: "Group Adventures",
    description: "Join group treks and meet fellow adventure enthusiasts from around.",
    image: "/group-adventure-hiking.jpg",
    color: "bg-black",
  },
]

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-gray-600 text-lg mb-2 font-poppins">Services</p>
          <h2 className="text-4xl md:text-5xl font-bold font-Marcellus">Experiences we offer</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
