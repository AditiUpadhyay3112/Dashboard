import React from 'react'
import img from '../../Images/upflairs white logo.png'
import { NavLink } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'

const Header = () => {
  return (
    <div>

<nav className=' md:py-[20px] py-[10px]  bg-gradient-to-r  from-[#be38ac] via-[#894bbf] to-[#002a94]  relative'>
           <div className='absolute top-0  left-0  w-full h-full bg-[#000000a0]'></div>
            <div className="container mx-auto flex z-50  relative px-4">

              <div className='md:w-40 w-28 ml-4 py-2  md:ml-3'><img src={img} alt="" /></div>
              <div className=' absolute md:top-6 top-4 left-40 md:left-60'>
                <ul className='flex text-white font-serif font-semibold md:text-2xl text-lg justify-center '>
                <NavLink>
                  <li className='mx-4 hover:text-[#f6cf95] '>Home</li>
                </NavLink>
                <NavLink>
                  <li className='mx-4  hover:text-[#f6cf95] '>Review</li>
                </NavLink>
                <NavLink>
                  <li className='mx-4  hover:text-[#f6cf95] '>Tasks</li>
                </NavLink>
                <NavLink>
                  <li className='mx-4  hover:text-[#f6cf95] '>Contact</li>
                </NavLink>
                </ul>
                <div className='flex absolute md:-top-0 md:-right-[400px] '>
                  <div className=' text-white hover:text-[#f6cf95] font-serif font-semibold md:text-2xl '>
                    <NavLink>Candidate Name </NavLink>
                  </div>
                  <div className='text-white absolute md:left-60 left-96 bottom-5 hover:text-[#f6cf95] md:bottom-[0.1px]'>
                  <CgProfile size={45}  />

                  </div>
                </div>
              </div>
            </div>
           
        </nav>
       
    </div>
  )
}

export default Header