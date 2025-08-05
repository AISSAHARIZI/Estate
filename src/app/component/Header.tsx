import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className=' w-[90%]  mx-auto flex items-center justify-between text-white bg-transparent h-[5rem]'>
       
      <div className='flex items-center gap-3'>
        <Image  src="/favicon.svg" width={45} height={45} alt="" />
        <h1 className='text-3xl'>Estate</h1>
      </div>
      <div className='flex items-center gap-10 text-xl '>
        <p className='cursor-pointer'>Home </p>
        <p className='cursor-pointer'>About</p>
        <p className='cursor-pointer'>Projects</p>
        <p className='cursor-pointer'>Testimonial</p>
      </div>
      <div className='bg-white amber-50 px-6 py-3 rounded-3xl text-black '>
        <button>Sign up</button>
      </div>
    </div>
  )
}

export default Header
