import React from 'react'


const Banner = ({img, H1, H2, H3, P1}) => {
  return (
    <>
    <div>
    <section className=' md:py-[150px] py-[50px] bg-gradient-to-r  from-[#be38ac] via-[#894bbf] to-[#002a94]  relative'>
           <div className='absolute top-0  left-0  w-full h-full bg-[#000000a0]'></div>
            <div className="container mx-auto flex z-50 relative px-4">
                <div className=" md:w-[60%]    w-[50%] mx-4 text-[#f6cf95] ">
                   <h2 className='  md:text-7xl  text-4xl pb-2 tracking-wider font-serif'> {H1} <br />{H2}<br />{H3}</h2>
                   <p className='md:text-xl  text-sm '>{P1}</p>
                  
              </div>
              <div className='absolute right-4 md:-top-36 -top-10 ' >
                <img src= {img} className='md:w-[40vw] w-[30vw]' alt="" />
              </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default Banner