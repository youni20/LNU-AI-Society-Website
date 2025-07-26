import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, BookOpen, Star } from "lucide-react"

export default function Courses() {
  return (
    <div className="min-h-screen bg-soot-glue text-white">
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
              <a href="/" className="text-white hover:text-buttercup transition-colors">
                Home
              </a>
              <a href="/about" className="text-white hover:text-buttercup transition-colors">
                About
              </a>
              <a href="/courses" className="text-white hover:text-buttercup transition-colors font-medium">
                Courses
              </a>
              <a href="/events" className="text-white hover:text-buttercup transition-colors">
                Events
              </a>
              <a href="/news" className="text-white hover:text-buttercup transition-colors">
                News
              </a>
              <Button className="bg-buttercup hover:bg-yellow-400 text-soot-glue font-semibold">Join Us</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Courses Hero */}
      <section className="bg-buttercup py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-soot-glue mb-4">AI Courses & Workshops</h1>
          <p className="text-xl text-soot-glue max-w-3xl mx-auto">
            Comprehensive learning paths designed to take you from beginner to advanced in artificial intelligence and
            machine learning.
          </p>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 bg-soot-glue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Learning Paths</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your learning journey based on your current skill level and interests.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-gray-700 hover:border-buttercup transition-colors bg-gray-800">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-crocus rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">Beginner</CardTitle>
                <CardDescription className="text-gray-300">Perfect for those new to AI</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center mb-4">
                  Start your AI journey with fundamental concepts and hands-on exercises.
                </p>
                <div className="text-center">
                  <Badge className="bg-crocus text-white">4 Courses</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-700 hover:border-buttercup transition-colors bg-gray-800">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-ivy rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">Intermediate</CardTitle>
                <CardDescription className="text-gray-300">Build on your existing knowledge</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center mb-4">
                  Dive deeper into machine learning algorithms and practical applications.
                </p>
                <div className="text-center">
                  <Badge className="bg-ivy text-white">6 Courses</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-700 hover:border-buttercup transition-colors bg-gray-800">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-azalea rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">Advanced</CardTitle>
                <CardDescription className="text-gray-300">Master cutting-edge techniques</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center mb-4">
                  Explore advanced topics like deep learning, NLP, and computer vision.
                </p>
                <div className="text-center">
                  <Badge className="bg-azalea text-white">5 Courses</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-lily-valley">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-soot-glue mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our most popular and comprehensive courses to get you started in AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-2 border-gray-700 hover:border-buttercup transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-crocus text-white">Beginner</Badge>
                  <div className="flex items-center text-sm text-gray-300">
                    <Star className="h-4 w-4 mr-1 fill-current text-yellow-400" />
                    4.8
                  </div>
                </div>
                <CardTitle className="text-white">Introduction to Machine Learning</CardTitle>
                <CardDescription className="text-gray-300">
                  Learn the fundamentals of ML algorithms, data preprocessing, and model evaluation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-300 mb-2">
                  <Clock className="h-4 w-4 mr-2" />8 weeks • 2 hours/week
                </div>
                <div className="flex items-center text-sm text-gray-300 mb-4">
                  <Users className="h-4 w-4 mr-2" />
                  45 enrolled
                </div>
                <Button className="w-full bg-buttercup hover:bg-yellow-400 text-soot-glue font-semibold">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-gray-700 hover:border-buttercup transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-ivy text-white">Intermediate</Badge>
                  <div className="flex items-center text-sm text-gray-300">
                    <Star className="h-4 w-4 mr-1 fill-current text-yellow-400" />
                    4.9
                  </div>
                </div>
                <CardTitle className="text-white">Deep Learning with Python</CardTitle>
                <CardDescription className="text-gray-300">
                  Master neural networks, CNNs, and RNNs using TensorFlow and PyTorch.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-300 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  12 weeks • 3 hours/week
                </div>
                <div className="flex items-center text-sm text-gray-300 mb-4">
                  <Users className="h-4 w-4 mr-2" />
                  32 enrolled
                </div>
                <Button className="w-full bg-buttercup hover:bg-yellow-400 text-soot-glue font-semibold">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-gray-700 hover:border-buttercup transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-crocus text-white">Beginner</Badge>
                  <div className="flex items-center text-sm text-gray-300">
                    <Star className="h-4 w-4 mr-1 fill-current text-yellow-400" />
                    4.7
                  </div>
                </div>
                <CardTitle className="text-white">Data Science Fundamentals</CardTitle>
                <CardDescription className="text-gray-300">
                  Learn data analysis, visualization, and statistical methods for AI applications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-300 mb-2">
                  <Clock className="h-4 w-4 mr-2" />6 weeks • 2.5 hours/week
                </div>
                <div className="flex items-center text-sm text-gray-300 mb-4">
                  <Users className="h-4 w-4 mr-2" />
                  58 enrolled
                </div>
                <Button className="w-full bg-buttercup hover:bg-yellow-400 text-soot-glue font-semibold">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-gray-700 hover:border-buttercup transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-azalea text-white">Advanced</Badge>
                  <div className="flex items-center text-sm text-gray-300">
                    <Star className="h-4 w-4 mr-1 fill-current text-yellow-400" />
                    4.9
                  </div>
                </div>
                <CardTitle className="text-white">Natural Language Processing</CardTitle>
                <CardDescription className="text-gray-300">
                  Explore text processing, sentiment analysis, and language models like GPT.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-300 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  10 weeks • 4 hours/week
                </div>
                <div className="flex items-center text-sm text-gray-300 mb-4">
                  <Users className="h-4 w-4 mr-2" />
                  28 enrolled
                </div>
                <Button className="w-full bg-buttercup hover:bg-yellow-400 text-soot-glue font-semibold">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-gray-700 hover:border-buttercup transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-ivy text-white">Intermediate</Badge>
                  <div className="flex items-center text-sm text-gray-300">
                    <Star className="h-4 w-4 mr-1 fill-current text-yellow-400" />
                    4.8
                  </div>
                </div>
                <CardTitle className="text-white">Computer Vision</CardTitle>
                <CardDescription className="text-gray-300">
                  Learn image processing, object detection, and facial recognition techniques.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-300 mb-2">
                  <Clock className="h-4 w-4 mr-2" />8 weeks • 3 hours/week
                </div>
                <div className="flex items-center text-sm text-gray-300 mb-4">
                  <Users className="h-4 w-4 mr-2" />
                  35 enrolled
                </div>
                <Button className="w-full bg-buttercup hover:bg-yellow-400 text-soot-glue font-semibold">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-2 border-gray-700 hover:border-buttercup transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-azalea text-white">Advanced</Badge>
                  <div className="flex items-center text-sm text-gray-300">
                    <Star className="h-4 w-4 mr-1 fill-current text-yellow-400" />
                    4.9
                  </div>
                </div>
                <CardTitle className="text-white">AI Ethics & Responsible AI</CardTitle>
                <CardDescription className="text-gray-300">
                  Understand the ethical implications and responsible development of AI systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-300 mb-2">
                  <Clock className="h-4 w-4 mr-2" />4 weeks • 2 hours/week
                </div>
                <div className="flex items-center text-sm text-gray-300 mb-4">
                  <Users className="h-4 w-4 mr-2" />
                  42 enrolled
                </div>
                <Button className="w-full bg-buttercup hover:bg-yellow-400 text-soot-glue font-semibold">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="bg-soot-glue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <a href="/" className="flex items-center space-x-3 mb-4 md:mb-0">
              <img
                src="/images/logo-symbol.png"
                alt="LNU AI Society"
                width={32}
                height={32}
                className="h-8 w-auto filter invert"
              />
              <span className="text-xl font-bold text-buttercup">LNU AI Society</span>
            </a>
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