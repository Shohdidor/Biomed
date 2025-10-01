import React from 'react'
import Rectangle from "/src/img/Rectangle 2.png"
import GraphUp from "/src/img/graph up.png"
import Card from '/src/img/Card.png'
import Comunicate from '/src/img/image 22.png'
import Rectangle2 from '/src/img/Rectangle 19.png'
import Subtract from '/src/img/Subtract.png'
import Rectangle3 from '/src/img/Rectangle 18.png'
import Doc1 from '/src/img/Doc1.png'

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

      <div className='lg:px-[50px] px-[5px]'>
        
<div style={{ backgroundImage: `url(${Subtract})`, borderRadius : "50px",  backgroundSize: 'cover', backgroundPosition: 'center' }} className='mt-[50px] lg:py-[50px] py-[30px]'>
  <div className='lg:px-[50px] px-[50px]'>
    <h1 className='lg:text-[52px] text-[30px] text-left lg:text-left text-4xl mb-6  font-medium leading-tight'>
      Main Specialties of Our Clinic:
    </h1>
    <button className='lg:p-[10px_40px] lg:inline-block hidden font-medium lg:text-[20px] lg:bg-white lg:rounded-full text-[20px]'>
      About us
    </button>
    <button className='lg:p-[5px_10px] lg:inline-block hidden lg:ml-[10px] lg:text-[22px] lg:bg-[#096DA1] lg:rounded-full lg:items-center lg:text-white lg:font-bold'>
      →
    </button>
  </div>

  
</div>
    <img 
      src={Rectangle3} 
      alt="Genetic Technology" 
      className='lg:w-[43%] w-[42%] ml-auto mt-[-70px] lg:ml-auto lg:mt-[-100px]'
    />
    
    <div className='lg:w-[50%] lg:mt-[-180px] mb-[50px]'>
  <button className='lg:p-[10px_40px] bg-blue-200 mb-[10px] p-[5px_20px] rounded-[10px] rotate-3 lg:transform lg:-rotate-20 lg:py-[15px] font-medium lg:text-[20px] lg:bg-blue-200 lg:rounded-full hover:rotate-0 hover:scale-110 hover:bg-blue-300 transition-all duration-300 ease-out'>
    Gynecology
  </button>
  <button className='lg:p-[10px_40px] bg-blue-200 p-[5px_20px] ml-[5px] rounded-[10px] lg:transform lg:rotate-20 lg:py-[15px] font-medium lg:text-[20px] lg:bg-blue-200 lg:rounded-full hover:rotate-0 hover:scale-110 hover:bg-blue-300 transition-all duration-300 ease-out'>
    Doppler Ultrasound
  </button>
  <button className='lg:p-[10px_40px] bg-blue-200 p-[5px_20px] rounded-[10px] -rotate-5 lg:-rotate-10 lg:py-[15px] font-medium lg:text-[20px] lg:bg-blue-200 lg:rounded-full hover:rotate-0 hover:scale-110 hover:bg-blue-300 transition-all duration-300 ease-out'>
    General Surgery
  </button>
  <button className='lg:py-[15px] bg-blue-200 p-[5px_20px] mb-[10px] rounded-[10px] rotate-3 lg:-rotate-10 lg:p-[10px_40px] lg:mt-[40px] font-medium lg:text-[20px] lg:bg-blue-200 lg:rounded-full hover:rotate-0 hover:scale-110 hover:bg-blue-300 transition-all duration-300 ease-out'>
    Coloproctology
  </button>
  <button className='lg:p-[10px_40px] bg-blue-200 p-[5px_20px] rounded-[10px] rotate-3 lg:py-[15px] font-medium lg:text-[20px] lg:bg-blue-200 lg:rounded-full hover:rotate-12 hover:scale-110 hover:bg-blue-300 transition-all duration-300 ease-out'>
    Ultrasound Diagnostics
  </button>
  <button className='lg:p-[10px_40px] bg-blue-200 p-[5px_20px] rounded-[10px] rotate-3 font-medium lg:py-[15px] lg:rotate-8 lg:text-[20px] lg:bg-blue-200 lg:rounded-full hover:-rotate-8 hover:scale-110 hover:bg-blue-300 transition-all duration-300 ease-out'>
    Phlebology
  </button>
  <button className='lg:p-[10px_40px] bg-blue-200 ml-[70px] mt-[10px] p-[5px_20px] rounded-[10px] font-medium lg:text-[20px] lg:ml-[230px] lg:mt-[5px] lg:bg-blue-200 lg:rounded-full hover:-rotate-12 hover:scale-110 hover:bg-blue-300 transition-all duration-300 ease-out'>
    Vascular Surgery
  </button>
</div>


      </div>


      {/* Fourth Section  */}

      <h1 className='lg:text-[70px] lg:text-center lg:mt-[150px] lg:font-medium'>
        Our <span className='text-[#096DA1]'> Medical </span> Services
      </h1>
      <p className='lg:font-medium lg:mb-[150px] lg:text-center lg:text-[20px]'>
        The best medical and treatment center for you
      </p>

    <div className="flex flex-col lg:px-[50px] lg:flex-row justify-between items-start lg:items-center mb-12">
  <h1 className="text-2xl lg:text-4xl font-medium lg:leading-[50px] text-gray-800 mb-6 lg:mb-0">
    We Offer Ultrasound Examinations <br /> of the Following Areas:
  </h1>
  
  <div className="flex items-center gap-4">
    <button className="bg-[#DBECF5] border-1 border-black hover:bg-blue-200/50 font-medium px-10 py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-110">
      Learn More
    </button>
    <button className="bg-[#DBECF5] border-1 border-black  hover:bg-blue-200/50 font-medium w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg transform hover:scale-110">
      →
    </button>
  </div>
</div>

{/* Note-style cards */}
<div className="grid px-6 md:px-8 lg:px-[50px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
  {/* Card 1 */}
  <div className="relative rounded-lg lg:rounded-br-[150px] p-4 md:p-6 shadow-sm bg-[#C9E7F3] overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
    {/* Dark Crystal Shine Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
    
    {/* Dark Border Glow */}
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-800/30 via-cyan-800/30 to-blue-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xs group-hover:blur-sm -z-10"></div>
    
    <button className="bg-[#ffffff] text-black font-medium px-[10px] py-2 rounded-full mb-3 md:mb-4 text-sm transition-all duration-300 group-hover:bg-blue-100 group-hover:shadow-lg group-hover:scale-110 group-hover:text-blue-800">
      •••
    </button>
    <div className="space-y-2 relative z-10">
      <h1 className='text-black group-hover:text-white transition-all duration-300 ease-out text-xl md:text-2xl lg:text-[30px] transform group-hover:translate-x-2'>
        • Thyroid Gland
      </h1>
      <h1 className='text-black group-hover:text-white transition-all duration-300 ease-out delay-75 text-xl md:text-2xl lg:text-[30px] transform group-hover:translate-x-2'>
        • Mammary Gland
      </h1>
      <h1 className='text-black group-hover:text-white transition-all duration-300 ease-out delay-100 text-xl md:text-2xl lg:text-[30px] transform group-hover:translate-x-2'>
        • Prostate Gland
      </h1>
      <div className='bg-white/70 backdrop-blur-xs py-2 md:py-[5px] rounded-[50px] mt-3 md:mt-4 transition-all duration-500 group-hover:bg-blue-100/80 group-hover:shadow-lg group-hover:scale-105'>
        <h1 className='text-black font-medium text-xs md:text-sm lg:text-[14px] pl-4 md:pl-[25px] transition-colors duration-300 group-hover:text-blue-900'>
          Detailed Ultrasound <br />
          Assessments
        </h1>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="relative rounded-lg lg:rounded-tr-[150px] p-4 md:p-6 shadow-sm bg-[#C9E7F3] overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
    {/* Dark Crystal Shine Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-900/25 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
    
    {/* Dark Border Glow */}
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-800/35 via-blue-800/35 to-cyan-800/35 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xs group-hover:blur-sm -z-10"></div>
    
    <div className='bg-white/70 backdrop-blur-xs py-2 md:py-[5px] rounded-[50px] transition-all duration-500 group-hover:bg-blue-100/80 group-hover:shadow-lg group-hover:scale-105'>
      <h1 className='text-black font-medium text-xs md:text-sm lg:text-[14px] pl-4 md:pl-[25px] transition-colors duration-300 group-hover:text-blue-900'>
        Detailed Ultrasound <br />
        Assessments
      </h1>
    </div>
    <div className="space-y-2 py-3 md:py-[10px] relative z-10">
      <h1 className='text-black group-hover:text-white transition-all duration-300 ease-out text-xl md:text-2xl lg:text-[30px] transform group-hover:translate-x-2'>
        • Thyroid Gland
      </h1>
      <h1 className='text-black group-hover:text-white transition-all duration-300 ease-out delay-75 text-xl md:text-2xl lg:text-[30px] transform group-hover:translate-x-2'>
        • Mammary Gland
      </h1>
      <h1 className='text-black group-hover:text-white transition-all duration-300 ease-out delay-100 text-xl md:text-2xl lg:text-[30px] transform group-hover:translate-x-2'>
        • Prostate Gland
      </h1>
    </div>
    <button className="bg-[#ffffff] text-black font-medium px-[10px] py-2 rounded-full mt-3 md:mt-4 text-sm transition-all duration-300 group-hover:bg-blue-100 group-hover:shadow-lg group-hover:scale-110 group-hover:text-blue-800">
      •••
    </button>
  </div>

  {/* Card 3 */}
  <div className="relative rounded-lg lg:rounded-bl-[150px] p-4 md:p-6 shadow-sm bg-[#C9E7F3] overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
    {/* Dark Crystal Shine Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-800/30 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
    
    {/* Dark Border Glow */}
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-900/40 via-cyan-900/40 to-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xs group-hover:blur-sm -z-10"></div>
    
    <button className="bg-[#ffffff] text-black font-medium px-[10px] py-2 rounded-full mb-3 md:mb-4 text-sm transition-all duration-300 group-hover:bg-blue-100 group-hover:shadow-lg group-hover:scale-110 group-hover:text-blue-800">
      •••
    </button>
    <div className="space-y-2 relative z-10">
      <h1 className='text-black group-hover:text-white transition-all duration-300 ease-out text-xl md:text-2xl lg:text-[30px] transform group-hover:translate-x-2'>
        • Thyroid Gland
      </h1>
      <h1 className='text-black group-hover:text-white transition-all duration-300 ease-out delay-75 text-xl md:text-2xl lg:text-[30px] transform group-hover:translate-x-2'>
        • Mammary Gland
      </h1>
      <h1 className='text-black group-hover:text-white transition-all duration-300 ease-out delay-100 text-xl md:text-2xl lg:text-[30px] transform group-hover:translate-x-2'>
        • Prostate Gland
      </h1>
      <div className='bg-white/70 backdrop-blur-xs py-2 md:py-[5px] rounded-[50px] mt-3 md:mt-4 transition-all duration-500 group-hover:bg-blue-100/80 group-hover:shadow-lg group-hover:scale-105'>
        <h1 className='text-black font-medium text-xs md:text-sm lg:text-[14px] pl-4 md:pl-[25px] transition-colors duration-300 group-hover:text-blue-900'>
          Detailed Ultrasound <br />
          Assessments
        </h1>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div className="relative rounded-lg lg:rounded-tl-[150px] p-4 md:p-6 shadow-sm bg-[#C9E7F3] overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
    {/* Dark Crystal Shine Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-800/35 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
    
    {/* Dark Border Glow */}
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-900/45 via-blue-900/45 to-cyan-900/45 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xs group-hover:blur-sm -z-10"></div>
    
    <div className='bg-white/70 backdrop-blur-xs py-2 md:py-[5px] rounded-[50px] transition-all duration-500 group-hover:bg-blue-100/80 group-hover:shadow-lg group-hover:scale-105'>
      <h1 className='text-black font-medium text-xs md:text-sm lg:text-[14px] pl-4 md:pl-[25px] transition-colors duration-300 group-hover:text-blue-900'>
        Detailed Ultrasound <br />
        Assessments
      </h1>
    </div>
    <div className="space-y-2 py-3 md:py-[10px] relative z-10">
      <h1 className='text-black group-hover:text-white transition-all duration-300 ease-out text-xl md:text-2xl lg:text-[30px] transform group-hover:translate-x-2'>
        • Thyroid Gland
      </h1>
      <h1 className='text-black group-hover:text-white transition-all duration-300 ease-out delay-75 text-xl md:text-2xl lg:text-[30px] transform group-hover:translate-x-2'>
        • Mammary Gland
      </h1>
      <h1 className='text-black group-hover:text-white transition-all duration-300 ease-out delay-100 text-xl md:text-2xl lg:text-[30px] transform group-hover:translate-x-2'>
        • Prostate Gland
      </h1>
    </div>
    <button className="bg-[#ffffff] text-black font-medium px-[10px] py-2 rounded-full mt-3 md:mt-4 text-sm transition-all duration-300 group-hover:bg-blue-100 group-hover:shadow-lg group-hover:scale-110 group-hover:text-blue-800">
      •••
    </button>
  </div>
</div>


<div className='lg:flex mt-[50px] flex justify-center lg:mt-[100px] lg:justify-center lg:items-center lg:gap-[15px] bg-[#D7EBF4] p-[5px] lg:w-full lg:hover:bg-[#a9c4d1] lg:duration-200 lg:bg-[#D7EBF4] lg:p-6'>
  <h1 className='lg:text-[40px] lg:hover:bg-[#94afba] lg:hover:text-white lg:duration-200 lg:ease-in-out lg:cursor-default text-[14px] font-medium p-[1px_5px] bg-[#E7F3F8] lg:p-[1px_40px] lg:border-3 lg:border-white lg:bg-[#E7F3F8] lg:rounded-full text-center'>
    Early Detection Saves Lives
  </h1>
  <h1 className='lg:text-[40px] lg:hover:bg-[#94afba] lg:hover:text-white lg:duration-200 lg:ease-in-out lg:cursor-default text-[14px] font-medium p-[1px_5px] bg-[#E7F3F8] lg:p-[1px_40px] lg:border-3 lg:border-white lg:bg-[#E7F3F8] lg:rounded-full text-center'>
    Schedule Your Screening Today
  </h1>
</div>

<div className="flex justify-center lg:mt-[100px]">
  <h1 className='font-medium border-2 border-[#096DA1] lg:inline lg:p-[5px_20px] lg:rounded-full text-center'>
    Our Team
  </h1>
</div>

      <h1 className='font-medium text-center text-[70px] mt-[10px]'>
        Meet <span className='text-[#096DA1]'>  our Specialists </span>
      </h1>
      <p className='text-[23px] font-medium text-center'>
        Behind every treatment is a team of experts dedicated to your wellbeing
      </p>

      <div className='lg:flex lg:overflow-hidden'>
       <Component img={Doc1} name="Dr. Gukesh Sharma" job="General Surgeon" title="CEO & Co-Founder of Biomed" />
       <Component img={Doc1} name="Dr. Gukesh Sharma" job="General Surgeon" title="CEO & Co-Founder of Biomed" />
       <Component img={Doc1} name="Dr. Gukesh Sharma" job="General Surgeon" title="CEO & Co-Founder of Biomed" />
       <Component img={Doc1} name="Dr. Gukesh Sharma" job="General Surgeon" title="CEO & Co-Founder of Biomed" />
       <Component img={Doc1} name="Dr. Gukesh Sharma" job="General Surgeon" title="CEO & Co-Founder of Biomed" />
      </div>
    </>
    </div>
  )
}

export default Menu


function Component( { img , name , job , title } ) {
  return (
    <div className="group">
      <img src={img} alt="Doctor's Profile" />
      <div className='lg:bg-white lg:z-10 lg:relative lg:w-full lg:px-[20px] lg:py-[5px] lg:rounded-[10px] lg:ml-[10px] lg:mt-[-80px] lg:transition-all lg:duration-300 lg:ease-in-out lg:group-hover:mt-0 lg:group-hover:bg-blue-500 lg:group-hover:text-white'>
        <h1 className='font-medium text-[15px] text-center lg:group-hover:text-white'>
          { name }
        </h1>
        <p className='font-medium text-center text-gray-500 text-[13px] lg:group-hover:text-white'>
          { job }
        </p>
        <p className='font-medium text-center text-[14px] lg:group-hover:text-white'>
          { title }
        </p>
      </div>
    </div>
  )
}

export { Component }