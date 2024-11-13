"use client"
import { useState } from 'react'
import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Menu, Hospital, BarChart2, Package, Users, Clock } from "lucide-react"

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    { icon: Hospital, title: "Hospital Management" },
    { icon: BarChart2, title: "Financial Analytics" },
    { icon: Package, title: "Inventory Tracking" },
    { icon: Users, title: "Payroll Management" },
    { icon: Clock, title: "Attendance Tracking" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 to-blue-900 text-white relative overflow-hidden">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-8 text-center">About MEDIPRO</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xl mb-6">
              MEDIPRO is a leading provider of comprehensive software solutions for modern healthcare facilities. Our mission is to streamline hospital operations, enhance financial management, and improve overall efficiency in the healthcare sector.
            </p>
            <p className="text-xl mb-6">
              Founded in 2010, we have grown from a small startup to a trusted partner for hospitals and clinics across the country. Our team of experienced developers, healthcare professionals, and customer support specialists work tirelessly to ensure that our software meets the evolving needs of the medical industry.
            </p>
            <Button className="bg-teal-500 hover:bg-teal-600 text-blue-900 font-semibold">
              Learn More About Our Team
            </Button>
          </div>
          
          <Card className="bg-white/10 backdrop-blur-lg shadow-xl">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Core Features</h2>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-teal-400 to-blue-500 p-2 rounded-full">
                      <feature.icon className="h-6 w-6 text-blue-900" />
                    </div>
                    <span className="font-medium">{feature.title}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Commitment</h2>
          <p className="text-xl text-center max-w-3xl mx-auto">
            At MEDIPRO, we are committed to driving innovation in healthcare management. We believe that by providing powerful, user-friendly software tools, we can help healthcare providers focus on what matters most: patient care.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}