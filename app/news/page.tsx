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
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logo-symbol.png"
                alt="LNU AI Society Logo"
                width={40}
                height={40}
                className="h-10 w-auto filter invert"
              />
              <span className="text-xl font-bold text-buttercup">LNU AI Society</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-buttercup hover:text-yellow-200 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-buttercup hover:text-yellow-200 transition-colors">
                About
              </Link>
              <Link href="/courses" className="text-buttercup hover:text-yellow-200 transition-colors">
                Courses
              </Link>
              <Link href="/events" className="text-buttercup hover:text-yellow-200 transition-colors">
                Events
              </Link>
              <Link href="/news" className="text-buttercup hover:text-yellow-200 transition-colors font-medium">
                News
              </Link>
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
          <Card className="mb-12 border-2 border-gray-700 hover:border-buttercup transition-colors bg-gray-800 text-white">
            <div className="grid md:grid-cols-2 gap-8 p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Badge className="bg-crocus text-white">Featured</Badge>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    January 15, 2025
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-buttercup">
                  LNU AI Society Wins National AI Innovation Award
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  We're thrilled to announce that our society has been recognized with the National AI Innovation Award
                  for our outstanding contributions to AI education and community building. This prestigious award
                  acknowledges our innovative approach to making AI accessible to students across all disciplines.
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <User className="h-4 w-4 mr-1" />
                  By Alex Svensson, President
                </div>
                <Button className="bg-buttercup hover:bg-yellow-400 text-soot-glue font-semibold">
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="bg-lily-valley rounded-lg p-8 flex items-center justify-center">
                <div className="text-6xl">🏆</div>
              </div>
            </div>
          </Card>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-700 hover:border-buttercup transition-colors bg-gray-800 text-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-ivy text-white">Research</Badge>
                  <span className="text-sm text-gray-400">Jan 12, 2025</span>
                </div>
                <CardTitle className="text-buttercup">Breakthrough in Quantum AI Computing</CardTitle>
                <CardDescription className="text-gray-400">
                  Researchers at major tech companies have achieved a significant milestone in quantum-enhanced machine
                  learning algorithms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <User className="h-4 w-4 mr-1" />
                  AI Research Team
                </div>
                <Button
                  variant="outline"
                  className="w-full bg-transparent text-white border-gray-600 hover:border-buttercup"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-700 hover:border-buttercup transition-colors bg-gray-800 text-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-azalea text-white">Society News</Badge>
                  <span className="text-sm text-gray-400">Jan 10, 2025</span>
                </div>
                <CardTitle className="text-buttercup">New Partnership with Tech Industry Leaders</CardTitle>
                <CardDescription className="text-gray-400">
                  We've established partnerships with leading tech companies to provide internship and mentorship
                  opportunities for our members.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <User className="h-4 w-4 mr-1" />
                  Emma Lindqvist
                </div>
                <Button
                  variant="outline"
                  className="w-full bg-transparent text-white border-gray-600 hover:border-buttercup"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-700 hover:border-buttercup transition-colors bg-gray-800 text-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-crocus text-white">Technology</Badge>
                  <span className="text-sm text-gray-400">Jan 8, 2025</span>
                </div>
                <CardTitle className="text-buttercup">GPT-5 Announcement Shakes AI Community</CardTitle>
                <CardDescription className="text-gray-400">
                  The latest language model promises unprecedented capabilities in reasoning and multimodal
                  understanding.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <User className="h-4 w-4 mr-1" />
                  Tech News Desk
                </div>
                <Button
                  variant="outline"
                  className="w-full bg-transparent text-white border-gray-600 hover:border-buttercup"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-700 hover:border-buttercup transition-colors bg-gray-800 text-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-ivy text-white">Education</Badge>
                  <span className="text-sm text-gray-400">Jan 5, 2025</span>
                </div>
                <CardTitle className="text-buttercup">AI Literacy Program Launches Globally</CardTitle>
                <CardDescription className="text-gray-400">
                  A new initiative aims to make AI education accessible to students worldwide, starting with basic
                  concepts and practical applications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <User className="h-4 w-4 mr-1" />
                  Education Team
                </div>
                <Button
                  variant="outline"
                  className="w-full bg-transparent text-white border-gray-600 hover:border-buttercup"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-700 hover:border-buttercup transition-colors bg-gray-800 text-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-azalea text-white">Society News</Badge>
                  <span className="text-sm text-gray-400">Jan 3, 2025</span>
                </div>
                <CardTitle className="text-buttercup">Record Membership Growth in 2024</CardTitle>
                <CardDescription className="text-gray-400">
                  Our society has grown by 150% this past year, welcoming students from diverse academic backgrounds
                  into our AI community.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <User className="h-4 w-4 mr-1" />
                  Marcus Johansson
                </div>
                <Button
                  variant="outline"
                  className="w-full bg-transparent text-white border-gray-600 hover:border-buttercup"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-700 hover:border-buttercup transition-colors bg-gray-800 text-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-crocus text-white">Research</Badge>
                  <span className="text-sm text-gray-400">Dec 28, 2024</span>
                </div>
                <CardTitle className="text-buttercup">AI in Healthcare: 2024 Year in Review</CardTitle>
                <CardDescription className="text-gray-400">
                  A comprehensive look at how artificial intelligence transformed healthcare delivery and patient
                  outcomes throughout 2024.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <User className="h-4 w-4 mr-1" />
                  Healthcare AI Team
                </div>
                <Button
                  variant="outline"
                  className="w-full bg-transparent text-white border-gray-600 hover:border-buttercup"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-buttercup mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Subscribe to our newsletter to receive the latest AI news, research updates, and society announcements.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto bg-gray-800 border-2 border-gray-700 hover:border-buttercup transition-colors text-white">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-buttercup focus:border-transparent bg-gray-700 text-white"
                />
                <Button className="bg-buttercup hover:bg-yellow-400 text-soot-glue font-semibold px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-soot-glue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/images/logo-symbol.png"
                alt="LNU AI Society"
                width={32}
                height={32}
                className="h-8 w-auto filter invert"
              />
              <span className="text-xl font-bold text-buttercup">LNU AI Society</span>
            </Link>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <a href="#" className="text-white/80 hover:text-buttercup transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="text-white/80 hover:text-buttercup transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
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
