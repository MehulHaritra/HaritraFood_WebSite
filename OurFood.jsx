import React from 'react';
import {mealData} from './Data/data'

function OurFood() {
  return (
    <>
    <div className='w-[90%] mx-auto'>
      <div>
        <h2 className='text-center text-[#f5617a] text-3xl font-bold py-0.5'> 
              Our Food
        </h2>
      </div>
      <div className=' grid md:grid-cols-2 sm :grid-cols-1 lg:grid-cols-3'> 
        {
          mealData.map((meal) => (
            <div className='flex justify-center flex-col items-center' >
              <div className='m-4'>

              <img src={meal.image} alt="" className='w-[20rem] object-cover h-[18rem] ' />
              </div>
              <div className='flex justify-center py-2 px-4  flex-col items-center'>
              <p>{meal.name}</p>
              <p>{meal.price}</p>
              <button className='bg-black w-[11rem]  text-[white] rounded-md my-6 py-[1.5rem] hover:text-[#fbc531] font-semibold'>Add To Cart</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    </>
  );
}

export default OurFood;