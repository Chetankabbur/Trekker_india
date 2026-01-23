// "use client"

// import Link from "next/link"
// import { Search } from "lucide-react"

// export default function TrekDetailHeader() {
//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Left: Search Icon */}
//         <button className="text-gray-700 hover:text-gray-900 transition-colors">
//           <Search size={20} />
//         </button>

//         {/* Center: Logo/Brand */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-1">
//           <span className="font-serif text-lg font-bold text-gray-900">Trekkar</span>
//           <span className="text-orange-500 font-serif text-lg font-bold">In</span>
//           <span className="text-green-600 font-serif text-lg font-bold">dia</span>
//         </div>

//         {/* Right: Navigation Menu */}
//         <nav className="hidden md:flex items-center gap-8">
//           <Link href="/" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
//             Homepage
//           </Link>
//           <Link href="#" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
//             Treks
//           </Link>
//           <Link href="#" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
//             Customize
//           </Link>
//           <Link href="#" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
//             Blog
//           </Link>
//           <Link href="#" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
//             About
//           </Link>
//           <Link href="#" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
//             Refer and Earn
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden text-gray-700">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       </div>
//     </header>
//   )
// }
