import React from 'react'
import image from '../Images/img6.png'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import '../App.css'


const Login = ({ img, H1, P1, img1 }) => {
  return (
    <>
      <section className=' py-[50px] bg-gradient-to-r  from-[#be38ac] via-[#894bbf] to-[#002a94]  relative'>
        <div className='absolute top-0   left-0  w-full h-full bg-[#000000a0]'></div>
        <div className="container mx-auto flex z-50   relative px-4">
          <div className=' md:w-[80%] md:h-[500px]  w-[80%] h-[250px] relative  md:ml-28 ml-10 shadow-2xl shadow-black bg-[#ededed48] md:rounded rounded-tr-3xl'>

            <h1 className=' md:text-sm md:w-[10%] w-[15%] text-[8px] absolute top-10 md:left-6 left-4 tracking-widest font-serif text-[#f6cf95] '> {H1}</h1>
            <img src={image} alt="" className='absolute left-10 bottom-1 w-[55%]  z-50' />
            <div className=' w-[65%] h-[250px] md:h-[500px] bg-[#f4e7d6] absolute right-0 md:rounded-bl-3xl rounded-tr-3xl rounded-tl-3xl md:rounded-tl-3xl md:rounded shadow-2xl shadow-black'>

              <h1 className='absolute  md:top-10 top-4 md:left-[330px] left-[134px] md:text-4xl text-xl font-extrabold shadow-xl shadow-[#060606c2] rounded-md md:px-4 px-8  md:py-4 py-2 tracking-widest font-serif text-[#ffa719]'>LOGIN</h1>
              <input type="text" placeholder='Username' className='absolute cursor-default md:top-48 top-20 z-50 rounded-md md:left-72 left-40 md:w-[40%] w-[30%] md:text-xl text-xs font-serif border-b-2  text-center border-b-[#ffa71a] bg-transparent placeholder:text-[#ffa71a] py-2  text-[#ffa71a] shadow-xl shadow-[#060606c2]' />
              <input type="password" placeholder='Password' className='absolute cursor-default md:top-72 top-32 z-50 md:left-72 left-40 rounded-md md:w-[40%] w-[30%] md:text-xl text-xs font-serif border-b-2  text-center border-b-[#ffa71a] bg-transparent placeholder:text-[#ffa71a] py-2 text-[#ffa71a] shadow-xl shadow-[#060606c2]' />
              <div className='absolute md:top-96 top-44 md:left-[390px] left-44 text-[#ffa71a] hover:text-[#ff8555] cursor-pointer '>
                <IoIosArrowDroprightCircle size={60} />
              </div>
              <h1 className='absolute font-serif text-[#ffa71a] md:text-xs text-[7px] md:bottom-4 bottom-2 md:right-8 right-4 font-bold hover:underline-offset-2 cursor-pointer hover:underline'>FORGOT PASSWORD?</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login