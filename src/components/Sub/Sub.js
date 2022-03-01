import React from 'react';

function Sub() {
    return (
        <div className='flex items-center justify-center mb-20'>
            <div className='sub-main bg-[blue] w-[74rem] h-40 rounded-[12px] flex space-x-36'>
                <div className='mt-8 ml-10'>
                    <h3 className='text-white font-bold text-24'>Get our pro offers</h3>
                    <p className='text-white'>
                        Create a visual identity for your company, and an overall brand
                    </p>
                </div>
                <div className='sub-input relative w-[17.5rem] mt-[4rem] '>
                    <input
                        type='text'
                        className=''
                        size='50'
                        placeholder='     Type your email here'
                    />
                    <button>Subcribe</button>
                </div>
            </div>
        </div>
    );
}

export default Sub;
