import React from 'react'

const AboutCA = ({ H1, H2, H3, P1, img }) => {
  return (

    <>
      <div className=''>
        <section className=' md:py-[220px] py-[50px] bg-gradient-to-r  from-[#be38ac] via-[#894bbf] to-[#002a94]  relative'>
          <div className='absolute top-0  left-0  w-full h-full bg-[#000000a0]'></div>
          <div className="container mx-auto flex z-50 relative px-4">

            <div className='absolute  md:-top-28 -top-2 ' >
              <img src={img} className='md:w-[40vw] w-[30vw]' alt="" />
            </div>
            <div className=" md:w-[60%]  shadow-2xl  md:px-20 md:py-20 border border-[#ff983e] shadow-black  w-[50%] mx-4 text-end md:ml-[35%] ml-[45%]    text-[#f6cf95] ">
              <h2 className=' md:text-4xl  text-2xl pb-2 tracking-wider font-serif'> {H1} <br />{H2}<br />{H3}</h2>
              <p className='md:text-xl text-sm'>{P1}</p>
            </div>

          </div>
        </section>
      </div>
    </>

  )
}

export default AboutCA