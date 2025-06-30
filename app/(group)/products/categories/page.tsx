'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import GolfShirts  from '@/components/GolfShirts';
import GolfShoes from '@/components/GolfShoes';
import GolfTrousers from '@/components/GolfTrousers';
import Balls from '@/components/Balls';
import Bags from '@/components/Bags';
import Trolleys from '@/components/GolfTrolleys';
import Tees from '@/components/GolfTees';
import Gloves from '@/components/GolfGloves';
import RangeFinder from '@/components/RangeFinder';

function Categories() {
  const { addToCart } = useCart();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 6,
  };

  return (
    <div className="p-6">
      
      <h2 className="text-3xl text-gray-800 font-bold mb-4 container mx-auto">Shirts</h2>
      <Slider {...settings} className="mb-10 container mx-auto animate-slide">
        {GolfShirts.map((item) => (
          <div key={item.id}>
            <Image src={item.image} alt={item.name} width={300} height={300} />
            <div className="text-center mt-2">
              <p className="font-semibold">{item.name}</p>
              <p className="font-bold">₦{item.price}</p>
              <button
               onClick={() =>
               addToCart({ id: item.id, name: item.name, image: item.image, price: item.price })}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>
      
      <h2 className="text-3xl text-gray-800 font-bold mb-4 container mx-auto">Trousers</h2>
      <Slider {...settings} className="mb-10 container mx-auto">
        {GolfTrousers.map((item) => (
          <div key={item.id}>
            <Image src={item.image} alt={item.name} width={300} height={300} />
            <div className="text-center mt-2">
              <p className="font-semibold">{item.name}</p>
              <p className="font-bold">₦{item.price}</p>
              <button
                onClick={() =>
               addToCart({ id: item.id, name: item.name, image: item.image, price: item.price })}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>
      

      <h2 className="text-3xl text-gray-800 font-bold mb-4 container mx-auto">Shoes</h2>
      <Slider {...settings} className="mb-10 container mx-auto">
        {GolfShoes.map((item) => (
          <div key={item.id}>
            <Image src={item.image} alt={item.name} width={300} height={300} />
            <div className="text-center mt-2">
              <p className="font-semibold">{item.name}</p>
              <p className="font-bold">₦{item.price}</p>
              <button
              onClick={() =>
               addToCart({ id: item.id, name: item.name, image: item.image, price: item.price })}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>

       <h2 className="text-3xl text-gray-800 font-bold mb-4 container mx-auto">Balls</h2>
       <Slider {...settings} className="mb-10 container mx-auto">
        {Balls.map((item) => (
          <div key={item.id}>
            <Image src={item.image} alt={item.name} width={300} height={300} />
            <div className="text-center mt-2">
              <p className="font-semibold">{item.name}</p>
              <p className="font-bold">₦{item.price}</p>
              <button
              onClick={() =>
               addToCart({ id: item.id, name: item.name, image: item.image, price: item.price })}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>

       <h2 className="text-3xl text-gray-800 font-bold mb-4 container mx-auto">Bags</h2>
       <Slider {...settings} className="mb-10 container mx-auto">
        {Bags.map((item) => (
          <div key={item.id}>
            <Image src={item.image} alt={item.name} width={400} height={400} />
            <div className="text-center mt-2">
              <p className="font-semibold">{item.name}</p>
              <p className="font-bold">₦{item.price}</p>
              <button
              onClick={() =>
               addToCart({ id: item.id, name: item.name, image: item.image, price: item.price })}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>

      <h2 className="text-3xl text-gray-800 font-bold mb-4 container mx-auto">Trolleys</h2>
       <Slider {...settings} className="mb-10 container mx-auto">
        {Trolleys.map((item) => (
          <div key={item.id}>
            <Image src={item.image} alt={item.name} width={400} height={400} />
            <div className="text-center mt-2">
              <p className="font-semibold">{item.name}</p>
              <p className="font-bold">₦{item.price}</p>
              <button
              onClick={() =>
               addToCart({ id: item.id, name: item.name, image: item.image, price: item.price })}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>

      <h2 className="text-3xl text-gray-800 font-bold mb-4 container mx-auto">Tees</h2>
       <Slider {...settings} className="mb-10 container mx-auto">
        {Tees.map((item) => (
          <div key={item.id}>
            <Image src={item.image} alt={item.name} width={300} height={300} />
            <div className="text-center mt-2">
              <p className="font-semibold">{item.name}</p>
              <p className="font-bold">₦{item.price}</p>
              <button
              onClick={() =>
               addToCart({ id: item.id, name: item.name, image: item.image, price: item.price })}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>

      <h2 className="text-3xl text-gray-800 font-bold mb-4 container mx-auto">Gloves</h2>
       <Slider {...settings} className="mb-10 container mx-auto">
        {Gloves.map((item) => (
          <div key={item.id}>
            <Image src={item.image} alt={item.name} width={300} height={300} />
            <div className="text-center mt-2">
              <p className="font-semibold">{item.name}</p>
              <p className="font-bold">₦{item.price}</p>
              <button
              onClick={() =>
               addToCart({ id: item.id, name: item.name, image: item.image, price: item.price })}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>

      <h2 className="text-3xl text-gray-800 font-bold mb-4 container mx-auto">Range Finders</h2>
       <Slider {...settings} className="mb-10 container mx-auto">
        {RangeFinder.map((item) => (
          <div key={item.id}>
            <Image src={item.image} alt={item.name} width={300} height={300} />
            <div className="text-center mt-2">
              <p className="font-semibold">{item.name}</p>
              <p className="font-bold">₦{item.price}</p>
              <button
              onClick={() =>
               addToCart({ id: item.id, name: item.name, image: item.image, price: item.price })}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Categories;
