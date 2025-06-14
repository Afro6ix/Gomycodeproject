'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { usePathname } from 'next/navigation'
import path from 'path'
import { useCart } from '@/context/CartContext';



const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const pathname = usePathname()

    const { cartCount } = useCart();


  


  return (
    <nav className="bg-white shadow-lg w-full top-0 z-50 h-[80px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto rounded-full" src="/Logo.png" alt="Logo" />
            <span className="ml-2 text-xl font-bold text-black">AJ Golf</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center w-full justify-between">
            {/* Left Links */}
            <div className="flex space-x-4 items-center">
              <Link href="/" className={`px-3 py-2 text-sm font-medium ${pathname === '/' ? 'text-green-600 underline' : 'text-gray-900'}`}>
                Home
              </Link>

              {/* Products Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-gray-900 hover:text-green-500 hover:underline px-3 py-2 text-sm font-medium"><Link href={`/products`} className={`px-3 py-2 text-sm font-medium ${pathname === '/products' ? 'text-green-600 underline' : 'text-gray-900'} `}>
                  Products
                </Link></button>
                {/* Mega Menu */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="flex  md:flex-row p-6 md:space-y-0 md:space-x-8">
                    {/* Left Column */}
                    <Link href="/products/overview" className="text-gray-600 hover:text-green-600">Overview</Link>
                    <Link href="/products/brand" className="text-gray-600 hover:text-green-600">Brands</Link>
                    <Link href="#" className="text-gray-600 hover:text-green-600">Categories</Link>
                  </div>
                </div>
              </div>

              <Link href="/about" className={`px-3 py-2 text-sm font-medium ${pathname === '/about' ? 'text-green-600 underline' : 'text-gray-900'} `}>
                About
              </Link>
              <Link href="/contact" className={`px-3 py-2 text-sm font-medium ${pathname === '/contact' ? 'text-green-600 underline' : 'text-gray-900'}`}>
                Contact
              </Link>

              {/* Cart with Badge */}
              <Link href="/cart" className="relative text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
                <ShoppingCart className="h-6 w-6 inline-block" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-3 bg-green-500 text-xs px-2 py-1 rounded-full text-white">
                    {cartCount}
                  </span>
                )}
              </Link>

            </div>

            {/* Search Bar */}
            <div className="mx-6 flex-1 max-w-md">
              <form className="w-full">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-600">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Auth */}
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-900 hover:text-green-500 px-3 py-2 text-sm font-medium">
                Login
              </Link>
              <Link href="/signUp" className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-black hover:bg-gray-100 focus:outline-none"
            >
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-2 pb-4 space-y-1 bg-white shadow-md">
          <Link href="/" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md text-base font-medium">Home</Link>
          
          {/* Mobile Products Dropdown */}
          <div>
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="flex justify-between w-full px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md text-base font-medium"
            ><Link href="/products">
              Products</Link>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {mobileDropdownOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link href="/products/overview" className="block text-gray-600 hover:text-green-600">Overview</Link>
                <Link href="/products/brand" className="block text-gray-600 hover:text-green-600">Brands</Link>
                <Link href="#" className="block text-gray-600 hover:text-green-600">Categories</Link>
              </div>
            )}
          </div>

          <Link href="/about" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md text-base font-medium">About</Link>
          <Link href="/contact" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md text-base font-medium">Contact</Link>
          <Link href="/cart" className="flex items-center px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md text-base font-medium">
          <ShoppingCart className="h-6 w-6 inline-block" />Cart({cartCount})
          </Link>

          {/* Auth Buttons */}
          <div className="border-t pt-4">
            <Link href="/login" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md text-base font-medium">Login</Link>
            <Link href="/signUp" className="block px-3 py-2 text-white bg-green-600 text-center rounded-md text-base font-medium hover:bg-green-700">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
// This code defines a responsive header component for a Next.js application.