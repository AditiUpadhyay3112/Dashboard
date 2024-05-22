import React from 'react'

const Card3 = ({ image1, image2 }) => {
    return (
        <div>
            <img src={image1} className='md:w-[25%] rounded-xl shadow-xl shadow-black w-[40%] hover:scale-110 duration-700 absolute z-50 md:-top-[60px] -top-[41px] left-2 md:left-[136px]' alt="" />

            <div className=' md:mx-8 -left-10 absolute -top-20 md:left-2 md:-top-36  flex'>
                <div className='hover:bg-[#ffaf655a] rounded-xl shadow-xl shadow-black md:w-32 w-24 h-24 md:h-32 border-4 md:mx-16 mx-10 my-4 md:my-8  border-[#ff983e] '></div>
                <div className='hover:bg-[#ffaf655a] rounded-xl shadow-xl shadow-black md:w-32 w-24 h-24 md:h-32 border-4 md:mx-16 mx-10 my-4 mr-4 md:mr-32 md:my-8  border-[#ff983e] '></div>
                <div className='hover:bg-[#ffaf655a] rounded-xl shadow-xl shadow-black md:w-32 w-24 h-24 md:h-32 border-4 md:mx-16 mx-10 my-4 md:ml-32 md:my-8  border-[#ff983e] '></div>
                <div className='hover:bg-[#ffaf655a] rounded-xl shadow-xl shadow-black md:w-32 w-24 h-24 md:h-32 border-4 md:mx-16 mx-10 my-4 md:my-8  border-[#ff983e] '></div>
            </div>

            <img src={image2} className='md:w-[25%] w-[40%] rounded-xl shadow-xl shadow-black -top-[41px] hover:scale-110 duration-700 absolute md:-top-[60px] md:right-[170px] right-8 z-40 ' alt="" />

            <div className=' md:mx-8 -left-10 absolute  top-10 md:top-10 md:left-2 flex'>
                <div className='hover:bg-[#ffaf655a] rounded-xl shadow-xl shadow-black  md:w-32 w-24 h-24 md:h-32 border-4 md:mx-16 mx-10 my-4 md:my-8  border-[#ff983e] '></div>
                <div className='hover:bg-[#ffaf655a] rounded-xl shadow-xl shadow-black md:w-32 w-24 h-24 md:h-32 border-4 md:mx-16 mx-10 my-4 mr-4 md:mr-32 md:my-8  border-[#ff983e] '></div>
                <div className='hover:bg-[#ffaf655a] rounded-xl shadow-xl shadow-black md:w-32 w-24 h-24 md:h-32 border-4 md:mx-16 mx-10 my-4  md:ml-32 md:my-8  border-[#ff983e] '></div>
                <div className='hover:bg-[#ffaf655a] rounded-xl shadow-xl shadow-black md:w-32 w-24 h-24 md:h-32 border-4 md:mx-16 mx-10 my-4 md:my-8  border-[#ff983e] '></div>
            </div>
        </div>
    )
}

export default Card3