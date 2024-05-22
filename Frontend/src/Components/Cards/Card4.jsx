import React from 'react';
import '../../App.css';

const Card4 = ({ H1 }) => {


    return (
        <>
            <div className='w-full sm:w-56 h-20  border border-[#ff9634]  bg-[#6c4869] shadow-2xl py-2 px-2 text-xl shadow-black hover:bg-[#5b3e5884] hover:border-2 hover:border-[#4f225b] hover:transition ease-in-out duration-1000 hover:scale-y-110 hover:scale-x-110 mt-[2vh]'>
                <h1 className='font-serif rounded-xl font-bold text-white shadow shadow-black text-center  py-[18px] px-2'> 
                    {H1} 
                </h1>
            </div>
        </>
    );
};

export default Card4;
