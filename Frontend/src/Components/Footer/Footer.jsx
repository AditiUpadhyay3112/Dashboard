import React from 'react'
import img from '../../Images/upflairs white logo.png'

const Footer = () => {
  return (
    <div>
<footer className='bg-gradient-to-r  from-[#be38ac] via-[#894bbf] to-[#002a94]  relative'>
<div className='absolute top-0  left-0  w-full h-full bg-[#000000a0]'></div>
<div className='container mx-auto flex z-50  relative px-4'>

<div className='md:w-40 w-28 ml-4 py-2  md:ml-3'><img src={img} alt="" /></div>

</div>
</footer>
      
    </div>
  )
}

export default Footer