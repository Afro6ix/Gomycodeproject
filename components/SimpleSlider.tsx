'use client'
import React from "react";
import Slider from "react-slick";
import Image from "next/image"; // It's good practice to use Next.js Image component for optimization

// Import slick carousel css (ensure these are installed: npm install slick-carousel react-slick)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    // --- Responsive settings for different breakpoints ---
    responsive: [
      {
        breakpoint: 1024, // Applies to screens smaller than 1024px (lg breakpoint)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768, // Applies to screens smaller than 768px (md breakpoint)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 480, // Applies to screens smaller than 480px (sm breakpoint equivalent for custom use)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  };

  return (
    <div className="simple-slider-container"> {/* Added a wrapper for potential global slick overrides if needed */}
      <Slider {...settings}>

        {/* Slide 1 */}
        <div className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[750px] xl:h-[850px] overflow-hidden"> {/* Responsive height, added xl for extra large screens */}
          {/* IMAGE */}
          <Image
            src="/carl1.png"
            alt="Welcome to Our Store"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/50" />

          {/* OVERLAY CONTENT */}
          <div className="absolute inset-0 flex items-center justify-center sm:justify-end px-4 sm:px-8 md:pr-16 lg:pr-36 xl:pr-48"> {/* Responsive positioning and padding */}
            <div className="text-center sm:text-left text-white max-w-sm sm:max-w-md lg:max-w-xl"> {/* Responsive max-width and text alignment */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
                Welcome to Our Store
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6">
                Explore the best products for your lifestyle.
              </p>
              <button className="bg-green-500 text-black px-5 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-green-600 hover:cursor-pointer transition duration-300 text-sm sm:text-base">
                Shop Now
              </button>
            </div>
          </div>
        </div>


        {/* Slide 2 */}
        <div className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[750px] xl:h-[850px] overflow-hidden">
          <Image
            src="/carl2.png"
            alt="Swing above the Pines"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center sm:justify-end px-4 sm:px-8 md:pr-16 lg:pr-36 xl:pr-48">
            <div className="text-center sm:text-left text-white max-w-sm sm:max-w-md lg:max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
                Swing above the Pines
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6">
                Everything You Need for the Perfect Swing.
              </p>
              <button className="bg-green-500 text-black px-5 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-green-600 hover:cursor-pointer transition duration-300 text-sm sm:text-base">
                View Products
              </button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[750px] xl:h-[850px] overflow-hidden">
          <Image
            src="/carl3.png"
            alt="Your Golf Journey Starts Here"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center sm:justify-end px-4 sm:px-8 md:pr-16 lg:pr-36 xl:pr-48">
            <div className="text-center sm:text-left text-white max-w-sm sm:max-w-md lg:max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
                Your Golf Journey Starts Here
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6">
                Gear Up. Tee Off. Play Your Best.
              </p>
              <button className="bg-green-500 text-black px-5 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-green-600 hover:cursor-pointer transition duration-300 text-sm sm:text-base">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[750px] xl:h-[850px] overflow-hidden">
          <Image
            src="/carl4.png"
            alt="The Home of Quality Golf Gear"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center sm:justify-end px-4 sm:px-8 md:pr-16 lg:pr-36 xl:pr-48">
            <div className="text-center sm:text-left text-white max-w-sm sm:max-w-md lg:max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
                The Home of Quality Golf Gear
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6">
                Trusted by Golfers. Driven by Passion.
              </p>
              <button className="bg-green-500 text-black px-5 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-green-600 hover:cursor-pointer transition duration-300 text-sm sm:text-base">
                Shop Now
              </button>
            </div>
          </div>
        </div>

      </Slider>
    </div>
  );
}