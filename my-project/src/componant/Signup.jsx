import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Signup() {
    const [userName, setuserName] = useState('')
    const [passowd, setpassowd] = useState('')
    const [email, setemail] = useState('')
    const navigate = useNavigate()
    const [setmessage, setsetmessage] = useState('')

    const registerBtn = () => {
        if (userName  == '' || email  == '' || passowd == '') {
            setsetmessage("please fill the empty fields")
            return;
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setsetmessage('Please enter a valid email address');
          
        } 

        else if (userName.length <4 ){
            setsetmessage("userName should be more than 4 characters")

        }

        else if (passowd.length <4 ){
            setsetmessage("password should be more than 6 characters")

        }

        axios.post("https://6570b92a09586eff6641db69.mockapi.io/registerusers" ,
        {
         userName: userName,
         passowd:passowd,
         email:email

        })
        .then(function (response) {
            console.log(response);
            navigate("/Login")
           
          })
          .catch(function (error) {
            console.error(error);
          });

    }

  return (
   
    <div>

        <div className='bg-[#CFC5BB] w-[100%] h-[53rem]  flex  justify-center'>

           <div className='w-[80%] rounded-xl flex items-center justify-center'>
           
            <div className='w-[50%] bg-[#9b8268be] rounded-xl h-[40rem] flex justify-center items-center flex-col justify-around'>

                <p className='text-5xl text-[#5d4327]'>Sign Up</p>

        <input  className='w-[24rem] h-[3rem] rounded-lg' type="text" placeholder='Enter Your Name '  value={userName}
        onChange={(e)=> {
            setuserName(e.target.value)
        }}
        
        />

<input className='w-[24rem] h-[3rem] rounded-lg' type="text" placeholder='Enter Your email '  value={email}
        onChange={(e)=> {
            setemail(e.target.value)
        }}
        
        />

<input  className='w-[24rem] h-[3rem] rounded-lg' type="password" placeholder='Enter Your password '  value={passowd}
        onChange={(e)=> {
            setpassowd(e.target.value)
        }}
        
        />
 <button className=' bg-[#9d7146] h-[2rem] w-[6rem] rounded-md text-[white] hover:bg-[#b09876]'  onClick={registerBtn}>Register</button>
      
      <div className='flex justify-center'>
      
      </div >
      <div className='flex '>
            <p className='mr-[1rem]'>do you have account?</p>
        
           
           <Link to="/Login">
      
           <button className=' bg-[#9d7146] h-[2rem] w-[6rem] rounded-md text-[white]  hover:bg-[#b09876]'>
              Login
            </button>
           </Link>
           </div>
           </div>
          
          <div className='bg-[blue] rounded-xl w-[50%] h-[40rem]'>
            <img src="https://images.pexels.com/photos/2898170/pexels-photo-2898170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 " className='rounded-xl h-[40rem]' alt="" />
          </div>
          
          
           </div>


     
           </div>

        
     </div>
  )
}

export default Signup