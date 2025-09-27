import React from 'react'
import Rectangle from "/src/img/Rectangle 2.png"
import GraphUp from "/src/img/graph up.png"
import Card from '/src/img/Card.png'
import Comunicate from '/src/img/image 22.png'

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


    <h1 className='lg:text-[70px] px-[10px] font-medium lg:w-[50%] text-4xl text-center lg:m-auto lg:leading-[100px] leading-[60px]'>
      The Science Behind <br className='hidden lg:block' /> Our <span className='text-[#096DA1]'> Services.</span>
    </h1>

    {/* First Section  */}

    <div className='lg:flex lg:justify-center lg:items-start lg:gap-[30px] mt-[30px] lg:mt-[50px]'>

      {/* Card 1  */}

  <div className='bg-[#DDF1F5] hover:bg-[#B7E0EB] transition-all duration-300 lg:w-[15%] lg:min-h-[350px] lg:py-[25px] w-[300px] rounded-[30px] mx-auto lg:mx-0 lg:rounded-[30px] lg:text-center group cursor-pointer flex flex-col justify-between'>
    <div>
      <h1 className='lg:text-[70px] text-[70px] font-medium text-center cursor-default lg:font-medium transition-transform duration-300 group-hover:scale-110'>
        10x
      </h1>
      <p className='lg:text-gray-700 cursor-default text-center lg:p-0 lg:text-left lg:ml-[20px] lg:mr-[20px] transition-transform duration-300 group-hover:translate-x-2'>
        Utilization over <br className='lg:block hidden' /> traditional EAP's <br className='lg:block hidden' /> program
      </p>
    </div>
    <img 
      className='lg:m-auto mx-auto lg:py-[20px] brightness-0 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 group-hover:brightness-110' 
      src={GraphUp} 
      alt="Graph Up" 
    /> 
  </div>
  
  {/* Card 2 */}

  <div className='bg-[#AFD7EA] lg:px-[10px] hover:bg-[#77b3c4] lg:hover:text-white transition-all lg:h-[43vh] duration-300 lg:w-[17%] lg:py-[25px] lg:rounded-[30px] group cursor-pointer'>
    <h1 className='lg:text-[40px] cursor-default lg:mb-[70px] lg:pl-[8px] lg:font-medium transition-transform duration-300 group-hover:scale-110'>
      Returning customers
    </h1>
    <h3 className='lg:text-gray-800 lg:text-[20px] lg:text-right cursor-default lg:font-bold lg:ml-[60px] transition-transform duration-300 group-hover:translate-x-[-10px]'>
      +2000
    </h3>
    <p className='lg:font-medium lg:py-[10px]'>
      clients across Dushanbe
    </p>
    <div className="w-full h-1 bg-gradient-to-r from-black from-[80%] to-white to-[80%]"></div>
  </div>
  
  {/* Card 3 */}

  <div className='bg-[#E8E8E8] lg:px-[10px] hover:bg-[#bfbaba] lg:hover:text-white transition-all duration-300 lg:w-[18%] lg:h-[35vh] lg:py-[25px] lg:rounded-[30px] lg:text-center group cursor-pointer'>
    <h1 className='lg:text-[100px] lg:text-[#223337] cursor-default lg:font-medium transition-transform duration-300 group-hover:scale-110'>
      88%
    </h1>
    <p className='lg:font-medium lg:text-left lg:px-[30px]'>
      Of members across races-ethnicities see clinical improvement
    </p>
  </div>

  {/* Card 4 */}

  <div className='bg-[#DFF1F5] lg:px-[10px] hover:bg-[#b5c4c8] lg:hover:text-white transition-all duration-300 lg:w-[18%] lg:h-[47vh] lg:py-[25px] lg:rounded-[30px] lg:text-center group cursor-pointer'>
    <h1 className='lg:text-[80px] cursor-default lg:font-medium transition-transform duration-300 group-hover:scale-110'>
      $61k
    </h1>
    <p className='lg:font-medium lg:text-left lg:px-[30px]'>
      Healthcare savings in 2 years
    </p>
    <img className='lg:m-auto transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-6 lg:brightness-0 lg:group-hover:brightness-110' src={Card} alt="Card" />
  </div>

  {/* Card 5 */}

  <div className='bg-[#B9DDED] hover:bg-[#8dc0d6] lg:hover:text-white transition-all duration-300 lg:w-[18%] lg:py-[25px] lg:h-[56vh] lg:rounded-[30px] lg:text-center group cursor-pointer'>
    <h1 className='lg:text-[70px] cursor-default lg:font-medium transition-transform duration-300 group-hover:scale-110'>
      +600
    </h1>
    <p className='cursor-default lg:text-left lg:mb-[25px] lg:ml-[60px] transition-transform duration-300 group-hover:translate-x-2'>
      Certified therapists <br className='hidden lg:block' /> across Central Asia
    </p>
    <img 
      className='lg:m-auto transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 lg:brightness-0 lg:group-hover:brightness-110' 
      src={Comunicate} 
      alt="Comunicate" 
    /> 
  </div>
</div>

    </>
    </div>
  )
}

export default Menu