import React from 'react'

const Button = ({btn}) => {
  return (
    <div className=' text-center font-semibold font-serif text-white py-2 px-8  rounded-xl hover:bg-[#dadada8b] bg-[#ffb170] border-2 border-[#ffffff]'> 
    <button>{btn}</button>
    </div>
  )
}

export default Button