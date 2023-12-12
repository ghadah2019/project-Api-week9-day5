import React from 'react';
import logo from '../assets/Group 1.png';
import logo1 from '../assets/line2.svg';
import { Link } from 'react-router-dom';
import Nav from './Nav';




function LandiingPage() {
  return (
    <div>
        <div className='w-[100%] bg-[#CFC5BB] flex'>

          
            <div className='w-[50%] flex flex-col '>


               <div> <p className=' h-[16rem] mt-[6rem] ml-[3rem] text-center font-serif text-8xl font-bold'> READ BOOK <br /> EVERY WHERE</p> </div>
              <div className='flex   h-[7rem] text-center justify-around ml-[3rem]  '>
                
                
                
                <Link to ="/Signup">
                <button className='text-[white] bg-[#846B47]  hover:bg-[#b09876] mt-[2rem] h-[3rem] px-[1rem] rounded-xl'> SIGN UP</button>
                </Link>
                
               
                <Link to ="/Login">
                <button  className=' text-[white] bg-[#846B47] mt-[2rem] h-[3rem]  hover:bg-[#b09876]  px-[1rem] rounded-xl'>LOGIN</button>

                </Link>


              </div>
              <img src={logo1} alt="" />
            </div>
         
           <div> <img className='  h-[54rem] pl-[8rem]  ' src={logo} alt="" />
            </div>
           



        {/* <div className=' bg-[#FBB59B] rounded-2xl'>1</div>
        <div className=' bg-[#FBB59B] rounded-2xl'>2</div>
        <div className=' bg-[#FBB59B] rounded-2xl'>3</div>
        <div className=' bg-[#FBB59B] rounded-2xl'>4</div>
        <div className=' bg-[#FBB59B] rounded-2xl'>5</div> */}

       
        </div>
      {/* <div className='w-[100%] flex relative'>
        <div className='bg-[#FBB59B] w-[50%] h-[55rem] transform rotate-45'></div>
        <div className='bg-[#FBB59B] w-[50%] h-[55rem] transform rotate-45'></div>
     
       
      </div>

      <div className='bg-[red] w-[70%] relative h-[60rem]'></div> */}



     
    </div>
  );
}

export default LandiingPage;