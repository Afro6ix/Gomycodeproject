'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, User, UserPlus } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation' // Import useRouter
import { useCart } from '@/context/CartContext';


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('') // State for the search input
  const pathname = usePathname()
  const router = useRouter() // Initialize useRouter
  const { cartCount } = useCart();

  // Function to handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission (page reload)
    if (searchTerm.trim()) { // Only proceed if the search term is not empty or just spaces
      // Encode the search term to handle special characters in the URL
      router.push(`?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm(''); // Optionally clear the search input after submission
    }
  };

  return (
    <nav className="bg-white shadow-lg w-full top-0 z-50 h-[80px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between h-16 items-center w-full">

          {/* Logo (Brand) - Always on the left */}
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto rounded-full" src="/Logo.png" alt="Logo" />
            <span className="ml-2 text-xl font-bold text-black">AJ Golf</span>
          </div>

          {/* Desktop Navigation, Search, and Auth - Hidden on small screens */}
          <div className="hidden sm:flex flex-1 items-center justify-center">

            {/* Main Navigation Links (Middle on larger screens) */}
            <div className="flex space-x-4 items-center mx-auto">
              <Link href="/home" className={`px-3 py-2 text-sm font-medium ${pathname === '/home' ? 'text-green-600 underline' : 'text-gray-900'}`}>
                Home
              </Link>

              {/* Products Dropdown (Desktop) */}
              <div className="relative group">
                <button className="flex items-center text-gray-900 hover:text-green-500 hover:underline px-3 py-2 text-sm font-medium">
                  <Link href="/products/overview" className={`px-3 py-2 text-sm font-medium ${pathname.startsWith('/products') ? 'text-green-600 underline' : 'text-gray-900'} `}>
                    Products
                  </Link>
                </button>
                {/* Mega Menu - Vertical Layout */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 min-w-[160px] bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-2">
                  <div className="flex flex-col space-y-1">
                    <Link href="/products/overview" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-600 whitespace-nowrap">Overview</Link>
                    <Link href="/products/brand" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-600 whitespace-nowrap">Brands</Link>
                    <Link href="/products/categories" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-600 whitespace-nowrap">Categories</Link>
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

            {/* Right Group: Search Bar and Auth */}
            <div className="flex items-center space-x-4 ml-auto">
              {/* Search Bar - MODIFIED */}
              <div className="flex-shrink max-w-xs">
                <form onSubmit={handleSearchSubmit} className="w-full"> {/* Add onSubmit handler */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                      value={searchTerm} // Bind input value to state
                      onChange={(e) => setSearchTerm(e.target.value)} // Update state on change
                    />
                    <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-600">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              {/* Auth Icons */}
              <Link href="/loginn" className="text-gray-900 hover:text-green-500 px-3 py-2 text-sm font-medium">
                <User className="h-6 w-6 inline-block" />
              </Link>
              <Link href="/login" className="text-gray-900 hover:text-green-500 px-3 py-2 text-sm font-medium">
                <User className="h-6 w-6 inline-block" />
              </Link>
              <Link href="/register" className="bg-green-600 text-green-100 px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700">
                <UserPlus className="h-6 w-6 inline-block text-white" />
              </Link>
            </div>
          </div>

          {/* Mobile menu button and Cart icon for small screens */}
          <div className="sm:hidden flex items-center space-x-4 z-50">
            {/* Mobile Cart with Badge */}
            <Link href="/cart" className="relative text-gray-900 hover:text-green-600 text-sm font-medium">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-3 bg-green-500 text-xs px-2 py-1 rounded-full text-white">
                  {cartCount}
                </span>
              )}
            </Link>
            {/* Mobile Menu Button - ADDED SEARCH LOGIC TO IT (Optional, usually less common) */}
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                console.log('Mobile menu toggled. New state:', !mobileMenuOpen);
              }}
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
        <div className="sm:hidden w-full absolute top-[80px] left-0 bg-green-800 shadow-md py-4 text-center z-40">
          <div className="px-4 space-y-3">
            {/* Mobile Search Bar within the mobile menu - NEW ADDITION */}
            <form onSubmit={handleSearchSubmit} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-600">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                </button>
              </div>
            </form>
            {/* End Mobile Search Bar */}

            <Link href="/home" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-white hover:bg-green-700 rounded-md text-base font-medium">Home</Link>

            {/* Mobile Products Dropdown */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="flex justify-between items-center w-full max-w-xs px-3 py-2 text-white hover:bg-green-700 rounded-md text-base font-medium"
              >
                <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="flex-1 text-center">
                    Products
                </Link>
                <svg className={`w-5 h-5 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {mobileDropdownOpen && (
                <div className="mt-2 space-y-2 w-full max-w-xs">
                  <Link href="/products/overview" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-green-200 hover:text-white rounded-md text-base font-medium text-center">Overview</Link>
                  <Link href="/products/brand" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-green-200 hover:text-white rounded-md text-base font-medium text-center">Brands</Link>
                  <Link href="/products/categories" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-green-200 hover:text-white rounded-md text-base font-medium text-center">Categories</Link>
                </div>
              )}
            </div>

            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-white hover:bg-green-700 rounded-md text-base font-medium">About</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-white hover:bg-green-700 rounded-md text-base font-medium">Contact</Link>

            {/* Auth Buttons */}
            <div className="border-t pt-4 space-y-2 border-green-700">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-white hover:bg-green-700 rounded-md text-base font-medium flex items-center justify-center">
                <User className="h-6 w-6 inline-block mr-2" />
              </Link>
              <Link href="/register" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-white bg-green-600 text-center rounded-md text-base font-medium hover:bg-green-700 flex items-center justify-center">
                <UserPlus className="h-6 w-6 inline-block text-white mr-2" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header