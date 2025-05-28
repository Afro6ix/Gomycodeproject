'use client'
import React from "react";
import Slider from "react-slick";

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


      <div className="bg-red-500">
      <h3>1</h3>
      </div>


      <div className="bg-green-500">
      <h3>2</h3>
      </div>


      <div className="bg-blue-500">
      <h3>3</h3>
      </div>


       <div className="bg-pink-500">
       <h3>4</h3>
       </div>

       <div className="bg-purple-500">
       <h3>5</h3>
       </div>

       <div className="bg-yellow-500">
       <h3>6</h3>
       </div>


     </Slider>
  );
}