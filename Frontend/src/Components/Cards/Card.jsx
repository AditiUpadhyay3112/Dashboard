import React from 'react'
import Button from '../Buttons/Button'

const Card = () => {
  return (
    <>
    <div className='md:w-[20vw] w-[35vw] h-[40vh] relative border-2 border-white hover:border-[#ffa71a]  hover:border-4 duration-1000  hover:bg-[#fbdfb1] bg-[#ffa71a]'>
    <div className='absolute top-0  left-0  w-full h-full  bg-[#00000040]'></div>
      <div className='text-center mt-10'>
        
        <h1 className='md:text-xl text-md uppercase  text-white hover:text-[#ffa71a] font-serif'> Review <br />Perfromance</h1></div>
        <div className='flex justify-center mt-10'>
          <Button btn={'Know More'}/>
        </div>
      </div>
    </>
  )
}

export default Card