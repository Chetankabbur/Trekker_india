import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import CategoriesSection from "@/components/categories-section"
import SeasonalTreks from "@/components/seasonal-treks"
import BlogsSection from "@/components/blogs-section"
import ServicesSection from "@/components/services-section"
import AchievementsSection from "@/components/achievements-section"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full overflow-hidden relative">
      <Navigation />
      <HeroSection />
      <CategoriesSection />
      <SeasonalTreks />
      <BlogsSection />
      <ServicesSection />
      <AchievementsSection />
      <TestimonialsSection />
      {/* <Footer /> */}
    </main>
  )
}
