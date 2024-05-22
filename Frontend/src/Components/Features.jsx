import React from 'react'
import Card from './Cards/Card'
import { MdOutlineRateReview } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { VscFeedback } from "react-icons/vsc";




const Features = ({ H1, H2, H3, P1, img }) => {
  return (
    <>
      <div className=' '>
        <section className=' md:pt-[220px] py-[50px] bg-gradient-to-r  from-[#be38ac] via-[#894bbf] to-[#002a94]  relative'>
          <div className='absolute top-0  left-0  w-full h-full bg-[#000000a0]'></div>
          <div className="container mx-auto flex z-50 relative px-4">
            <div className=" md:w-[60%]  w-[50%]  md:mx-6 mx-8 absolute md:-top-40 text-[#f6cf95] ">
              <h2 className=' md:text-4xl  text-2xl pb-2 tracking-widest font-serif'> {H1} </h2>
              <p className='md:text-xl text-sm'>{P1}</p>
            </div>
            <div className='md:flex grid grid-cols-2  md:mt-20 mt-36 '>
              <div className='md:mx-6 mx-8 md:my-4 my-20  text-white'><Card Icon={<TbReport size={90} />} /></div>
              <div className='md:mx-6 mx-8 md:my-4 my-20  text-white'><Card Icon={<MdOutlineRateReview size={90} />} /></div>
              <div className='md:mx-6 mx-8 md:my-4 my-20  text-white'><Card Icon={<CgProfile size={90} />} /></div>
              <div className='md:mx-6 mx-8 md:my-4 my-20  text-white'><Card Icon={<VscFeedback size={90} />} /></div>

            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Features