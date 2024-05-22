import React from 'react'

const Card2 = ({ H1 }) => {
  return (
    <div className='md:w-[600px] w-[250px]  hover:scale-105  shadow-2xl shadow-black  duration-1000 text-white hover:text-orange-400 rounded-lg hover:bg-[#ffdfa7] '>
      <div className='text-center md:py-14 py-8 font-serif  md:text-3xl text-sm font-bold  '>
        {H1}
      </div>
    </div>
  )
}

export default Card2