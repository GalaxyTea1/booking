import React from 'react';
import { GiWitchFlight } from 'react-icons/gi';
import ava from '../assets/image/ava.jpg';
import us from '../assets/image/us.png';

function Homepage() {
    return (
        <nav className='flex items-center py-4 z-10 bg-white'>
            <div className='flex items-center mx-4'>
                <div className=' text-24 font-bold mr-2 cursor-pointer'>GuideTrip</div>
                <GiWitchFlight size={'36px'} color='#a897f9' className='cursor-pointer' />
            </div>
            <ul className='md:flex md:gap-2 mx-2 ml-auto text-20 font-semibold'>
                <p>USD</p>
                <img className='h-8 w-8 rounded-full' src={us} alt='' />
                <i className='bx bx-bell bx-tada-hover mt-[5px] text-24 mr-1'></i>
                <p className='opacity-40'>|</p>
                <img className='h-8 w-8 rounded-full ml-1' src={ava} alt='avatar' />
                <p>Boo</p>
                <i className='bx bxs-down-arrow mt-[8px] text-16'></i>
            </ul>
        </nav>
    );
}

export default Homepage;
