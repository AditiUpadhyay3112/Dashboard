import React from 'react'
import { CgPlayButtonR } from 'react-icons/cg'

const JobroleVideo = ({H1, H2, H3, P1, img , img1}) => {
  return (
   <>
    <div className=' '>
        <hr  />
    <section className=' py-[220px] md:py-[300px]  bg-gradient-to-r  from-[#be38ac] via-[#894bbf] to-[#002a94]  relative'>
           <div className='absolute top-0   left-0  w-full h-full bg-[#000000a0]'></div>
            <div className="container mx-auto flex z-50  relative px-4">
                <div className=" md:w-[60%]  w-[50%] border border-[#f5a936]  px-4 py-32  mx-6 absolute md:-top-52 -top-36 text-[#f6cf95] ">
                   <h2 className=' md:text-6xl  text-2xl pb-2 tracking-wide font-serif'> {H1}  </h2>
                   <p className='md:text-xl text-sm'>{P1}</p>
              </div>
            <div className='absolute md:-top-52 right-10 -top-40 '> <img src={img}  className='w-[32vw]' alt="" /></div>
            <div className='absolute md:-top-36 hover:scale-105 -top-[125px] right-20 duration-500 md:right-24 '><img src={img1} className='w-[26vw]' alt="" />
            <div className='absolute md:top-[27px] hover:scale-100 left-[19px] top-[16px] md:left-[33px]  duration-1000 w-[82%] h-[82%] bg-[#0000007d] rounded-full'></div>
            </div>
            <div className='absolute  md:right-56 right-[138px] hover:scale-75 md:hover:scale-125 duration-500 -top-16  md:-top-4 text-white  '> <CgPlayButtonR size={80} />
</div>
            </div>
        </section>
    </div>
   </>
  )
}

export default JobroleVideo