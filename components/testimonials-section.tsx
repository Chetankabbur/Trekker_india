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
  },
  {
    id: 4,
    stars: 5,
    text: "For many of us this was the first trip , truly it was a wonderful experience. Mahesh sir made our experience very special,He made us enjoy every single minute of our journey .Our travel guide was very friendly and respectful .If any of you want to have a great time make sure to contact Trekkar India",
    author: "Geetha Sundar",
    role: "Happy Client",
  },
  {
    id: 5,
    stars: 5,
    text: "I recently went Valparai trip with trekker india. and it was truly a memorable experience! From start to finish, everything went smoothly and exceeded my expectations.The journey itself was comfortable, and the destination was even more beautiful than I imagined. The scenery was breath taking.",
    author: "Pooja H",
    role: "Happy Client",
  },
  {
    id: 6,
    stars: 5,
    text: "I recently went Valparai trip with trekker india. and it was truly a memorable experience! From start to finish, everything went smoothly and exceeded my expectations.The journey itself was comfortable, and the destination was even more beautiful than I imagined. The scenery was breath taking.",
    author: "Pooja H",
    role: "Happy Client",
  },
  {
    id: 7,
    stars: 5,
    text: "Had great time with the team, well organised itinerary, covered all places, friendly and knowledged team lead( special thanks to Ranjith) and guide, This was my first trek through a travel agency and would surely recommend to travel enthusiasts and people new to travelling solo. Looking forward for more trekking and outing experience with Trekkar India.",
    author: "Rashmi Shivashankar",
    role: "Happy Client",
  },
  {
    id: 8,
    stars: 5,
    text: "Went on a Kodachadri trek with Trekkers India along with my 3 friends, and it was an amazing experience! 🌿⛰️ They covered every spot promised in the itinerary, and our trek lead Ranjith was super friendly and helpful throughout. We had so much fun and truly enjoyed every bit of it. Definitely looking forward to joining them again for another adventure!.",
    author: "Harshitha Harshu",
    role: "Happy Client",
  },
]
export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg mb-2 font-poppins">Tourists</p>
          <h2 className="text-4xl md:text-5xl font-bold font-Marcellus">
            Experiences
          </h2>
          <a
            href="https://www.google.com/search?sca_esv=3235e08c292698b8&hl=en-US&gl=in&sxsrf=ANbL-n4pnKG4JPmew6FYSjAffF0F1h5LXQ:1769577760718&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZhgogdyzgbGfCNCuVmoKoDfOhYtTp-TUR2QeBu1spThBMi118cuTzyRF3_tyWhUVKLDdLRUbPkoaLw-nY2y19_4bHrE&q=Trekkar+India+Reviews&sa=X&ved=2ahUKEwjGx9Huvq2SAxX-WnADHb0MNWMQ0bkNegQIIhAF&biw=1470&bih=839&dpr=2&aic=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Read More Reviews on Google
          </a>
        </div>

        {/* Horizontal Scroll Wrapper */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 pb-4">

            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="
                  flex-shrink-0
                  w-[85%]
                  sm:w-[60%]
                  md:w-[32%]
                "
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}
