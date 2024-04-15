import React from 'react'
import Card from './Cards/Card'

const Features = ({ H1, H2, H3, P1, img}) => {
  return (
    <>
    <div className=' '>
        <hr  />
    <section className=' md:py-[220px] py-[50px] bg-gradient-to-r  from-[#be38ac] via-[#894bbf] to-[#002a94]  relative'>
           <div className='absolute top-0  left-0  w-full h-full bg-[#000000a0]'></div>
            <div className="container mx-auto flex z-50 relative px-4">
                <div className=" md:w-[60%]  w-[50%]  md:mx-6 mx-8 absolute md:-top-40 text-[#f6cf95] ">
                   <h2 className=' md:text-4xl  text-2xl pb-2 tracking-widest font-serif'> {H1} </h2>
                   <p className='md:text-xl text-sm'>{P1}</p>
              </div>
              <div className='md:flex grid grid-cols-2  md:mt-0 mt-36 '> 
                    <div className='md:mx-6 mx-8 my-4'><Card/></div>
                    <div className='md:mx-6 mx-8 my-4'><Card/></div>
                    <div className='md:mx-6 mx-8 my-4'><Card/></div>
                    <div className='md:mx-6 mx-8 my-4'><Card/></div>


                    
              </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default Features