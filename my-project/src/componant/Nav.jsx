import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>

        <ul className='flex justify-start h-[3rem] bg-[#c4af938f]'>
           
           <Link to='/Signup'>
           <li className='pr-[3rem] pt-[1rem]'> Sign Up</li>
           
           </Link>
         
           
           <Link to='/Login'>
            <li className='pr-[3rem]  pt-[1rem]'>Login</li>

            </Link>
            
            
            <Link to='/Signup'>
            <li className='pr-[3rem]  pt-[1rem]'>LogOut</li>
            </Link>
        </ul>
    </div>
  )
}

export default Nav