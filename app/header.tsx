// Header.js
"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Customers", href: "/customers" },
    { name: "Download", href: "/download" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="p-6 bg-gradient-to-r from-teal-800 to-blue-800 text-white shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-tight hover:text-teal-300 transition-colors">
          MEDIPRO
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <a key={index} href={item.href} className="hover:text-teal-300 transition-colors">
              {item.name}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-blue-900/95 z-10 flex flex-col items-center justify-center space-y-8">
          {menuItems.map((item, index) => (
            <a key={index} href={item.href} className="text-2xl hover:text-teal-300 transition-colors">
              {item.name}
            </a>
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
    </header>
  )
}
