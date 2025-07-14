import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Events() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logo-symbol.png"
                alt="LNU AI Society Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-buttercup">LNU AI Society</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-buttercup transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-buttercup transition-colors">
                About
              </Link>
              <Link href="/courses" className="text-gray-300 hover:text-buttercup transition-colors">
                Courses
              </Link>
              <Link href="/events" className="text-gray-300 hover:text-buttercup transition-colors font-medium">
                Events
              </Link>
              <Link href="/news" className="text-gray-300 hover:text-buttercup transition-colors">
                News
              </Link>
              <Button className="bg-buttercup hover:bg-yellow-400 text-soot-glue font-semibold">Join Us</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Events Hero */}
      <section className="bg-buttercup py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-soot-glue mb-4">Events & Workshops</h1>
          <p className="text-xl text-soot-glue max-w-3xl mx-auto">
            Join us for exciting events, workshops, and networking opportunities throughout the academic year.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-buttercup mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't miss out on these exciting opportunities to learn, network, and innovate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-700 border-2 border-gray-600 hover:border-buttercup transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-crocus text-white">Workshop</Badge>
                  <span className="text-sm text-gray-400">Jan 25, 2025</span>
                </div>
                <CardTitle className="text-white">Introduction to Machine Learning</CardTitle>
                <CardDescription className="text-gray-400">
                  A beginner-friendly workshop covering the fundamentals of ML algorithms and practical applications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  14:00 - 17:00
                </div>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  Room G2:05, Linnaeus University
                </div>
                <Button className="w-full bg-buttercup hover:bg-yellow-400 text-soot-glue font-semibold">
                  Register Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-2 border-gray-600 hover:border-buttercup transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-ivy text-white">Hackathon</Badge>
                  <span className="text-sm text-gray-400">Feb 8-9, 2025</span>
                </div>
                <CardTitle className="text-white">AI for Sustainability Hackathon</CardTitle>
                <CardDescription className="text-gray-400">
                  48-hour hackathon focused on developing AI solutions for environmental challenges.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  Friday 18:00 - Sunday 18:00
                </div>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  Innovation Lab, LNU
                </div>
                <Button className="w-full bg-buttercup hover:bg-yellow-400 text-soot-glue font-semibold">
                  Register Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-2 border-gray-600 hover:border-buttercup transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-azalea text-white">Guest Lecture</Badge>
                  <span className="text-sm text-gray-400">Feb 22, 2025</span>
                </div>
                <CardTitle className="text-white">Ethics in AI Development</CardTitle>
                <CardDescription className="text-gray-400">
                  Industry expert discussing responsible AI development and ethical considerations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  15:00 - 16:30
                </div>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  Lecture Hall B1:01
                </div>
                <Button className="w-full bg-buttercup hover:bg-yellow-400 text-soot-glue font-semibold">
                  Register Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-2 border-gray-600 hover:border-buttercup transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-crocus text-white">Workshop</Badge>
                  <span className="text-sm text-gray-400">Mar 5, 2025</span>
                </div>
                <CardTitle className="text-white">Deep Learning with TensorFlow</CardTitle>
                <CardDescription className="text-gray-400">
                  Hands-on workshop building neural networks and training deep learning models.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  13:00 - 17:00
                </div>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  Computer Lab C3:12
                </div>
                <Button className="w-full bg-buttercup hover:bg-yellow-400 text-soot-glue font-semibold">
                  Register Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-2 border-gray-600 hover:border-buttercup transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-ivy text-white">Networking</Badge>
                  <span className="text-sm text-gray-400">Mar 15, 2025</span>
                </div>
                <CardTitle className="text-white">AI Industry Meetup</CardTitle>
                <CardDescription className="text-gray-400">
                  Network with AI professionals, researchers, and fellow students over coffee and discussions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  17:00 - 19:00
                </div>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  Student Union Café
                </div>
                <Button className="w-full bg-buttercup hover:bg-yellow-400 text-soot-glue font-semibold">
                  Register Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-2 border-gray-600 hover:border-buttercup transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-azalea text-white">Competition</Badge>
                  <span className="text-sm text-gray-400">Apr 12, 2025</span>
                </div>
                <CardTitle className="text-white">AI Project Showcase</CardTitle>
                <CardDescription className="text-gray-400">
                  Present your AI projects and compete for prizes in our annual showcase event.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  14:00 - 18:00
                </div>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  Main Auditorium
                </div>
                <Button className="w-full bg-buttercup hover:bg-yellow-400 text-soot-glue font-semibold">
                  Submit Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-buttercup mb-4">Types of Events</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We organize various types of events to cater to different interests and skill levels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-800 border-2 border-gray-600 hover:border-buttercup transition-colors text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-crocus rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <CardTitle className="text-white">Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Hands-on learning sessions covering specific AI topics and tools.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-gray-600 hover:border-buttercup transition-colors text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-ivy rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
                <CardTitle className="text-white">Hackathons</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Intensive coding events to build AI solutions for real-world problems.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-gray-600 hover:border-buttercup transition-colors text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-azalea rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎤</span>
                </div>
                <CardTitle className="text-white">Guest Lectures</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Talks by industry experts and researchers sharing their insights.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-gray-600 hover:border-buttercup transition-colors text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-buttercup rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <CardTitle className="text-white">Networking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Social events to connect with peers and build professional relationships.
                </p>
              </CardContent>
            </Card>
          </div>
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
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </a>
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
