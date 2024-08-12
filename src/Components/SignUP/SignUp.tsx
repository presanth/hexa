import React from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'


function SignUp({onSendData}:{onSendData: (data: boolean) => void}) {

        
      
    const sendDataToParent = () => {
        const data : boolean = false;

        onSendData(data);
      };
  return (
    <div className='w-[100%] bg-gray-100  bg-transparent  absolute z-30  flex  top-0'>
        <div className='custom-sec w-[100%] h-[100vh] flex justify-center items-center'> 
            <div className='w-[500px] h-[500px] bg-white rounded-xl flex flex-col gap-4 items-center py-7 relative shadow-lg border border-gray-400'>
                <div className='flex gap-3 w-[85%] justify-around '>
                    <p className='text-[25px]  font-bold'>Logo</p>
                    <ul>
                        <li className='text-[18px] font-bold'>Welcome</li>
                        <li className='text-[16px]'>Login for a seamless experience</li>
                    </ul>
                </div>
                <div className='w-[85%] flex flex-col items-center gap-4'>
                    <div className=' w-full flex border border-gray-400 mt-3 rounded-xl px-3 py-1 gap-2 items-center bg-white'>
                        <p className='font-semibold text-[17px] text-gray-400 flex items-center'>+91</p><span className='text-gray-300 text-[20px]'>|</span><input type="number" className='appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-none outline-none h-8 text-[17px] font-semibold text-black placeholder-gray-400' placeholder='Enter Mobile Number'/>
                    </div>
                    <div className='flex gap-1 justify-center'>
                        <input type="checkbox" className='border-none w-[15px] outline-none ' name="" id="" /> <label htmlFor="" className='capitalize text-[16px] font-semibold'> I agree to Terms and conditions</label>
                    </div>
                    <p className='text-[15px] font-semibold -mt-2'>T&c's Privacy Policy</p>
                    <div className='w-full flex flex-col items-center gap-4'>
                        <button className='w-[100%] text-center border border-none outline-none rounded-lg text-[20px] py-1 text-white font-semibold bg-blue-700'>Login with OTP</button>
                        <p className='text-gray-400 text-[16px]'>Or Login Using</p>
                        <button className='w-[100%] flex justify-center items-center  border border-gray-400 outline-none rounded-lg text-[18px]  text-black  bg-white '><img src="/icon/google.png" className='w-10' alt="" />Google</button>
                    </div>
                    <p className='w-[85%] absolute bottom-5 left-10 text-gray-500 cursor-pointer' onClick={sendDataToParent}>skip</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp