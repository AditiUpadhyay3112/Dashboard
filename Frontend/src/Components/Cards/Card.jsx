import React from 'react'
import Button from '../Buttons/Button'
import "../../App.css";

const Card = ({ Icon }) => {
  return (
    <>
      <div className='md:w-[20vw] w-[35vw] h-[40vh] shadow-2xl shadow-black relative border-2 border-white hover:scale-105 duration-1000   rounded-tl-[30%]  rounded-tr-[30%]  rounded-bl-3xl  rounded-br-3xl bg-[#cab5934f]'>
        <div className=' shadow-div absolute bottom-32 left-8 w-48 h-48 hover:scale-110 duration-1000  bg-gradient-to-br  from-[#d1a875] via-[#c6925e] to-[#e17c02]  border-2 border-white rounded-tl-[50%] rounded-tr-[50%] rounded-br-[50%]  '>
          <div className='absolute top-14 left-12'>
            {Icon}
          </div>
        </div>

      </div>
    </>
  )
}

export default Card