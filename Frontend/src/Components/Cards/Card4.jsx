import React from 'react';
import '../../App.css';

const Card4 = ({ H1 }) => {
    return (
        <button className="w-full md:w-56 bg-[#6c4869] shadow-lg border px-2 border-[#ff9634] hover:scale-105 duration-700 mb-6 shadow-black h-full rounded-lg flex items-center justify-center">
            <h1 className='font-serif font-bold text-[#ffe5ce] text-center'>
                {H1}
            </h1>
        </button>
    );
};

export default Card4;
