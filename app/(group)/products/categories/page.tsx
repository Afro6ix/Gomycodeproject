'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

function Categories() {
  const { addToCart } = useCart();

  const GolfShirts = [
  {
    id: 1,
    name: "Titliest Prime Shirt",
    image: "/categories/TitliestPrimeBlack.png",
    price: 25000
},
{
  id: 2,
  name: "Titliest Prime Shirt",
  image: "/categories/TitliestPrimeGrey.png",
  price: 25000
},
{
  id: 3,
  name: "Titliest Prime Shirt",
  image: "/categories/TitliestPrimeBrown.png",
  price: 25000
},
{
  id: 4,
  name: "Titliest Prime Shirt",
  image: "/categories/TitliestPrimeGrey.png",
  price: 25000
},
{
  id: 5,
  name: "Titliest Prime Shirt",
  image: "/categories/TitliestPrimeBlack.png",
  price: 25000
},
{
  id: 6,
  name: "Titliest Prime Shirt",
  image: "/categories/TitliestPrimeBrown.png",
  price: 25000
},
{
  id: 7,
  name: "Titliest Prime Shirt",
  image: "/categories/TitliestPrimeBrown.png",
  price: 25000
},
{
  id: 8,
  name: "Titliest Prime Shirt",
  image: "/categories/TitliestPrimeGrey.png",
  price: 25000
}];

  const GolfTrousers = [
    {
      id: 1,
      name: "Titliest Prime Trousers",
      image: "/categories/GreenTrouser.png",
      price: 65000
  },
  {
    id: 2,
    name: "Titliest Prime Trousers",
    image: "/categories/BlackTrouser.png",
    price: 85000
  },
  {
    id: 3,
    name: "Titliest Prime Trousers",
    image: "/categories/LightBrown.png",
    price: 65000
  },
  {
    id: 4,
    name: "Titliest Prime Trousers",
    image: "/categories/BlackTrouser.png",
    price: 85000
  },
  {
    id: 5,
    name: "Titliest Prime Trousers",
    image: "/categories/GreenTrouser.png",
    price: 65000
  },
  {
    id: 6,
    name: "Titliest Prime Trousers",
    image: "/categories/LightBrown.png",
    price: 85000
  },
  {
    id: 7,
    name: "Titliest Prime Trousers",
    image: "/categories/BlackTrouser.png",
    price: 65000
  },
  {
    id: 8,
    name: "Titliest Prime Trousers",
    image: "/categories/GreenTrouser.png",
    price: 85000
  },
  {
    id: 9,
    name: "Titliest Prime Trousers",
    image: "/categories/LightBrown.png",
    price: 65000
  }     
  ];

   const GolfShoes = [
    {
      id: 1,
      name: "Titliest Prime Shoes",
      image: "/categories/Shoe1.png",
      price: 57500
  },
  {
    id: 2,
    name: "Titliest Prime Shoes",
    image: "/categories/Shoe2.png",
    price: 85000
  },
  {
    id: 3,
    name: "Titliest Prime Shoes",
    image: "/categories/Shoe3.png",
    price: 65000
  },
  {
    id: 4,
    name: "Titliest Prime Shoes",
    image: "/categories/Shoe4.png",
    price: 75000
  },
  {
    id: 5,
    name: "Titliest Prime Shoes",
    image: "/categories/Shoe5.png",
    price: 65000
  },
  {
    id: 6,
    name: "Titliest Prime Shoes",
    image: "/categories/Shoe6.png",
    price: 85000
  },
  {
    id: 7,
    name: "Titliest Prime Shoes",
    image: "/categories/Shoe7.png",
    price: 65000
  },
  {
    id: 8,
    name: "Titliest Prime Shoes",
    image: "/categories/Shoe8.png",
    price: 85000
  },
  {
    id: 9,
    name: "Titliest Prime Shoes",
    image: "/categories/Shoe9.png",
    price: 65000
  },
  {
    id: 10,
    name: "Titliest Prime Shoes",
    image: "/categories/Shoe10.png",
    price: 85000
  },
  {
    id: 11,
    name: "Titliest Prime Shoes",
    image: "/categories/Shoe11.png",
    price: 65000
  },
  {
    id: 12,
    name: "Titliest Prime Shoes",
    image: "/categories/Shoe12.png",
    price: 85000
  },
  {
    id: 13,
    name: "Titliest Prime Shoes",
    image: "/categories/Shoe13.png",
    price: 65000
  },
  {
    id: 14,
    name: "Titliest Prime Shoes",
    image: "/categories/Shoe14.png",
    price: 85000
  },
  {
    id: 15,
    name: "Golf Shoes",
    image: "/categories/Shoe15.png",
    price: 65000
  }
  ] 


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
      <Slider {...settings} className="mb-6">
        {GolfShirts.map((item) => (
          <div key={item.id}>
            <Image src={item.image} alt={item.name} width={300} height={300} />
            <div className="text-center mt-2">
              <p className="font-semibold">{item.name}</p>
              <p className="font-bold">₦{item.price}</p>
              <button
               onClick={() =>
               addToCart({ id: item.id, name: item.name, image: item.image, price: item.price })}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>

      <Slider {...settings} className="mb-6">
        {GolfTrousers.map((item) => (
          <div key={item.id}>
            <Image src={item.image} alt={item.name} width={300} height={300} />
            <div className="text-center mt-2">
              <p className="font-semibold">{item.name}</p>
              <p className="font-bold">₦{item.price}</p>
              <button
                onClick={() =>
               addToCart({ id: item.id, name: item.name, image: item.image, price: item.price })}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>

      <Slider {...settings}>
        {GolfShoes.map((item) => (
          <div key={item.id}>
            <Image src={item.image} alt={item.name} width={300} height={300} />
            <div className="text-center mt-2">
              <p className="font-semibold">{item.name}</p>
              <p className="font-bold">₦{item.price}</p>
              <button
              onClick={() =>
               addToCart({ id: item.id, name: item.name, image: item.image, price: item.price })}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
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
