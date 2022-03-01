import React, { useState } from 'react';

function Explore() {
    const [state, setState] = useState({
        dataMix: [
            {
                img: 'https://cdn.vox-cdn.com/thumbor/_uOGMmZS6g9DxTmS7KynYmyVj4c=/0x0:7808x5506/1400x1050/filters:focal(3246x2374:4494x3622):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68672382/shutterstock_149489132.0.0.jpg',
                reviews: '4.01 (147)',
                distance: '1.2 km to Town Center',
                title: 'Strow Cat',
                location: 'Da Nang, VietNam',
                rooms: 'Rooms avaible: 375',
            },
            {
                img: 'https://cdn.vox-cdn.com/thumbor/_uOGMmZS6g9DxTmS7KynYmyVj4c=/0x0:7808x5506/1400x1050/filters:focal(3246x2374:4494x3622):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68672382/shutterstock_149489132.0.0.jpg',
                reviews: '4.01 (147)',
                distance: '1.2 km to Town Center',
                title: 'Asia Cat',
                location: 'Da Nang, VietNam',
                rooms: 'Rooms avaible: 375',
            },
            {
                img: 'https://cdn.vox-cdn.com/thumbor/_uOGMmZS6g9DxTmS7KynYmyVj4c=/0x0:7808x5506/1400x1050/filters:focal(3246x2374:4494x3622):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68672382/shutterstock_149489132.0.0.jpg',
                reviews: '4.01 (147)',
                distance: '1.2 km to Town Center',
                title: 'So Deep',
                location: 'Da Nang, VietNam',
                rooms: 'Rooms avaible: 375',
            },
            {
                img: 'https://cdn.vox-cdn.com/thumbor/_uOGMmZS6g9DxTmS7KynYmyVj4c=/0x0:7808x5506/1400x1050/filters:focal(3246x2374:4494x3622):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68672382/shutterstock_149489132.0.0.jpg',
                reviews: '4.01 (147)',
                distance: '1.2 km to Town Center',
                title: 'So Deep',
                location: 'Da Nang, VietNam',
                rooms: 'Rooms avaible: 375',
            },
        ],
    });
    const renderDataView = (arr) => {
        return arr.map((item, index) => {
            return (
                <div className='explore-item bg-white rounded-[12px] relative' key={index}>
                    <img className='ml-4 mt-4' src={item.img} alt='' />
                    <h5 className='mx-6 my-2 '>
                        <i className='bx bxs-star text-[#ffd166]'></i>
                        {item.reviews}
                    </h5>
                    <span className='ml-6 font-bold'>
                        {item.title}
                        <button className='absolute top-[13.5rem] right-4 rounded-[5px] w-14 h-8 bg-[#d6e1ff] text-[#4479ff] font-bold'>
                            $210
                        </button>
                    </span>
                    <div className='mx-6 mt-2'>{item.distance}</div>
                    <div className='mx-6 mt-3'>
                        <i className='bx bx-location-plus mr-1 text-20'></i>
                        {item.location}
                    </div>
                    <div className='mx-6 mt-2'>
                        <i className='bx bx-building-house mr-1 text-20'></i>
                        {item.rooms}
                    </div>
                </div>
            );
        });
    };
    return (
        <div className='explore-main ml-[160px] mb-20'>
            <div className='mb-2'>
                <h3 className='font-semibold text-48 mb-0'>Explore The World</h3>
                <span>12,345 beautiful places to go</span>
            </div>
            <div className='explore-main mt-4 mr-40'>
                <div className='explore-list'>{renderDataView(state.dataMix.slice(0, 4))}</div>
            </div>
        </div>
    );
}

export default Explore;
