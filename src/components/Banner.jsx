import React from 'react'
import IconRatin from "../assets/rating.png"
import IconRatinHalf from "../assets/rating-half.png"
import ImgTemp from "../assets/temp-1.jpeg"
import IconPaly from "../assets/play-button.png";



const Banner = () => {
    return (
        <div className='w-full h-[600px] bg-banner bg-center
        bg-no-repeat bg-cover relative'>
            <div className='absolute w-full h-full top-0 left-0 bg-black opacity-40' />


            <div className='w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20'>
                <div className='flex flex-col gap-y-4 items-baseline  w-[50%]'>
                    <div>
                        <p className='text-white 
                    bg-gradient-to-r from-red-600 to-red-300 py-2 px-3 text-md'>TV Show</p>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <h2 className='text-white text-[40px] font-bold'>Nghe nói em thích tôi</h2>
                        <div className='flex space-x-3 items-center'>
                            <img className='w-8 h-8' src={IconRatin} alt="rating" />
                            <img className='w-8 h-8' src={IconRatin} alt="rating" />
                            <img className='w-8 h-8' src={IconRatin} alt="rating" />
                            <img className='w-8 h-8' src={IconRatin} alt="rating" />
                            <img className='w-8 h-8' src={IconRatinHalf} alt="rating" />
                        </div>
                        <p className='text-white inlk'>Hình nền sẽ được phóng to/thu nhỏ sao cho phủ kín toàn bộ phần tử.
                            Nếu tỷ lệ khung hình của ảnh không trùng với phần tử, ảnh có thể bị cắt ở các cạnh.
                            Phù hợp dùng khi bạn muốn ảnh nền chiếm toàn bộ vùng hiển thị, ví dụ như background header, hero banner...
                        </p>
                        <div className='flex space-x-4'>
                            <button className='text-white px-3 py-2 bg-black font-bold text-sm'>Chi tiết</button>
                            <button className='text-white px-3 py-2 bg-red-700 font-bold text-sm'>Xem phim</button>

                        </div>
                    </div>
                </div>

                <div className='w-[50%] flex justify-center'>
                    <div className='w-[300px] h-[400px] relative group cursor-pointer'>
                        <img
                            className='h-full w-full object-cover'
                            src={ImgTemp} alt="" />

                        <div className='h-full w-full absolute 
                        top-0 left-0 flex items-center justify-center
                        backdrop-blur-sm opacity-0 group-hover:opacity-100
                        transition-opacity duration-500 ease-in-out
                        '>
                            <img src={IconPaly} alt=""
                                className='w-16 h-16'
                            />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Banner