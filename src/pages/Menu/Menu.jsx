import React from 'react'
import Rectangle from "/src/img/Rectangle 2.png"

function Menu() {
  return (
    <div className='py-[30px]'>
    <>
    <div className='lg:flex lg:items-center'>
    <h1 className='lg:text-[70px] font-medium lg:w-[50%] text-4xl text-center lg:leading-[100px] leading-[60px]'>
      Expert care for your health and <span className='text-[#096DA1]'>wellness.</span>
    </h1>
    <p className='text-center text-[20px] lg:tracking-wider text-gray-500 lg:leading-[25px] mt-[20px] lg:text-left mx-auto'>
      Biomed Clinic is dedicated to providing <br className='hidden lg:block' /> advanced, patient-centered care with a <br className='hidden lg:block' /> focus on innovation, precision, and long <br className='hidden lg:block' /> term wellness.
    </p>
    </div>
    <img src={Rectangle} alt="Rectangle" className='h-[23vh] lg:w-full lg:h-full lg:my-[50px] my-[30px]' />


    <h1 className='lg:text-[70px] font-medium lg:w-[50%] text-4xl text-center lg:m-auto lg:leading-[100px] leading-[60px]'>
      The Science Behind <br className='hidden lg:block' /> Our <span className='text-[#096DA1]'> Services.</span>
    </h1>
    </>
    </div>
  )
}

export default Menu