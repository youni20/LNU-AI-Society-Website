"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface MobileNavProps {
  currentPath?: string
}

export function MobileNav({ currentPath = "/" }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/courses", label: "Courses" },
    { href: "/events", label: "Events" },
    { href: "/news", label: "News" },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMenu}
          className="text-white hover:text-buttercup hover:bg-gray-800"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={toggleMenu} />
          <div className="fixed top-0 right-0 h-full w-64 bg-soot-glue border-l border-gray-700 shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <Link href="/" className="flex items-center space-x-2" onClick={toggleMenu}>
                <Image
                  src="/images/logo-symbol.png"
                  alt="LNU AI Society Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="text-lg font-bold text-white">LNU AI Society</span>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="text-white hover:text-buttercup hover:bg-gray-800"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="p-4">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block text-lg transition-colors ${
                      currentPath === item.href ? "text-buttercup font-medium" : "text-white hover:text-buttercup"
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button className="w-full bg-buttercup hover:bg-yellow-400 text-soot-glue font-semibold">
                    Join Us
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
