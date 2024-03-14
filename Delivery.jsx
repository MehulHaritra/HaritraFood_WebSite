import React from 'react';

function Delivery() {
  return (
    <div className='w-full '>
      <h3 className='text-[#f5617a] font-bold text-3xl text-center my-3'>Quick Delivery App</h3>
      <div className='grid grid-cols-2'>
        <img src="https://images.pexels.com/photos/7129403/pexels-photo-7129403.jpeg" alt="" className='w-[40rem] p-4 mx-4'  />
        <div className='flex flex-col justify-center p-6 mx-4'>
          <p className='font-bold text-[#3d1219] text-[2.5rem]'>Get The App</p>
          <h2 className=' text-[1.5rem]'>Essential Delivery App</h2>
          <button className='bg-black w-[11rem] font-bold text-[white] rounded my-6 py-[15px]'>Get Started</button>
        </div>
      </div>
      
    </div>
  );
}

export default Delivery;