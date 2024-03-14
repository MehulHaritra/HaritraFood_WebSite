// 1:05:44 isme map se baki ese thoda or pichge jana hai 

import React, { useEffect, useState } from 'react';
import { TiChevronLeft } from "react-icons/ti";
import { TiChevronRight } from "react-icons/ti";


function Hero() {
 const imgData = [
  {
    src:"https://images.pexels.com/photos/7129403/pexels-photo-7129403.jpeg",
  },
  {
    src : "https://images.pexels.com/photos/1051399/pexels-photo-1051399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    src: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src:"https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg"
  },
 ]
 const [slider,setSlider] = useState(0)
 
 const handlePlus = () => {
    setSlider(slider === imgData.length -1 ? 0: slider + 1 )
 }
 const handleMinus = () => {
  setSlider(slider === 0 ? imgData.length - 1: slider - 1 )
 }
 useEffect(() => {
  
  const slideClear = setInterval(() => {
    handlePlus();
  },2000)
  
  return()=>clearInterval(slideClear)
 
},[slider]) 
 
 return (
    <> 
    <div>
    <div className='w-[90%] mx-auto h-[80vh] my-5  relative '>

      {
        imgData.map((item,i) => (
          <div key={i} className={`${slider === i ? "block" : "hidden"}`}>
              <img src={item.src} alt="First Image" className=' w-full h-[80vh] rounded-2xl object-cover '  />
          </div>
        ))
      }
      
    
    <div className='flex item-cenetr justify-between top-[40%] p-5  absolute w-full '>
    <TiChevronLeft  size={55} onClick={handlePlus} className='text-[#3a4747]'/>
    <TiChevronRight size={55} onClick={handleMinus} className='text-[#3d3dc1]'/>
    
</div>
</div>
</div>

    </>
  );
}

export default Hero;

// flex  justify-between w-full px-5 absolute top-[50%] text-black