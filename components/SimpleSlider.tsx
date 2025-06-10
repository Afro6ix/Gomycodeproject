'use client'
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>

      <div className="relative w-full h-[750px]">
        {/* IMAGE */}
        <img
          src="/carl1.png" 
          alt="Landing Background"
          className="w-full h-full"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* OVERLAY */}
        <div className="absolute inset-0 flex items-center justify-end pr-36">
          <div className="text-left text-white max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Our Store
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              Explore the best products for your lifestyle.
            </p>
            <button className="bg-green-500 text-black px-6 py-3 rounded-md hover:bg-green-600 hover:cursor-pointer transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>


           <div className="relative w-full h-[750px]">
        {/* IMAGE */}
        <img
          src="/carl2.png" 
          alt="Landing Background"
          className="w-full h-full"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* OVERLAY */}
        <div className="absolute inset-0 flex items-center justify-end pr-36">
          <div className="text-left text-white max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Swing above the Pines
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              Everything You Need for the Perfect Swing.
            </p>
            <button className="bg-green-500 text-black px-6 py-3 rounded-md hover:bg-green-600 hover:cursor-pointer transition duration-300">
              View Products
            </button>
          </div>
        </div>
      </div>


           <div className="relative w-full h-[750px] bg-red-900">
        {/* IMAGE */}
        <img
          src="/carl3.png" 
          alt="Landing Background"
          className="w-full h-full"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* OVERLAY */}
        <div className="absolute inset-0 flex items-center justify-end pr-36">
          <div className="text-left text-white max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Your Golf Journey Starts Here
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              Gear Up. Tee Off. Play Your Best.
            </p>
            <button className="bg-green-500 text-black px-6 py-3 rounded-md hover:bg-green-600 hover:cursor-pointer transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>


           <div className="relative w-full h-[750px] bg-red-900">
        {/* IMAGE */}
        <img
          src="/carl4.png" 
          alt="Landing Background"
          className="w-full h-full"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* OVERLAY */}
        <div className="absolute inset-0 flex items-center justify-end pr-36">
          <div className="text-left text-white max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              The Home of Quality Golf Gear
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              Trusted by Golfers. Driven by Passion..
            </p>
            <button className="bg-green-500 text-black px-6 py-3 rounded-md hover:bg-green-600 hover:cursor-pointer transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>


    
     </Slider>
  );
}