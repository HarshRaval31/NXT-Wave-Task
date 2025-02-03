import React from 'react'

function Navbar() {
  return (

    <>
      <div className='w-[100%] h-[75px] ] border-gray-400 flex justify-between items-center bg-[#f5f5f5] '>
        <div className='w-[35%] h-[auto] '>
          <h1 id='H1' className='text-[4vw] sm:text-[3vw] md:text-[2.3vw] lg:text-[2vw]'>Welcome Alex <i id='icon1' class="fa-solid fa-hand"></i></h1>
          <p id='P1' className='text-[2vw] sm:text-[1.7vw] md:text-[1.7vw] lg:text-[1.6vw] xl:text-[1.4vw]'>Here’s what’s happening with your store today.</p>
        </div>
        <div className='flex w-[45%] sm:w-[50%] lg:w-[70%] h-[70%]  items-center justify-evenly '>
          <div className='w-[70%] sm:w-[40%] h-[100%]   flex items-center justify-evenly'>
            <i class="fa-solid fa-magnifying-glass text-[2vw]"></i>
            <input className='w-[100px] h-[20px] lg:h-[35px] lg:w-[300px] text-[1.3vw] border-1 border-gray-400 rounded-[12px] ps-[10px] bg-[white]' type="text" placeholder='Search' /> </div>
          <div className='flex w-[120px] lg:w-[125px] xl:w-[200px]  hidden sm:block'>
            <i id='icon2' class="hidden ms-2 lg:ms-0 lg:pt-[0.5vw] pt-[1vw] text-center fa-regular fa-star w-[30px] md:text-[2vw]  lg:text-[1.6vw] lg: text-[2.4vw] h-[30px] lg:h-[30px] lg:w-[30px] xl:h-[40px] xl:w-[40px]"></i>
            <i id='icon2' class="hidden ms-2 lg:ms-4 lg:pt-[0.5vw] pt-[1vw] text-center fa-solid fa-moon w-[30px] md:text-[2vw] text-[2.4vw] h-[30px] lg:h-[30px] lg:w-[30px] xl:h-[40px] xl:w-[40px]"></i>
            <i id='icon2' class="hidden ms-2 lg:ms-4 lg:pt-[0.5vw] pt-[1vw] text-center fa-solid fa-bell w-[30px] md:text-[2vw] text-[2.4vw] h-[30px] lg:h-[30px] lg:w-[30px] xl:h-[40px] xl:w-[40px]"></i>
          </div>
          <div className='w-[40px] h-[80%] border-1 rounded-[50%] bg-[gray]'></div>
        </div>
      </div>

      <div className='border h-[400px] w-[100%] grid grid-cols-2  gap-4 '>

        <div className='grid grid-cols-2 gap-4'>
          <div className='h-[100px]  rounded-[10px] border '>
            <div className='flex justify-evenly flex-wrap p-5'>
              <img src="\Assets\order.png" className='h-[50px]' alt="" />
              <h1 className='text-[2vw] font-bold'>5858</h1>

              <div class=" mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div class="bg-blue-600 h-2.5 w-45.5 rounded-full" ></div>
              </div>

            </div>
            {/* <div></div> */}
          </div>
          <div className='h-[100px] rounded-[10px] border '>
          <div className='flex justify-evenly flex-wrap p-5'>
              <img src="\Assets\rating.png" className='h-[50px]' alt="" />
              <h1 className='text-[2vw] font-bold' >15858</h1>

              <div class=" mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div class="bg-blue-600 h-2.5 w-45.5 rounded-full" ></div>
              </div>

            </div>
            <div></div>
          </div>
        </div>
        
        <div className='grid grid-col-1'>
          <div className='h-[100$]  rounded-[10px] border '>
            <img src="https://www.demandhub.co/assets/images/demandhub/articles/boost-car-sales.png" className='fluid w-[100%] h-[100%] rounded-[10px] ' alt="" />
          </div>
        </div>

      </div>

    </>

  )
}

export default Navbar