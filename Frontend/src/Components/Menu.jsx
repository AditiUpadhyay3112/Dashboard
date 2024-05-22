import React from 'react'
import Card4 from './Cards/Card4'
import { FaUserCircle } from 'react-icons/fa'

const Menu = () => {
  return (
    <div className='md:pb-[10px] md:pt-20 py-[10px] bg-gradient-to-r  from-[#be38ac] via-[#894bbf] to-[#002a94]  relative'>
              <div className='absolute top-0  left-0  w-full h-full bg-[#000000a0]'></div>
       <div className='z-50 absolute'>
       <div className='ml-[6vw] '> <FaUserCircle color='#f6cf95' size={60} /> </div>
                        <Card4 H1={'Performance Chart'}/>
                        <Card4 H1={'Hello world'}/>
                        <Card4 H1={'Hello world'}/>
                        <Card4 H1={'Hello world'}  />
                        <Card4 H1={'Hello world'}/>
                        <Card4 H1={'Hello world'}/>
                        <Card4 H1={'Hello world'}/>
       </div>
    </div>
  )
}

export default Menu