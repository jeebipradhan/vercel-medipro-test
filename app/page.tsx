"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Hospital, BarChart2, Package, Play, Menu } from "lucide-react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 to-blue-900 text-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 p-6 z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-2xl font-bold tracking-tight">MEDIPRO</span>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-teal-300 transition-colors">Features</a>
            <a href="#" className="hover:text-teal-300 transition-colors">Pricing</a>
            <a href="#" className="hover:text-teal-300 transition-colors">About</a>
            <a href="#" className="hover:text-teal-300 transition-colors">Contact</a>
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
          <a href="#" className="text-2xl hover:text-teal-300 transition-colors">Features</a>
          <a href="#" className="text-2xl hover:text-teal-300 transition-colors">Pricing</a>
          <a href="#" className="text-2xl hover:text-teal-300 transition-colors">About</a>
          <a href="#" className="text-2xl hover:text-teal-300 transition-colors">Contact</a>
          <Button 
            variant="outline" 
            onClick={() => setIsMenuOpen(false)}
            className="mt-8"
          >
            Close
          </Button>
        </div>
      )}

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center">
        {/* Abstract Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Streamline Your Hospital Operations
              </h1>
              <p className="text-xl mb-8 text-teal-100">
                Powerful accounting and inventory management software tailored for modern healthcare facilities.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-teal-500 hover:bg-teal-600 text-blue-900 font-semibold">
                  Get Started
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  <Play className="mr-2 h-4 w-4" /> Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Hospital, title: "Hospital Management" },
                    { icon: BarChart2, title: "Financial Analytics" },
                    { icon: Package, title: "Inventory Tracking" },
                    { icon: Play, title: "Training Resources" }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="bg-gradient-to-br from-teal-400 to-blue-500 p-3 rounded-full mb-4">
                        <item.icon className="h-8 w-8 text-blue-900" />
                      </div>
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full blur-2xl opacity-50" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full blur-2xl opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}