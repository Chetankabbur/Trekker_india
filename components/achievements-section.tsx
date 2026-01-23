"use client"

export default function AchievementsSection() {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <p className="text-gray-600 text-lg mb-2 font-poppins">Your Adventure</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 font-Marcellus">Our Expertise</h2>

        <div className="mb-12">
          <div className="relative inline-block mb-6">
            <div
              className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text"
              style={{
                backgroundImage: "url(/placeholder.svg?height=200&width=200&query=mountain-peak-landscape)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              500+
            </div>
          </div>
          <p className="text-2xl md:text-3xl font-light text-gray-700 font-Marcellus">Adventures Completed</p>
        </div>
      </div>
    </section>
  )
}
