import React from 'react'

const Button = ({btn}) => {
  return (
    <div className=' text-center font-semibold font-serif text-orange-400 py-2 px-4 rounded-xl hover:bg-[#dadada8b] bg-white border-2 border-[#e38d37]'> 
    <button>{btn}</button>
    </div>
  )
}

export default Button