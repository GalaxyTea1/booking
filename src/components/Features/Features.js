import React, { useState } from 'react';

function Features() {
    const [state, setState] = useState({
        dataMix: [
            {
                img: 'https://upload.wikimedia.org/wikipedia/commons/8/88/ThienMuPagoda.jpg',
                activities: '269 Activities',
                star: '3.5',
                title: 'Gray Cat',
            },
            {
                img: 'https://www.pullman-danang.com/wp-content/uploads/sites/86/2019/05/DJI_0004.jpg',
                activities: '269 Activities',
                star: '3.5',
                title: 'Moon Eyes Cat ',
            },
            {
                img: 'https://phongnhaexplorer.com/wp-content/uploads/bien-da-nhay.png',
                activities: '269 Activities',
                star: '3.5',
                title: 'Strow Cat',
            },
            {
                img: 'https://nld.mediacdn.vn/2019/4/21/a10-15558136492581357017234.jpg',
                activities: '269 Activities',
                star: '3.5',
                title: 'Asia Cat',
            },
            {
                img: 'https://nld.mediacdn.vn/291774122806476800/2021/12/20/7-cai-nhat-cua-phong-nha-ke-bang-1639936654793597781412.jpg',
                activities: '269 Activities',
                star: '3.5',
                title: 'So Deep',
            },
            {
                img: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/hoi-an-quang-nam-vntrip.jpg',
                activities: '269 Activities',
                star: '3.5',
                title: 'House Cat',
            },
        ],
    });

    const renderDataView = (arr) => {
        return arr.map((item, index) => {
            return (
                <div className='features-item bg-[#f6f7f9] relative' key={index}>
                    <img src={item.img} alt='' />
                    <div className='bg-white font-bold opacity-80 rounded-[15px] flex items-center justify-center absolute text-[red] w-[100px] h-[40px] text-14 top-[30px] left-[40px]'>
                        {item.star}
                    </div>
                    <h5 className='mx-4 font-bold text-24 absolute text-white w-[250px] h-[40px] top-[80%] left-[3%]'>
                        {item.title}
                    </h5>
                    <span className='mx-4 absolute text-white w-[250px] h-[40px] top-[90%] left-[3%]'>
                        {item.activities}
                    </span>
                </div>
            );
        });
    };
    return (
        <div className='features-main mt-[100px] ml-[160px] mb-10'>
            <div className='mb-6'>
                <h3 className='font-semibold text-48 mb-0'>Featured Destinations</h3>
                <span>Popular destination open to visitors from Indonesia</span>
            </div>
            <div className='features-main'>
                <div className='features-list'>{renderDataView(state.dataMix.slice(0, 6))}</div>
            </div>
        </div>
    );
}

export default Features;
