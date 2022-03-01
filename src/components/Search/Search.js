import React, { useState } from 'react';

function Search() {
    const [state, setState] = useState({
        dataMix: [
            {
                img: 'https://upload.wikimedia.org/wikipedia/commons/8/88/ThienMuPagoda.jpg',
                destination: '66 Destinations',
                hot: '',
                title: 'Thien Mu Pagoda, Hue',
            },
            {
                img: 'https://www.pullman-danang.com/wp-content/uploads/sites/86/2019/05/DJI_0004.jpg',
                destination: '66 Destinations',
                hot: '',
                title: 'Gold Bridge, Da Nang',
            },
            {
                img: 'https://phongnhaexplorer.com/wp-content/uploads/bien-da-nhay.png',
                destination: '66 Destinations',
                hot: 'HOT',
                title: 'Da Nhay Beach, Quang Binh',
            },
            {
                img: 'https://nld.mediacdn.vn/2019/4/21/a10-15558136492581357017234.jpg',
                destination: '66 Destinations',
                hot: '',
                title: 'Truong Tien Bridge, Hue',
            },
            {
                img: 'https://nld.mediacdn.vn/291774122806476800/2021/12/20/7-cai-nhat-cua-phong-nha-ke-bang-1639936654793597781412.jpg',
                destination: '66 Destinations',
                hot: '',
                title: 'Phong Nha - Ke Bang, Quang Binh',
            },
            {
                img: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/hoi-an-quang-nam-vntrip.jpg',
                destination: '66 Destinations',
                hot: '',
                title: 'Pho Co Hoi An, Da Nang',
            },
            {
                img: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/2-1-e1501974710149.png',
                destination: '66 Destinations',
                hot: '',
                title: 'Thanh Dia My Son, Quang Nam',
            },
            {
                img: 'https://danangaz.com/wp-content/uploads/2018/06/photo-1-1527813223140381050515-min.jpg',
                destination: '66 Destinations',
                hot: '',
                title: 'Than Tai Mountain, Da Nang',
            },
            {
                img: 'https://dacotours.com/wp-content/uploads/2019/10/dai-noi-hue.jpg',
                destination: '66 Destinations',
                hot: '',
                title: 'Dai Noi, Hue',
            },
        ],
    });
    const renderDataView = (arr) => {
        return arr.map((item, index) => {
            return (
                <div className='trip-item zoom' key={index}>
                    <div className='bg-[#f6f7f9] rounded-[10px] pt-[10px] pb-2 relative hover:bg-white border-2'>
                        <img src={item.img} alt='' />
                        <h5 className='mx-6 mt-2 font-bold'>{item.title}</h5>
                        <span className='mx-6'>{item.destination}</span>
                        <div
                            className='bg-[red] flex items-center justify-center absolute text-white w-[40px] h-[30px] text-14 top-[10px] right-[30px]'
                            style={{ display: `${item.hot.length > 0 ? 'flex' : 'none'}` }}
                        >
                            {item.hot}
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className='bg-[#f6f7f9]'>
            <div className='title-search flex justify-center items-center mt-[100px] '>
                <h3 className='font-semibold text-48'>Search a best place in the world</h3>
                <span className='text-16 w-[700px] text-center'>
                    Whether you're looking for places for a vacation. We are here to Guide you about
                    the details you need to check in and ease your trips in advance
                </span>
            </div>

            <div className='trip-list-main'>
                <div className='trip-list'>{renderDataView(state.dataMix.slice(0, 8))}</div>
            </div>
        </div>
    );
}

export default Search;
