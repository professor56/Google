import { Princess_Sofia } from 'next/font/google'
import React from 'react'

const Google = () => {
  return (
    <>
      <header>
        <div className='h-[67px] flex items-center justify-end'>
          <div className='px-6 flex items-center'>
            <a className='text-sm  text-sky-50 font-bold mx-5 ' href="#">Gmail</a>
            <a className='text-sm  text-sky-50 font-bold mx-5' href="#">Images</a>
            <p  className='text-xl  text-sky-50 font-bold mx-5 '>
              :::<br />

            </p>
            
            <a href='./Sign-in' className='
            bg-blue-500 py-2 px-3 text-sky-50'>


              Sign In
            </a>
          </div>


        </div>
      </header>
      <main>
        <div className="  h-[73vh] grid place-content-center">
          <h1 className="text-8xl text-white font-bold mb-[80px] text-center">Google</h1>
          <input type="text" name="" id="" className='w-[777px] h-[50px] bg-transparent
           border-2 border-red-50 border-solid  rounded-3xl'/>
           <div className="flex items-center justify-center m-9">
            <button className="mx-5 bg-slate-900 py-3 px-6 text-teal-50">Google Search </button>
            <button className="bg-slate-900 py-3 px-6 text-teal-50">I'am feeling lucky</button>
           </div>
        </div>
       <div className=" text-gray-400 m-6">
       <p className='to-gray-300 text-1xl mb-3'>India</p>
       <hr />
       <div className=" flex items-center  my-8 h-0 text-gray-400 justify-between  ">
        <div className='flex justify-between  '>
        <p className="mr-3">About</p>
        <p className="mr-3">Advertising</p>
        <p className="mr-3">Business</p>
        <p className=""> How Search work</p>
        
        </div>
        <div className=" flex justify-end">
          <p className="mr-3">Privacy</p>
          <p className="mr-3">Terms</p>
          <p className="">Settings</p>
        </div>
       </div>
       </div>
      </main>
    </>
  )
}

export default Google