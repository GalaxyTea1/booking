import React, { useState } from 'react';
import banner from '../../assets/image/bg1.jpg';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

function Banner() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    const [date, setDate] = useState(null);
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
                <div className='menu-top flex bg-white w-4/5  rounded-[12px] absolute top-[-100px] h-[190px]'>
                    <div className='tab-main flex space-x-52 top-[-5rem]'>
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
                            <span className='font-bold mx-6 cursor-pointer'>Round Trip</span>
                            <i className='bx bx-chevron-down'></i>
                            <span className='font-bold mx-6 cursor-pointer'>1 passenger</span>
                            <i className='bx bx-chevron-down'></i>
                        </div>
                    </div>
                    <div className='check-input flex absolute top-1/2'>
                        <div className='check w-80 h-16 ml-8 rounded-[10px] bg-[#f6f7f9]'>
                            <h3 className='pl-2 pt-2 font-bold'>Location</h3>
                            <span className='pl-2'>Where are you from?</span>
                        </div>
                        <div className='absolute top-[18px] left-[345px] w-[30px] h-[30px] rounded-full bg-[#f6f7f9] flex justify-center items-center'>
                            <i className='bx bx-transfer-alt'></i>
                        </div>
                        <div className='check w-60 h-16 ml-4 rounded-[10px] bg-[#f6f7f9]'>
                            <h3 className='pl-2 pt-2 font-bold'>Check in</h3>
                            <span className='pl-2'>Add date</span>
                            {/* <div className='mb-[20px] w-30 h-8 ml-2 rounded-[10px]'>
                                <DatePicker
                                    className='data-picker'
                                    style={{
                                        border: 'none',
                                        backgroundColor: '#f6f7f9',
                                    }}
                                />
                            </div> */}
                        </div>
                        <div className='absolute top-[18px] left-[600px] w-[30px] h-[30px] rounded-full bg-[#f6f7f9] flex justify-center items-center'>
                            <i className='bx bx-transfer-alt'></i>
                        </div>
                        <div className='check w-60 h-16 ml-4 rounded-[10px] bg-[#f6f7f9]'>
                            <h3 className='pl-2 pt-2 font-bold'>Check out</h3>
                            <span className='pl-2'>Add date</span>
                        </div>
                        <button className='w-36 rounded-[12px] h10 bg-[#3b71fe] ml-20 text-white'>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
