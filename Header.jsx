import { LuShoppingCart } from "react-icons/lu";
import { RiMenu2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Header() {
  const [sidenav,setSidenav] = useState(false)
 
  return (
    <div className=" flex justify-between px-8 py-4 text-[1.3rem] border-b font-semibold  " >
      <div>
        <p>Haritra<span className="text-[#ff4757]">Food</span></p>
      </div>
      <div >
        <ul className='sm:flex gap-10 hidden sm:flex-row cursor-pointer '>
         <Link to="/"> <li >Home</li> </Link>
         <Link to="/About US">  <li>About Us</li> </Link>
         <Link to="/OurFood">  <li>Our Food</li></Link>
         <Link to ="/SignIN"> <li>SignUp</li></Link>
        </ul>
        
      </div> 
      {
        sidenav? <div className="bg-[#dcdde1]  absolute w-[300px] text-center top-0 right-0 h-[100vh] flex justify-center items-center z-10 ">
        <IoClose size={35}  className="absolute top-5 right-4 cursor-pointer" onClick={() => setSidenav(!sidenav)} />
        <ul className='flex gap-10  flex-col cursor-pointer absoluate  '>
        <Link to="/"> <li >Home</li> </Link>
         <Link to="/About US">  <li>About Us</li> </Link>
         <Link to="/OurFood">  <li>Our Food</li></Link>
         <Link to ="/SignIN"> <li>SignUp</li></Link>
        </ul>
        
      </div> :""
      }

      <div  className="flex gap-8 ">
        <p><RiMenu2Line size={28} className="cursor-pointer block sm:hidden "  onClick={() => setSidenav(!sidenav)}/></p>
        <p><LuShoppingCart size={28}  /></p>
      </div>
    </div>
  );
}

export default Header;






  