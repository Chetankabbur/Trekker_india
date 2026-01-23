import Link from "next/link"

interface Trek {
  id: number
  title: string
  image: string
  location: string
  duration: string
  price: string
  slug?: string
}

export default function TrekCard({ trek }: { trek: Trek }) {
  return (
    <Link href={`/trek/${trek.id}`}>
      <div className="group overflow-hidden bg-white hover:shadow-lg transition-shadow cursor-pointer">
        <div className="relative h-80 w-full overflow-hidden bg-gray-200">
          <img
            src={trek.image || "/placeholder.svg"}
            alt={trek.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-xl font-bold mb-1">{trek.title}</h3>
            <p className="text-xs text-gray-300 mb-3">
              {trek.location} • {trek.duration}
            </p>
            <p className="text-sm font-semibold mb-3">{trek.price}</p>
            <span className="text-xs text-white group-hover:underline inline-block">View More →</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
