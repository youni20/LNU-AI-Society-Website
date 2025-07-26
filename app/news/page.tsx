import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function News() {
  return (
    <div className="min-h-screen bg-soot-glue">
      {/* Navigation */}
      <nav className="bg-soot-glue border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-3">
              <img
                src="/images/logo-symbol.png"
                alt="LNU AI Society Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-white">LNU AI Society</span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-white hover:text-buttercup transition-colors">Home</a>
              <a href="/about" className="text-white hover:text-buttercup transition-colors">About</a>
              <a href="/courses" className="text-white hover:text-buttercup transition-colors font-medium">Courses</a>
              <a href="/events" className="text-white hover:text-buttercup transition-colors">Events</a>
              <a href="/news" className="text-white hover:text-buttercup transition-colors">News</a>
              <Button className="bg-buttercup hover:bg-yellow-400 text-soot-glue font-semibold">Join Us</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* News Hero */}
      <section className="bg-buttercup py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-soot-glue mb-4">AI News & Updates</h1>
          <p className="text-xl text-soot-glue max-w-3xl mx-auto">
            Stay informed with the latest developments in artificial intelligence, research breakthroughs, and society
            announcements.
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-buttercup mb-4">Latest News</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover the most recent updates from the world of AI and our society activities.
            </p>
          </div>

          {/* Featured Article */}
          {/* TODO: Add more featured articles here if needed */}
          <Card className="mb-12 border-2 border-gray-700 hover:border-buttercup transition-colors bg-gray-800 text-white">
            {/* featured article content */}
          </Card>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* TODO: Add more news cards here dynamically */}
            {/* Example News Card */}
            {/* <Card>...</Card> */}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-soot-glue hover:bg-gray-800 text-buttercup font-semibold">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-buttercup mb-4">Stay Connected</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Interested in joining or staying up-to-date with LNU AI Society? Fill out the form below to get involved!
            </p>
          </div>

          {/* TODO: Replace with embedded form if needed */}
          <Card className="max-w-xl mx-auto bg-gray-800 border-2 border-gray-700 hover:border-buttercup transition-colors text-white text-center">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 mb-6">
                Click the button below to fill out our interest form.
              </p>
              <Button
                className="bg-buttercup hover:bg-yellow-400 text-soot-glue font-semibold px-8 py-3 text-lg"
                asChild
              >
                <a href="https://your-google-form-link.com" target="_blank" rel="noopener noreferrer">
                  Google Form Link
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-soot-glue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center space-x-3 mb-4 md:mb-0">
              <span className="text-xl font-bold text-buttercup">LNU AI Society</span>
            </Link>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                {/* TODO: Add more social links if needed */}
                {/* current social icons */}
              </div>
              <div className="text-right">
                <p className="text-white/80">© 2025 LNU AI Society. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
