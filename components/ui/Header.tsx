// components/Header.tsx
"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "About", href: "/about" },
    { name: "Products", href: "#products" },
    { name: "Customers", href: "#customers" },
    { name: "Download", href: "#download" },
    { name: "Contact", href: "#contact" },
    { name: "Vacancy", href: "#vacancy" },
    { name: "Open PDF", action: () => window.open('gitref.pdf', '_blank') }
  ]

  return (
    <>
      {/* Navigation */}
      <nav className="p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight hover:text-teal-300 transition-colors">MediPro</Link>
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href ?? '#'} className="hover:text-teal-300 transition-colors">{item.name}</Link>
            ))}
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-blue-900/95 z-10 flex flex-col items-center justify-center space-y-8">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href ?? '#'} className="text-2xl hover:text-teal-300 transition-colors">{item.name}</Link>
          ))}
          <Button 
            variant="outline" 
            onClick={() => setIsMenuOpen(false)}
            className="mt-8"
          >
            Close
          </Button>
        </div>
      )}
    </>
  )
}

export default Header;