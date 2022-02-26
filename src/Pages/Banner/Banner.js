import React, { useState } from 'react';
import banner from '../../assets/image/bg1.jpg';

function Banner() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <div className='banner'>
            <div className='flex relative'>
                <img className='w-full h-[30rem]' src={banner} alt='banner' />
                <h3 className='absolute text-48 font-sora text-white  top-20 left-24'>
                    Book With Us
                </h3>
                <h3 className='absolute text-48 font-sora text-white top-36 left-24'>
                    {' '}
                    And Enjoy your{' '}
                </h3>
                <h3 className='absolute text-48 font-sora text-white top-[13rem] left-24'>
                    Journey!
                </h3>
            </div>
            <div className='flex justify-center items-center relative'>
                <div className='flex bg-[white] w-4/5  rounded-[12px] absolute top-[-100px]'>
                    <div className='tab-main flex space-x-36 top-[-5rem]'>
                        <div className='bloc-tabs'>
                            <span
                                className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                                onClick={() => toggleTab(1)}
                            >
                                <i className='bx bx-bed text-24 mr-2 '></i>
                                Hotel
                            </span>
                            <span
                                className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
                                onClick={() => toggleTab(2)}
                            >
                                <i className='bx bxs-plane-take-off text-24 mr-2'></i>
                                Flight
                            </span>
                            <span
                                className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
                                onClick={() => toggleTab(3)}
                            >
                                <i className='bx bxs-car text-24 mr-2'></i>
                                Car Rental
                            </span>
                        </div>
                        <div className='menu-trip flex mt-2'>
                            {/* <i class='bx bx-chevron-up'></i> */}
                            {/* <i class='bx bx-chevron-down'></i> */}
                            <span className='font-bold mx-6 cursor-pointer'>Round Trip</span>
                            <span className='font-bold mx-6 cursor-pointer'>1 passenger</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
