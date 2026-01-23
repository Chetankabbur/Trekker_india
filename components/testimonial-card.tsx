interface Testimonial {
  id: number
  stars: number
  text: string
  author: string
  role: string
}

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial
}) {
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.stars)].map((_, i) => (
          <span key={i} className="text-yellow-400">
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed mb-6">{testimonial.text}</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
        <div className="text-left">
          <p className="text-sm font-semibold text-gray-900">{testimonial.author}</p>
          <p className="text-xs text-gray-600">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}
