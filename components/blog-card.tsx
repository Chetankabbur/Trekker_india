interface Blog {
  id: number
  title: string
  image: string
  author: string
  date: string
  category: string
}

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative h-64 w-full overflow-hidden bg-gray-200 mb-4">
        <img
          src={blog.image || "/placeholder.svg"}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-lg font-bold mb-3 group-hover:underline">{blog.title}</h3>
      <p className="text-xs text-gray-600">
        by {blog.author} | {blog.date} | {blog.category}
      </p>
    </div>
  )
}
