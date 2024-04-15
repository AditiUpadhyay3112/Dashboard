import React from 'react'
import { CgPlayButtonR } from 'react-icons/cg'
import image1 from '../Images/man1.avif'
import image2 from '../Images/man2.avif'
const Starfeed = ({img, H1, P1, img1}) => {
  return (
    <div>

<hr  />
    <section className=' py-[220px] md:py-[300px]  bg-gradient-to-r  from-[#be38ac] via-[#894bbf] to-[#002a94]  relative'>
           <div className='absolute top-0   left-0  w-full h-full bg-[#000000a0]'></div>
            <div className="container mx-auto flex z-50  relative px-4">
                <div className=" md:w-[60%]  w-[50%]   px-4   mx-6 absolute md:-top-52 -top-36 text-[#f6cf95] ">
                   <h2 className=' md:text-4xl  text-2xl pb-2 tracking-widest font-serif'> {H1}  </h2>
                   <p className='md:text-xl text-sm'>{P1}</p>
              </div>
              <img src={image1} className='md:w-[25%] w-[40%] hover:scale-110 duration-700 absolute z-50 md:-top-[60px] -top-[41px] left-2 md:left-[136px]'  alt="" />

           <div className=' md:mx-8 -left-10 absolute -top-20 md:left-2 md:-top-36  flex'>
            <div className='hover:bg-[#ffaf655a]  md:w-32 w-24 h-24 md:h-32 border-4 md:mx-16 mx-10 my-4 md:my-8  border-[#ff983e] '></div>
            <div className='hover:bg-[#ffaf655a]  md:w-32 w-24 h-24 md:h-32 border-4 md:mx-16 mx-10 my-4 mr-14 md:mr-32 md:my-8  border-[#ff983e] '></div>
            <div className='hover:bg-[#ffaf655a]  md:w-32 w-24 h-24 md:h-32 border-4 md:mx-16 mx-10 my-4 md-14 md:ml-32 md:my-8  border-[#ff983e] '></div>
            <div className='hover:bg-[#ffaf655a]  md:w-32 w-24 h-24 md:h-32 border-4 md:mx-16 mx-10 my-4 md:my-8  border-[#ff983e] '></div>
           </div>

           <img src={image2} className='md:w-[25%] w-[40%] -top-[41px] hover:scale-110 duration-700 absolute md:-top-[60px] md:right-[170px] right-2 z-40 ' alt="" />

           <div className=' md:mx-8 -left-10 absolute top-10 md:top-10 md:left-2 flex'>
            <div className='hover:bg-[#ffaf655a] md:w-32 w-24 h-24 md:h-32 border-4 md:mx-16 mx-10 my-4 md:my-8  border-[#ff983e] '></div>
            <div className='hover:bg-[#ffaf655a] md:w-32 w-24 h-24 md:h-32 border-4 md:mx-16 mx-10 my-4 mr-14 md:mr-32 md:my-8  border-[#ff983e] '></div>
            <div className='hover:bg-[#ffaf655a] md:w-32 w-24 h-24 md:h-32 border-4 md:mx-16 mx-10 my-4 md-14 md:ml-32 md:my-8  border-[#ff983e] '></div>
            <div className='hover:bg-[#ffaf655a] md:w-32 w-24 h-24 md:h-32 border-4 md:mx-16 mx-10 my-4 md:my-8  border-[#ff983e] '></div>
           </div>
            </div>
        </section>
    </div>
  )
}

export default Starfeed