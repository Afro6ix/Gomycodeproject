'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)

  const cartCount = 0 // Replace with dynamic value later

  return (
    <nav className="bg-white shadow-lg w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto rounded-full" src="/Logo.png" alt="Logo" />
            <span className="ml-2 text-xl font-bold text-black">Jaara Golf</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center w-full justify-between">
            {/* Left Links */}
            <div className="flex space-x-4 items-center">
              <Link href="/" className="text-gray-900 hover:text-green-600 hover:underline px-3 py-2 text-sm font-medium">
                Home
              </Link>

              {/* Products Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-gray-900 hover:text-green-500 hover:underline px-3 py-2 text-sm font-medium">
                  Products
                  <svg className="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {/* Mega Menu */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="flex  md:flex-row p-6 md:space-y-0 md:space-x-8">
                    {/* Left Column */}
                    <Link href="/Products/Overview" className="text-gray-600 hover:text-green-600">Overview</Link>
                    <Link href="/Products/Brands" className="text-gray-600 hover:text-green-600">Brands</Link>
                    <Link href="#" className="text-gray-600 hover:text-green-600">Categories</Link>
                    <Link href="#" className="text-gray-600 hover:text-green-600">Collections</Link>
                  </div>
                </div>
              </div>

              <Link href="/About" className="text-gray-900 hover:text-green-500 hover:underline px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Link href="/Contact" className="text-gray-900 hover:text-green-500 hover:underline px-3 py-2 text-sm font-medium">
                Contact
              </Link>

              {/* Cart with Badge */}
              <Link href="/Cart" className="relative text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
                <ShoppingCart className="h-6 w-6 inline-block" />
                <span className="absolute top-1 right-2 transform translate-x-1/2 -translate-y-1/2 bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
                </span>
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
              <Link href="/Login" className="text-gray-900 hover:text-green-500 px-3 py-2 text-sm font-medium">
                Login
              </Link>
              <Link href="/SignUp" className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700">
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
            >
              Products
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {mobileDropdownOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link href="#" className="block text-gray-600 hover:text-green-600">Overview</Link>
                <Link href="#" className="block text-gray-600 hover:text-green-600">Brands</Link>
                <Link href="#" className="block text-gray-600 hover:text-green-600">Categories</Link>
                <Link href="#" className="block text-gray-600 hover:text-green-600">Collections</Link>
              </div>
            )}
          </div>

          <Link href="/About" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md text-base font-medium">About</Link>
          <Link href="/Contact" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md text-base font-medium">Contact</Link>
          <Link href="/Cart" className="flex items-center px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md text-base font-medium">
            <i className="fas fa-shopping-cart mr-2"></i>
            Cart ({cartCount})
          </Link>

          {/* Auth Buttons */}
          <div className="border-t pt-4">
            <Link href="/Login" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md text-base font-medium">Login</Link>
            <Link href="/SignUp" className="block px-3 py-2 text-white bg-green-600 text-center rounded-md text-base font-medium hover:bg-green-700">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
// This code defines a responsive header component for a Next.js application.