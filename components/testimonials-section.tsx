"use client"

import TestimonialCard from "./testimonial-card"

const testimonials = [
  {
    id: 1,
    stars: 5,
    text: "Thanks to Trekkar India for providing wonderful experiences and arrangements.. It was the best trip ever ... Every moment from starting the journey to the end of the trip was really amazing 😄🤩.. Enjoyed a lot ..time spent are really precious and memorable. Thankful for Mahesh anna's inspiring words and thoughts of experience... The experiences are beyond words to explain.",
    author: "Sahana",
    role: "Happy Client",
  },
  {
    id: 2,
    stars: 5,
    text: "Had a wonderful and well-organized trip. The guides, Chethan and Bhoomika, were very supportive and made the journey smooth and enjoyable. Special thanks to the organizers, Raghu and Mahesh, for excellent planning and coordination. It was a memorable experience, and I would definitely recommend this team for a hassle-free travel experience. The experiences are beyond words to explain.",
    author: "Lokesh Devanga",
    role: "Happy Client",
  },
  {
    id: 3,
    stars: 5,
    text: "We had a great time with the help of Trekkar India. Visited Meghalaya and covered almost all good places, well organized by Mahesh sir. He is very friendly and also took care of everything like good stay and all. It was really good experience. Thank you team Trekker India. The experiences are beyond words to explain.",
    author: "Shilpa Shailesh",
    role: "Happy Client",
  }
]
export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg mb-2 font-poppins">Tourists</p>
          <h2 className="text-4xl md:text-5xl font-bold font-Marcellus">Experiences</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
