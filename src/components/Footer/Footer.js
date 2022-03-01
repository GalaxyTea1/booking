import React from 'react';
import { GiWitchFlight } from 'react-icons/gi';

function Footer() {
    return (
        <div className='footer-main ml-[13rem] pb-20'>
            <div className='footer-item-1'>
                <div className='flex items-center'>
                    <div className=' text-24 font-bold mr-2 cursor-pointer'>GuideTrip</div>
                    <GiWitchFlight size={'36px'} color='#a897f9' className='cursor-pointer' />
                </div>
                <p>
                    This is the team that specializes in making sure in the find it a your interior
                    looks cool
                </p>
                <div className=''>
                    <button className='btn-light bg-white rounded-[5px] w-14 h-6'>
                        <i className='bx bxs-sun text-24'></i>
                    </button>
                    <button className='btn-light bg-white rounded-[5px] w-14 h-6'>
                        <i className='bx bx-moon text-24'></i>
                    </button>
                </div>
            </div>
            <div className='footer-item-2'>
                <h3 className='font-bold text-20'>Services</h3>
                <span>Travel Booking</span>
                <span>Flight Booking</span>
                <span>Car Booking</span>
                <span>Fivestar Hotel</span>
                <span>Traveling</span>
            </div>
            <div className='footer-item-3'>
                <h3 className='font-bold text-20'>Support</h3>
                <span>Travel Booking</span>
                <span>Flight Booking</span>
                <span>Car Booking</span>
                <span>Fivestar Hotel</span>
                <span>Traveling</span>
            </div>
            <div className='footer-item-4'>
                <h3 className='font-bold text-20'>Business</h3>
                <span>Travel Booking</span>
                <span>Flight Booking</span>
                <span>Car Booking</span>
                <span>Fivestar Hotel</span>
                <span>Traveling</span>
            </div>
        </div>
    );
}

export default Footer;
