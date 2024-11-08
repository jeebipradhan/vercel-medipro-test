// /pages/page.tsx

import { Code, Laptop, Zap } from "lucide-react"; // Ensure lucide-react is installed
import Link from "next/link";

// Simple Button component
const Button = ({ children, variant = "default", ...props }: {
  children: React.ReactNode;
  variant?: "default" | "outline";
  [key: string]: any;
}) => {
  const baseStyle = "px-4 py-2 font-semibold rounded-md";
  const variantStyle = variant === "outline"
    ? "border border-gray-300 text-gray-700"
    : "bg-blue-500 text-white";

  return (
    <button className={`${baseStyle} ${variantStyle}`} {...props}>
      {children}
    </button>
  );
};

// Simple Input component
const Input = ({ ...props }) => {
  return (
    <input
      className="border rounded-md px-4 py-2"
      {...props}
    />
  );
};

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Medipro Computers PVT LTD
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  30 years of Software Excellence
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Features</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4">
                <Laptop className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Cloud-Based Solution</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Access your work from anywhere, anytime. Our cloud-based platform ensures your data is always at your fingertips.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Code className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Advanced Analytics</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Gain valuable insights with our powerful analytics tools. Make data-driven decisions to propel your business forward.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Zap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Seamless Integration</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Easily integrate with your existing tools and workflows. Our software adapts to your needs, not the other way around.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay Updated</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Subscribe to our newsletter for the latest updates and exclusive offers.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
