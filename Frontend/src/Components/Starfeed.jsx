import React from 'react'
import { CgPlayButtonR } from 'react-icons/cg'
import image1 from '../Images/man1.avif'
import image2 from '../Images/man2.avif'
import Card3 from './Cards/Card3'
const Starfeed = ({ H1, P1 }) => {
  return (
    <div>


      <section className=' py-[220px] md:pt-[300px]  bg-gradient-to-r  from-[#be38ac] via-[#894bbf] to-[#002a94]  relative'>
        <div className='absolute top-0   left-0  w-full h-full bg-[#000000a0]'></div>
        <div className="container mx-auto flex z-50  relative px-4">
          <div className=" md:w-[60%]  w-[50%]   px-4 md:left-[315px]  mx-6 absolute md:-top-60 -top-36 text-[#f6cf95] ">
            <h2 className=' md:text-5xl  text-2xl pb-2 tracking-widest font-serif'> {H1}  </h2>
            <p className='md:text-xl text-sm'>{P1}</p>
          </div>
          <Card3 image1={image1} image2={image2} />

        </div>
      </section>
    </div>
  )
}

export default Starfeed