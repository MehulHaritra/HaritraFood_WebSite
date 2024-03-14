import React from 'react';
import {topPicks} from './Data/data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Item() {
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  }
  return (
    <div className='w-[90%] mx-auto '>
      <div className='py-20'>
      <Slider {...settings}>
      {
        topPicks.map((item) => (
          <div className='bg-[white] rounded-ml ' key={item.id}>
            <div className=' flex justify-center items-center rounded-t-xl'> 
              <img src={item.img} alt="" className='w-[300px] rounded-full h-[200px] objrct-cover' />
            </div>
            <div className='flex flex-col justify-center items-center gap-4 p-4'>
              <p className='text-xl font-semibold uppercase'>{item.title}</p>
              <button className='bg-black w-[11rem]  text-[white] rounded-md my-6 py-[15px] hover:text-[#fbc531] font-semibold'>Add To Cart</button>
            </div>
          </div>
        ))}
        </Slider>
        </div>
    </div>
  );
}

export default Item;