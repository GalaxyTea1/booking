import React, { useState } from 'react';

function Passion() {
    const [state, setState] = useState({
        dataMix: [
            {
                img: 'https://cdn.vox-cdn.com/thumbor/_uOGMmZS6g9DxTmS7KynYmyVj4c=/0x0:7808x5506/1400x1050/filters:focal(3246x2374:4494x3622):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68672382/shutterstock_149489132.0.0.jpg',
                star: '4.8 star (122 reviewer)',
                title: 'Strow Cat',
            },
            {
                img: 'https://cdn.vox-cdn.com/thumbor/_uOGMmZS6g9DxTmS7KynYmyVj4c=/0x0:7808x5506/1400x1050/filters:focal(3246x2374:4494x3622):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68672382/shutterstock_149489132.0.0.jpg',
                star: '4.8 star (122 reviewer)',
                title: 'Asia Cat',
            },
            {
                img: 'https://cdn.vox-cdn.com/thumbor/_uOGMmZS6g9DxTmS7KynYmyVj4c=/0x0:7808x5506/1400x1050/filters:focal(3246x2374:4494x3622):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68672382/shutterstock_149489132.0.0.jpg',
                star: '4.8 star (122 reviewer)',
                title: 'So Deep',
            },
            {
                img: 'https://cdn.vox-cdn.com/thumbor/_uOGMmZS6g9DxTmS7KynYmyVj4c=/0x0:7808x5506/1400x1050/filters:focal(3246x2374:4494x3622):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68672382/shutterstock_149489132.0.0.jpg',
                star: '4.8 star (122 reviewer)',
                title: 'So Deep',
            },
        ],
    });
    const renderDataView = (arr) => {
        return arr.map((item, index) => {
            return (
                <div
                    className='passion-item bg-[#f6f7f9] rounded-[10px] pt-[10px] pb-2 relative'
                    key={index}
                >
                    <img src={item.img} alt='' />
                    <h5 className='mx-4 font-bold text-24 absolute text-white w-[120px] h-[40px] top-[400px] left-[30px]'>
                        {item.title}
                    </h5>
                    <span className='mx-4 absolute text-white w-[220px] h-[40px] top-[440px] left-[30px]'>
                        <i className='bx bxs-star text-[#ffd166] mt-1'></i>
                        {item.star}
                    </span>
                </div>
            );
        });
    };
    return (
        <div className='passion-main-container ml-[160px] mb-10'>
            <div>
                <h3 className='font-semibold text-48 mb-0'>Travel your passions</h3>
                <span>Most Brilliant resons Entrada should be your one-stop-shop!</span>
            </div>
            <div className='passion-main mr-40'>
                <div className='passion-list'>{renderDataView(state.dataMix.slice(0, 4))}</div>
            </div>
        </div>
    );
}

export default Passion;
