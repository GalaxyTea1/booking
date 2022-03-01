import React, { useState } from 'react';

function TopTour() {
    const [state, setState] = useState({
        dataMix: [
            {
                img: 'https://cdn.vox-cdn.com/thumbor/_uOGMmZS6g9DxTmS7KynYmyVj4c=/0x0:7808x5506/1400x1050/filters:focal(3246x2374:4494x3622):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68672382/shutterstock_149489132.0.0.jpg',
                places: '10 places',
                country: 'Japan',
                title: 'Strow Cat',
            },
            {
                img: 'https://cdn.vox-cdn.com/thumbor/_uOGMmZS6g9DxTmS7KynYmyVj4c=/0x0:7808x5506/1400x1050/filters:focal(3246x2374:4494x3622):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68672382/shutterstock_149489132.0.0.jpg',
                places: '11 places',
                country: 'Korea',
                title: 'Asia Cat',
            },
            {
                img: 'https://cdn.vox-cdn.com/thumbor/_uOGMmZS6g9DxTmS7KynYmyVj4c=/0x0:7808x5506/1400x1050/filters:focal(3246x2374:4494x3622):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68672382/shutterstock_149489132.0.0.jpg',
                places: '12 places',
                country: 'Chinna',
                title: 'So Deep',
            },
        ],
    });
    const renderDataView = (arr) => {
        return arr.map((item, index) => {
            return (
                <div
                    className='tour-item bg-[#f6f7f9] rounded-[10px] pt-[10px] pb-2 relative'
                    key={index}
                >
                    <img src={item.img} alt='' />
                    <h5 className='mx-4 font-bold text-24 absolute text-white w-[120px] h-[40px] top-[400px] left-[30px]'>
                        {item.title}
                    </h5>
                    <span className='mx-4 absolute text-white w-[120px] h-[40px] top-[440px] left-[30px]'>
                        {item.places}
                    </span>
                    <div className='bg-[gray] font-bold opacity-80 rounded-[15px] flex items-center justify-center absolute text-white w-[100px] h-[40px] text-14 top-[30px] left-[40px]'>
                        {item.country}
                    </div>
                </div>
            );
        });
    };
    return (
        <div className='tour-main ml-[160px] mb-10'>
            <div>
                <h3 className='font-semibold text-48 mb-0'>Top Tours</h3>
                <span>Keep calm & travel on</span>
            </div>
            <div className='tour-main mr-40'>
                <div className='tour-list'>{renderDataView(state.dataMix.slice(0, 3))}</div>
            </div>
        </div>
    );
}

export default TopTour;
