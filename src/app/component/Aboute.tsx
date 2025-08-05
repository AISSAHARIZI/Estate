import React from 'react'

function Aboute() {

  
  
  return (
    <div className='w-[70%] mx-auto '>
      <div className='space-y-5 flex flex-col items-center'>
        <div className='flex text-5xl'>
          <h1 className='font-bold'>About </h1>
          <h1 className=' underline '>Our Brand</h1>
        </div>
        <div className='flex flex-col gap-1 items-center text-gray-600 '>
          <p>Passionet about propertie.Dedicated for  </p>
          <p>your Vision</p>
        </div>
        <div className='flex items-center gap-13 mt-15'>
          <div className=''>
            <img src="brand_img.png" className='lg:w-[80%] ' alt="" />
          </div>
          <div className='flex flex-col items-start gap-10  w-[50%] '>
            <div className='grid grid-cols-2 gap-10'>
              <div className='flex flex-col items-start'>
                <span className='text-4xl'>12+</span>
                <p className='text-gray-500'>Years of exelence</p>
              </div>
              <div className='flex flex-col items-start'>
                <span className='text-4xl'>10+</span>
                <p className='text-gray-500'>Years of exelence</p>
              </div>
              <div className='flex flex-col items-start'>
                <span className='text-4xl'>25+</span>
                <p className='text-gray-500'>Years of exelence</p>
              </div>
              <div className='flex flex-col items-start'>
                <span className='text-4xl'>20+</span>
                <p className='text-gray-500'>Years of exelence</p>
              </div>
            </div>
            <div className=' space-y-7'>
              <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequatur aliquid odit iste deserunt enim illo, consequuntur alias magni? Eos neque natus ullam dignissimos ea distinctio consectetur cupiditate deserunt molestiae?</p>
              <button className='bg-blue-500 text-white px-6 py-4 rounded-2xl cursor-pointer'>Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboute
