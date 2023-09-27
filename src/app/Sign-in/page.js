import React from 'react'
import Image from 'next/image'
const sing = () => {
  return (
    <>
        <div className="h-[100vh]  bg-white  grid place-content-center ">

            <div className="border-[1px] border-gray-300 border-solid h-[78vh] w-[31vw]
            rounded-[20px] my-[7%] text-black ">
                <div className="flex justify-center mb-[-7px] my-8 ">
                <Image src={'/google (2).png'} width={70} height={70} className='bg-cover  '></Image>
                
                </div >
                <div className="text-black flex justify-center mb-3 ">
                    <h1 className='text-2xl font-medium '>Sign in</h1>
                </div>
                <div className="text-black flex justify-center mb-[45px]">
                  <h1>to continue to Gmail</h1>
                </div>
                <div className=" grid place-content-center mb-4">
                  <input type="text" name="" id="" className='border-[1px] border-gray-300 border-solid 
                  h-[9vh] w-[26vw] p-3 outline-indigo-500 placeholder:text-black rounded ' placeholder='Email or phone  '/>
                </div>
                <div className="mx-9 my-[-9px] ">
                  <h1 className='text-blue-600 font-medium '>Forgot email?</h1>
                </div>
                <div className="grid place-content-center my-14 mb-2">
                  <h1 className=" text-sm text-slate-500">Not your computer? Use Guest mode to sign in privately. </h1>
                </div>
                <div className="mx-12 my-[-9px] mb-8">
                  <h1 className=' text-indigo-500 font-medium'>Learn more</h1>
                </div>
                <div className="flex justify-between m-9 my-[12%]">
                  <h1 className='text-blue-600 font-medium text-[15px]'>Create account</h1>
                  <button className='bg-blue-700 px-11 h-[6vh]  rounded w-[8vw] py-2 text-red-50'>Next</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default sing 