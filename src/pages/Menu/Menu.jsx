import React from 'react'
import Rectangle from "/src/img/Rectangle 2.png"
import GraphUp from "/src/img/graph up.png"
import Card from '/src/img/Card.png'
import Comunicate from '/src/img/image 22.png'
import Rectangle2 from '/src/img/Rectangle 19.png'
import Subtract from '/src/img/Subtract.png'
import Rectangle3 from '/src/img/Rectangle 18.png'

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

  {/* Card 1 */}
  <div className='bg-[#DDF1F5] mb-[30px] lg:mb-0 py-[13px] hover:bg-[#B7E0EB] transition-all duration-300 lg:w-[15%] lg:min-h-[350px] lg:py-[25px] w-[300px] rounded-[30px] mx-auto lg:mx-0 lg:rounded-[30px] lg:text-center group cursor-pointer flex flex-col justify-between'>
    <div>
      <h1 className='lg:text-[70px] text-[70px] font-medium text-center cursor-default lg:font-medium transition-transform duration-300 group-hover:scale-110'>
        10x
      </h1>
      <p className='lg:text-gray-700 cursor-default text-center text-[18px] lg:p-0 lg:text-left lg:ml-[20px] lg:mr-[20px] transition-transform duration-300 group-hover:translate-x-2'>
        Utilization over <br className='lg:block hidden' /> traditional EAP's <br className='lg:block hidden' /> program
      </p>
    </div>
    <img 
      className='lg:m-auto mx-auto lg:py-[20px] brightness-0 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 group-hover:brightness-110' 
      src={GraphUp} 
      alt="Graph Up" 
    /> 
  </div>
  
  {/* Card 2 - Made Mobile Adaptive */}
  <div className='bg-[#AFD7EA] mb-[30px] lg:mb-0 hover:bg-[#77b3c4] lg:hover:text-white transition-all duration-300 lg:w-[17%] lg:h-[43vh] lg:py-[15px] lg:px-[10px] py-[25px] px-[10px] w-[300px] rounded-[30px] mx-auto lg:mx-0 lg:rounded-[30px] group cursor-pointer flex flex-col justify-between'>
    <div>
      <h1 className='lg:text-[40px] mb-[20px] text-[40px] font-medium text-center lg:text-left cursor-default lg:mb-[70px] lg:pl-[8px] transition-transform duration-300 group-hover:scale-110'>
        Returning customers
      </h1>
      <h3 className='lg:text-gray-800 mb-[20px] lg:mb-0 font-medium  text-gray-800 lg:text-[20px] text-[30px] text-right px-[10px] lg:px-0 lg:text-right cursor-default lg:font-bold lg:ml-[60px] transition-transform duration-300 group-hover:translate-x-[-10px]'>
        +2000
      </h3>
      <p className='font-medium text-center lg:text-left lg:py-[10px]'>
        clients across Dushanbe
      </p>
    <div className="w-full h-1 bg-gradient-to-r from-black from-[80%] to-white to-[80%] mt-4"></div>
    </div>
  </div>
  

  {/* Card 3 - Made Mobile Adaptive */}


  <div className='bg-[#E8E8E8] py-[20px] mb-[30px] lg:mb-0 hover:bg-[#bfbaba] lg:hover:text-white transition-all duration-300 lg:w-[18%] lg:h-[35vh] lg:py-[25px] lg:px-[10px] w-[300px] rounded-[30px] mx-auto lg:mx-0 lg:rounded-[30px] lg:text-center group cursor-pointer flex flex-col justify-between'>
    <h1 className='lg:text-[100px] text-[100px] lg:text-[#223337] text-[#223337] font-medium text-center cursor-default transition-transform duration-300 group-hover:scale-110'>
      88%
    </h1>
    <p className='font-medium px-[30px] text-center lg:text-left lg:px-[30px]'>
      Of members across races-ethnicities see clinical improvement
    </p>
  </div>

  {/* Card 4 - Made Mobile Adaptive */}

  <div className='bg-[#DFF1F5] lg:mb-0 mb-[30px] hover:bg-[#b5c4c8] lg:hover:text-white transition-all duration-300 lg:w-[18%] lg:h-[47vh] lg:py-[25px] lg:px-[10px] w-[300px] rounded-[30px] mx-auto lg:mx-0 lg:rounded-[30px] lg:text-center group cursor-pointer flex flex-col justify-between'>
    <div>
      <h1 className='lg:text-[80px] text-[80px] font-medium text-center cursor-default transition-transform duration-300 group-hover:scale-110'>
        $61k
      </h1>
      <p className='font-medium text-center mb-[15px] lg:mb-0 lg:text-left lg:px-[30px]'>
        Healthcare savings in 2 years
      </p>
    </div>
    <img className='mx-auto lg:m-auto transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-6 lg:brightness-0 lg:group-hover:brightness-110' src={Card} alt="Card" />
  </div>

  {/* Card 5 - Made Mobile Adaptive */}
  <div className='bg-[#B9DDED] hover:bg-[#8dc0d6] lg:hover:text-white transition-all duration-300 lg:w-[18%] lg:h-[56vh] lg:py-[25px] w-[300px] rounded-[30px] mx-auto lg:mx-0 lg:rounded-[30px] lg:text-center group cursor-pointer flex flex-col justify-between'>
    <div>
      <h1 className='lg:text-[70px] text-[70px] font-medium text-center cursor-default transition-transform duration-300 group-hover:scale-110'>
        +600
      </h1>
      <p className='cursor-default mb-[20px] text-center lg:text-left lg:mb-[25px] lg:ml-[60px] transition-transform duration-300 group-hover:translate-x-2'>
        Certified therapists <br className='hidden lg:block' /> across Central Asia
      </p>
    </div>
    <img 
      className='mx-auto mb-[17px] lg:mb-0 lg:m-auto transform transition-all duration-500 group-hover:scale-115 group-hover:rotate-6 lg:brightness-0 lg:group-hover:brightness-110' 
      src={Comunicate} 
      alt="Comunicate" 
    /> 
  </div>
</div>

{/* Scrolling Texts */}

<marquee className="relative overflow-hidden py-8 lg:py-12 mt-[50px]">
  <div className="flex space-x-12 animate-marquee whitespace-nowrap">
    <div className="flex items-center space-x-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-blue-100">
      <i className="fas fa-dna text-blue-500 text-lg"></i>
      <span className="text-blue-800 font-semibold text-sm tracking-wide">GENETIC INSIGHT</span>
    </div>
    
    <div className="flex items-center space-x-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-emerald-100">
      <i className="fas fa-chart-line text-emerald-500 text-lg"></i>
      <span className="text-emerald-800 font-semibold text-sm tracking-wide">EXPERT RESULTS</span>
    </div>
    
    <div className="flex items-center space-x-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-purple-100">
      <i className="fas fa-hand-holding-heart text-purple-500 text-lg"></i>
      <span className="text-purple-800 font-semibold text-sm tracking-wide">PRECIOUS SERVICES</span>
    </div>
    
    <div className="flex items-center space-x-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-amber-100">
      <i className="fas fa-shield-heart text-amber-500 text-lg"></i>
      <span className="text-amber-800 font-semibold text-sm tracking-wide">EMPOWERING YOUR HEALTH</span>
    </div>
    
    <div className="flex items-center space-x-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-cyan-100">
      <i className="fas fa-heartbeat text-cyan-500 text-lg"></i>
      <span className="text-cyan-800 font-semibold text-sm tracking-wide">HEALTH SIMPLIFIED</span>
    </div>
    
    <div className="flex items-center space-x-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-rose-100">
      <i className="fas fa-microscope text-rose-500 text-lg"></i>
      <span className="text-rose-800 font-semibold text-sm tracking-wide">ADVANCED CARE</span>
    </div>
    
    <div className="flex items-center space-x-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-violet-100">
      <i className="fas fa-star-of-life text-violet-500 text-lg"></i>
      <span className="text-violet-800 font-semibold text-sm tracking-wide">BEYOND MEDICINE</span>
    </div>
    
    <div className="flex items-center space-x-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-green-100">
      <i className="fas fa-spa text-green-500 text-lg"></i>
      <span className="text-green-800 font-semibold text-sm tracking-wide">WELLNESS STARTS HERE</span>
    </div>
  </div>
</marquee>


    {/* Second Section  */}


      <div className='lg:flex lg:justify-around lg:py-[20px] lg:items-center lg:px-[50px] px-[10px] lg:gap-12'>
  <div>
    <h1 className='lg:text-[52px] text-center lg:text-left text-4xl mb-6 font-medium leading-tight'>
      Where Your Health and
      <br />
      Technology <span className="text-blue-500 font-medium">Work in Sync.</span>
    </h1>
    <p className='lg:w-[70%] mb-[20px] lg:mb-0 font-medium tracking-wide text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300'>
      Our mission is to unravel the intricacies of your genetic code, providing you with the most detailed diagnosis insights. All our specialists are ready to provide you with qualified support and attentive care!
    </p>
  </div>
  
    <img 
      src={Rectangle2} 
      alt="Genetic Technology" 
      className='relative'
      />
</div>




      {/* Third Section  */}

      <div className='lg:px-[50px]'>
        
<div style={{ backgroundImage: `url(${Subtract})`, borderRadius : "50px",  backgroundSize: 'cover', backgroundPosition: 'center' }} className='mt-[50px] lg:py-[50px] py-[30px]'>
  <div className='lg:px-[50px]'>
    <h1 className='lg:text-[52px] text-center lg:text-left text-4xl mb-6 font-medium leading-tight'>
      Main Specialties of Our Clinic:
    </h1>
    <button className='lg:p-[10px_40px] font-medium lg:text-[20px] lg:bg-white lg:rounded-full'>
      About us
    </button>
    <button className='lg:p-[5px_10px] lg:ml-[10px] lg:text-[22px] lg:bg-[#096DA1] lg:rounded-full lg:items-center lg:text-white lg:font-bold'>
      →
    </button>
  </div>
  
</div>
    <img 
      src={Rectangle2} 
      alt="Genetic Technology" 
      className='lg:w-[43%] lg:ml-auto lg:mt-[-100px]'
    />


      </div>

    </>
    </div>
  )
}

export default Menu