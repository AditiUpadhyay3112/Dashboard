import React from 'react'
import Card2 from './Cards/Card2'
import img from '../Images/img5.png'
const WhychoseCA = ({ H1, P1 }) => {
  return (
    <>
      <div>
        <section className=' md:py-[400px]  pt-[100px] pb-96 bg-gradient-to-r  from-[#be38ac] via-[#894bbf] to-[#002a94]  relative'>
          <div className='absolute top-0  left-0  w-full h-full bg-[#000000a0]'></div>
          <div className="container mx-auto flex z-50 relative px-4">
            <div className=" md:w-[60%]  w-[50%]  md:mx-6 mx-8 absolute md:-top-[350px] -top-28  text-[#f6cf95] ">
              <p className='md:text-4xl pb-4 font-serif text-sm'>{P1}</p>
              <h2 className=' md:text-7xl  text-4xl pt-2 tracking-wide font-serif '> {H1} </h2>
            </div>
            <img src={img} className='absolute md:w-[45%] w-[35%] md:-top-44 -top-52 md:left-0 right-10 ' alt="" />
            <div className=' absolute md:right-6 right-16 md:grid md:grid-cols-1 grid grid-cols-2  border-2 border-orange-400 rounded-lg shadow-2xl shadow-black md:-top-[380px] top-20 '>
              <div className=' '><Card2 H1={"Soft Skills Development"} /></div>
              <div className=' '><Card2 H1={"Leadership Skills"} /></div>
              <div className=' '><Card2 H1={"Networking"} /></div>
              <div className=' '><Card2 H1={"Industrial experience"} /></div>
              <div className=' '><Card2 H1={"Certifications and LOR"} /></div>

            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default WhychoseCA