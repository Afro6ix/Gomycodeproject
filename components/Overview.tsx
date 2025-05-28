import React from 'react'

const Overview = () => {
  return (
    <div className="bg-gray-100 my-12 shadow-2xl container mx-auto px-6 py-12 lg:px-8 lg:py-16 lg:max-w-7xl md:py-20 md:px-12 md:max-w-6xl sm:py-16 sm:px-8 sm:max-w-5xl">
        <h1 className="text-3xl font-bold text-center my-8">Overview</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Welcome to the Jaara Golf overview page! Here you can find a summary of our products, services, and latest updates.
            Explore our wide range of golf equipment, apparel, and accessories designed to enhance your game.
        </p>
        <div className="mt-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
            <ul className="list-disc pl-5 space-y-2">
            <li>High-performance golf clubs</li>
            <li>Premium golf balls</li>
            <li>Stylish golf apparel</li>
            <li>Advanced golf accessories</li>
            </ul>
        </div>
        <div className="mt-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>
            <p className="text-gray-700">
                Stay tuned for our upcoming events, product launches, and special promotions. Follow us on social media for the latest news and updates.
            </p>
        </div>
    </div>
  )
}

export default Overview