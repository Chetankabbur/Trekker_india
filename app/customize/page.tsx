
import Navigation from "@/components/navigation"
import CustomizeForm from "@/components/customize-form"


export const metadata = {
    title: "Customize Your Trek - Trekkar India",
    description: "Design your perfect trek experience with Trekkar India. Customize your adventure based on your preferences.",
}

export default function CustomizePage() {
    return (
        <main className="w-full">
            <Navigation />

            {/* Hero Section */}
            <section
                className="relative h-100 bg-cover bg-center flex flex-col items-center justify-center text-white"
                style={{
                    backgroundImage: "url(/hero.png?height=1080&width=1920&query=mountain-landscape-nature)",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="text-center">

                    <h1 className="text-5xl font-bold mb-2">Effortless Travel</h1>
                    <p className="text-3xl font-light">Customization</p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                    <CustomizeForm />
                </div>
            </section>
        </main>
    )
}
