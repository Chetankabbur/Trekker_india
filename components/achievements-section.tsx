"use client"

export default function AchievementsSection() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-8 flex justify-center">
        <div className="relative inline-block text-center">

          {/* Text ABOVE image */}
          <p className="text-gray-600 text-lg mb-2 font-poppins">
            Your Adventure
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-Marcellus">
            Our Expertise
          </h2>

          {/* Image-filled number */}
          <div
            className="text-10xl md:text-8xl font-bold text-transparent bg-clip-text"
            style={{
              backgroundImage: "url(/foggy-forest-morning.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            500+
          </div>

          {/* Text below image */}
          <p className="text-2xl md:text-3xl font-light text-gray-700 mt-4 font-Marcellus">
            Adventures Completed
          </p>
        </div>
      </div>
    </section>
  )
}
