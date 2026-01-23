"use client"

import BlogCard from "./blog-card"

const blogs = [
  {
    id: 1,
    title: "Frozen Wonders: Ancient Arctic Technologies Revealed",
    image: "/frozen-arctic-ice-landscape.jpg",
    author: "Maria Chaudhuri",
    date: "Oct 25, 2025",
    category: "Mountain",
  },
  {
    id: 2,
    title: "Frozen Wonders: Ancient Arctic Technologies Revealed",
    image: "/golden-mountains-sunset.jpg",
    author: "Maria Chaudhuri",
    date: "Oct 25, 2025",
    category: "Mountain",
  },
  {
    id: 3,
    title: "Frozen Wonders: Ancient Arctic Technologies Revealed",
    image: "/antartic.jpg",
    author: "Maria Chaudhuri",
    date: "Oct 25, 2025",
    category: "Mountain",
  },
  {
    id: 4,
    title: "Frozen Wonders: Ancient Arctic Technologies Revealed",
    image: "/foggy-forest-morning.jpg",
    author: "Maria Chaudhuri",
    date: "Oct 25, 2025",
    category: "Mountain",
  },
]

export default function BlogsSection() {
  return (
    <section className="w-full bg-white py-10 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg mb-2 font-poppins">Blogs</p>
          <h2 className="text-4xl md:text-5xl font-bold font-Marcellus">Stories that wander</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  )
}
