import React, { useState } from 'react';

function Trend() {
    const [state, setState] = useState({
        dataMix: [
            {
                img: 'https://cdn.vox-cdn.com/thumbor/_uOGMmZS6g9DxTmS7KynYmyVj4c=/0x0:7808x5506/1400x1050/filters:focal(3246x2374:4494x3622):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68672382/shutterstock_149489132.0.0.jpg',
                reviews: '4.01 (147)',
                distance: '1.2 km to Town Center',
                title: 'Strow Cat',
                price: '$235/night',
            },
            {
                img: 'https://cdn.vox-cdn.com/thumbor/_uOGMmZS6g9DxTmS7KynYmyVj4c=/0x0:7808x5506/1400x1050/filters:focal(3246x2374:4494x3622):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68672382/shutterstock_149489132.0.0.jpg',
                reviews: '4.01 (147)',
                distance: '1.2 km to Town Center',
                title: 'Asia Cat',
                price: '$235/night',
            },
            {
                img: 'https://cdn.vox-cdn.com/thumbor/_uOGMmZS6g9DxTmS7KynYmyVj4c=/0x0:7808x5506/1400x1050/filters:focal(3246x2374:4494x3622):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68672382/shutterstock_149489132.0.0.jpg',
                reviews: '4.01 (147)',
                distance: '1.2 km to Town Center',
                title: 'So Deep',
                price: '$235/night',
            },
            {
                img: 'https://cdn.vox-cdn.com/thumbor/_uOGMmZS6g9DxTmS7KynYmyVj4c=/0x0:7808x5506/1400x1050/filters:focal(3246x2374:4494x3622):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68672382/shutterstock_149489132.0.0.jpg',
                reviews: '4.01 (147)',
                distance: '1.2 km to Town Center',
                title: 'So Deep',
                price: '$235/night',
            },
        ],
    });
    const renderDataView = (arr) => {
        return arr.map((item, index) => {
            return (
                <div className='trend-item bg-white rounded-[12px] relative flex' key={index}>
                    <img className='ml-4 mt-4' src={item.img} alt='' />
                    <span className='font-bold text-20 w-48 h-6 mt-4 mb-2 '>{item.title}</span>
                    <h5 className='my-2 w-48 h-6'>
                        <i className='bx bxs-star text-[#ffd166]'></i>
                        {item.reviews}
                    </h5>

                    <div className='font-bold'>{item.price}</div>

                    <button className='absolute top-[16rem] right-40 rounded-[5px] w-24 h-8 bg-[#4479ff] text-white font-bold'>
                        $210
                    </button>
                </div>
            );
        });
    };
    return (
        <div className='trend-main-container ml-[160px] bg-[rgb(245,245,245)] mb-10'>
            <div className='text-center mr-40'>
                <h3 className='font-semibold text-48 mb-0'>Trending cities</h3>
                <p className=''>The most searched for cities on TripGuide</p>
            </div>
            <div className='trend-main mt-2 mr-40'>
                <div className='trend-list'>{renderDataView(state.dataMix.slice(0, 4))}</div>
            </div>
        </div>
    );
}

export default Trend;
