import React from 'react'

const FeedbackForm = () => {
  return (
    <div className='py-20 md:px-6 px-8 rounded-lg w-full bg-[#6c4869] shadow-2xl shadow-black border border-[#ff9634]'>

        <form action="" className='shadow-lg shadow-black border border-[#ff9634] px-8 py-10 rounded-lg '>

            <h1 className='text-4xl mb-10 font-semibold text-center uppercase'>Feedback Form</h1>
            <div className='flex gap-4 items-center flex-col'>

            <label htmlFor="name" className=' font-serif font-bold'> Your Name</label>
            <input type="text" className='px-10 w-2/3 py-2 rounded-lg  placeholder:text-white placeholder:text-center placeholder:text-lg bg-[#ffffff84]' placeholder='Enter Your name' />
            <label htmlFor="feedback" className=' font-serif font-bold'> Feedback</label>
            <textarea type="text" className='px-6  h-44 w-2/3 py-4 rounded-lg  placeholder:text-white placeholder:text-center placeholder:text-lg bg-[#ffffff84]' placeholder='Enter Your name' />
          <button className='px-8 py-2 shadow-lg shadow-black rounded-lg border-[#ff9634] border hover:scale-105 duration-1000'>
            Submit
          </button>
            </div>

        </form>
    </div>
  )
}

export default FeedbackForm