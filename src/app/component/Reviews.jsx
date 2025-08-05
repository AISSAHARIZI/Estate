import React from 'react'
import { testimonialsData } from '../../../public/assets'
import Image from 'next/image'

function Reviews() {
  return (
    <div className='w-[70%] mx-auto space-y-20 my-35'>
      <div className="flex flex-col items-center gap-4 ">
        <div className="flex text-5xl">
          <h1 className="font-bold ">Customer</h1>
          <h1 className="underline font-mono">Testimonials</h1>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-gray-500">
            Real Story from Hhouse Hin Home
          </p>
          <p className="text-gray-500">with Us</p>
        </div>
      </div>
      <div className='grid grid-cols-3 justify-center gap-10 '> 
        {testimonialsData.map((rev,index)=>
          <div key={index} className='px-4 h-[34rem] py-10 space-y-5 text-center flex flex-col items-center shadow-2xl w-[%80] mx-auto'>
            <Image src={`/${rev.image}.png`} width={100} height={100} className='rounded-full object-cover' alt="" />
            <h1 className='text-4xl'>{rev.name}</h1>
            <p className='text-gray-500'>{rev.title}</p>
            <div className='flex items-center gap-1.5'>
              <Image width={17} height={17} src="/star_icon.svg" alt="" />
              <Image width={17} height={17} src="/star_icon.svg" alt="" />
              <Image width={17} height={17} src="/star_icon.svg" alt="" />
              <Image width={17} height={17} src="/star_icon.svg" alt="" />
              <Image width={17} height={17} src="/star_icon.svg" alt="" />
            </div>
            <p className='text-gray-600 w-[70%]'>{rev.text}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Reviews
