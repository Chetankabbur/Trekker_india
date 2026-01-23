interface Service {
  id: number
  title: string
  description: string
  image: string
  color: string
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      className={`${service.color} relative h-80 overflow-hidden flex items-end p-6 cursor-pointer group hover:shadow-xl transition-shadow`}
    >
      <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="relative z-10">
        <h3 className={`text-xl font-bold mb-2 ${service.id === 5 ? "text-black" : "text-white"}`}>{service.title}</h3>
        <p className={`text-sm ${service.id === 5 ? "text-gray-700" : "text-gray-200"}`}>{service.description}</p>
      </div>
    </div>
  )
}
