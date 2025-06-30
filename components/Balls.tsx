import React from "react";

interface GolfBallsTypes {
    id: number;
    name: string;
    image: string;
    price: number;
}

const GolfBalls: GolfBallsTypes[] = [
    {
      id: 1,
      name: "Colored Balls",
      image: "/categories/Ball1.png",
      price: 57500
  },
  {
    id: 2,
    name: "Titliest Pro IX",
    image: "/categories/Ball2.png",
    price: 45000
  },
  {
    id: 3,
    name: "Original Balls",
    image: "/categories/Ball3.png",
    price: 65000
  },
  {
    id: 4,
    name: "Srixon Balls",
    image: "/categories/Ball4.png",
    price: 15000
  },
  {
    id: 5,
    name: "Yonex Balls",
    image: "/categories/Ball5.png",
    price: 15000
  },
  {
    id: 6,
    name: "Adidas Balls",
    image: "/categories/Ball6.png",
    price: 35000
  },
  {
    id: 7,
    name: "Callaway Balls",
    image: "/categories/Ball3.png",
    price: 45000
  },
  {
    id: 8,
    name: "Muzuno Balls",
    image: "/categories/Ball4.png",
    price: 23500
  },
  {
    id: 9,
    name: "TaylorMade Balls",
    image: "/categories/Ball2.png",
    price: 25000
  },
  {
    id: 10,
    name: "J.Lindeberg Balls",
    image: "/categories/Ball1.png",
    price: 10000
  }
  ] 

export default GolfBalls




