import React from 'react'

function Modal() {
  return (
    <div className='w-[450px] h-[450px] flex flex-wrap justify-evenly items-evenly border-1'>
            <div className='w-[70%] h-[50%] flex items-center justify-center  border'>img</div>
            <div className='w-[35%] h-[8%] border flex items-center justify-center'>Title</div> -
            <div className='w-[30%] h-[8%] border flex items-center justify-center'>Price</div>
            <div className='w-[70%] h-[25%] border flex items-center justify-center' > Description </div>
            <div className='w-[50%] h-[5%] border flex items-center justify-center'>
                <img src="\Assets\rating.png" alt="" className='w-[45%]' />
            </div>
    </div>

        // <div></div>


  )
}

export default Modal