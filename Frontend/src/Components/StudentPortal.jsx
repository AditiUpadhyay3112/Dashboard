import React from 'react'
import img1 from '../Images/img7.png';
import PieChart from './PieChart';
import { CgAlarm } from 'react-icons/cg';



const StudentPortal = ({ H1, P1 }) => {
    return (
        <div>
            <section className=' py-[20px] md:pt-[13vh]  bg-gradient-to-r  from-[#be38ac] via-[#894bbf] to-[#002a94]  relative'>
                <div className='absolute top-0   left-0  w-full h-full bg-[#000000a0] '></div>
                <div className="container mx-auto flex z-50  relative  ">
            
                    <div className=" md:w-[60%]  w-[50%]   px-4 md:left-[315px]  mx-6 absolute md:-top-60 -top-36 text-[#f6cf95] ">
                        <h2 className=' md:text-5xl  text-2xl pb-2 tracking-widest font-serif'>   </h2>
                        <p className='md:text-xl text-sm'></p>
                    </div>
                   
                    <div className='h-[300px] w-[47%] bg-[#6c4869] shadow-2xl shadow-black border border-[#ff9634] absolute left-64 top-[72px] rounded-xl'>
                        <img src={img1} className='w-80 absolute -right-4 bottom-0 z-50' alt="" />
                    </div>
                    <div className='h-[300px] w-[27%] bg-[#6c4869] border px-4 py-4 border-[#ff9634]  shadow-2xl shadow-black right-10 top-[72px] absolute rounded-xl'>
                        <div className='shadow-xl shadow-black py-2 rounded-lg '>
                        <PieChart />
                        </div>
                    </div>

                    <div className='h-[300px] w-[77%] bg-[#6c4869] border border-[#ff9634]  shadow-2xl shadow-black top-[400px] left-64 absolute rounded-xl'>
                        <table className=' grid grid-cols-4 py-2 px-2 absolute w-[98%] h-[96%] mt-[6px] ml-2 '>
                            <tr className='border-2 rounded-lg border-[#ff9634] grid grid-cols-1 px-2 py-2 shadow-xl shadow-black'>
                                <th className='border rounded-lg border-[#ff9634] shadow-xl shadow-black h-16 text-lg font-serif text-white hover:scale-105 duration-700'> Students Added</th>
                                <th className='text-9xl rounded-lg shadow-xl shadow-black text-white font-serif  hover:scale-95 duration-700'>1</th>
                            </tr>
                            <tr className='border-2 rounded-lg border-[#ff9634] ml-2 grid grid-cols-1 px-2 py-2 shadow-xl shadow-black'>
                                <th className='border rounded-lg border-[#ff9634] shadow-xl shadow-black h-16 text-lg font-serif text-white hover:scale-105 duration-700'> Workshops Organised</th>
                                <th className='text-9xl rounded-lg shadow-xl shadow-black text-white font-serif hover:scale-95 duration-700'> 2</th>
                            </tr>
                            <tr className='border-2 rounded-lg border-[#ff9634] ml-2 grid grid-cols-1 px-2 py-2 shadow-xl shadow-black'>
                                <th className='border rounded-lg border-[#ff9634] shadow-xl shadow-black h-16 text-lg font-serif text-white hover:scale-105 duration-700'> Social Media </th>
                                <th className='text-9xl rounded-lg text-white shadow-xl shadow-black font-serif hover:scale-95 duration-700'>3</th>
                            </tr>
                            <tr className='border-2 rounded-lg border-[#ff9634] ml-2 grid grid-cols-1 px-2 py-2 shadow-xl shadow-black'>
                                <th className='border rounded-lg border-[#ff9634] shadow-xl shadow-black h-16 text-lg font-serif text-white hover:scale-105 duration-700'> Masterclass</th>
                                <th className='text-9xl rounded-lg text-white shadow-xl shadow-black font-serif hover:scale-95 duration-700    '>4</th>
                            </tr>

                        </table>



                    </div>


                </div>


            </section>

        </div>
    )
}

export default StudentPortal  