import { GreetingForm } from "@/components/greeting-form"
import { ExplanationSection } from "@/components/explanation-section"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Next.js 15.1 Greeting App</h1>
      <GreetingForm />
      <div className="mt-12">
        <ExplanationSection />
      </div>
    </main>
  )
}

