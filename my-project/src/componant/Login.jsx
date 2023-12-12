import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';


function Login() {
    const navigate = useNavigate()
   
    const [email, setemail] = useState('')
    const [passowd, setpassowd] = useState('')
    const [message, setmessage] = useState('')


    const [info, setinfo] = React.useState([])
useEffect(() => {
  
    axios.get("https://6570b92a09586eff6641db69.mockapi.io/registerusers")
    .then((response) => {
        console.log(response);
        setinfo(response.data); 
      })
      .catch((error) => {
        console.error(error);
      });
    

}, [])





const logOut = () => {

    navigate("/Signup")

}

const handelLogin = () => {
    if (email === '' || passowd === '') {
      setmessage("Please fill in the empty fields");
    } else {
      const user = info.find((item) => item.email === email && item.passowd === passowd);
      if (user) {
        navigate('/AllBooks');
      } else {
        setmessage("Incorrect email or password");
      }
    }
  };

   
  return (
    <div >
       
      <div className='bg-[#CFC5BB] w-[100%] h-[53rem]  flex  justify-center'>

<div className='w-[80%] rounded-xl flex items-center justify-center'>

 <div className='w-[50%] bg-[#9b8268be] rounded-xl h-[40rem] flex justify-center items-center flex-col justify-around'>

     <p className='text-5xl text-[#5d4327]'>Login </p>



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

<p>{message}</p>
<div className='flex justify-center'>

</div >
<div className='flex '>
 


{/* <Link to="/AllBooks"> */}

<button className=' bg-[#9d7146] h-[2rem] w-[6rem] rounded-md text-[white]  hover:bg-[#b09876]' onClick={handelLogin}>
   Login
 </button>
 <button className=' bg-[#9d7146] h-[2rem] w-[6rem] rounded-md text-[white]  hover:bg-[#b09876]' onClick={logOut}>
   Logout
 </button>

{/* </Link> */}
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

export default Login
