import React from 'react';
import trusted1 from '../img/Trusted1.avif';
import trusted2 from '../img/Trusted2.avif';
import trusted3 from '../img/Trusted-3.png';
import trusted4 from '../img/Trusted4.jpg';

const Trusted = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-6 underline'>Trusted By</h1>
            <div className='mt-4 md:flex px-16 md:px-0 gap-16 my-4  justify-center mb-5'>
                <img className='w-[250px]  border rounded-lg' src={trusted1} alt="" />
                <img className='w-[250px] my-3 border rounded-lg' src={trusted2} alt="" />
                <img className='w-[250px] border rounded-lg' src={trusted3} alt="" />
                <img className='w-[250px] mt-3 border rounded-lg' src={trusted4} alt="" />
            </div>
        </div>
    );
};

export default Trusted;