import React from 'react';

function Footer() {
  return (
    <div>
      
      <div className='bg-[black] text-[white] flex item-center justify-between  px-6 py-6 w-full py  '>
       
        <div>
          <p className='text-[2rem]'>Haritra<span  className="text-[#ff4757]">Food</span></p>
          <p>© 2024 Haritra Technologies Pvt. Ltd</p>
        </div>

        <div>
          <p className='text-[1.2rem focus:underline]'>Company</p>
         <ul >
          <li >About</li>
          <li>careers</li>
          <li>Team</li>
          <li>Swiggy One</li>
          </ul>
        </div>

        <div>
          <p>Contact us</p>
        <ul>  <li>Help & Support</li>
          <li>Partner with us</li>
          <li>Ride with us</li>
          </ul>
        </div>

        <div>
          <p>We deliver to:</p>
          <ul>
            <li>Surat</li>
            <li>Bihar</li>
            <li>Patna</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;