import React, { useContext, useState } from 'react'
import ImgTemp from "../assets/temp-1.jpeg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import { MovieContext } from '../context/MovieProvide.jsx';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};

const MovieList = ({ title, data }) => {
    const { handleTrailer } = useContext(MovieContext);
    return (
        <div className='text-white p-10 mb-10'>
            <h2 className='uppercase text-xl  mb-4'>
                {title}
            </h2>
            <Carousel responsive={responsive} className='flex items-center space-x-4'>
                {data && data.length > 0 && data.map((item) => (
                    <div key={item.id} className='w-[200px] h-[300px] bg-red-300 relative group' onClick={() => handleTrailer(item.id)}>
                        <div className='group-hover:scale-105
                        transition-transform duration-500 w-full h-full cursor-pointer'>
                            <div className='w-full h-full absolute bg-black top-0 left-0 opacity-40'></div>
                            <img src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`} alt={item.title || item.original_title}
                                className='w-full h-full object-cover'
                            />
                            <div className='absolute bottom-4 left-2  '>
                                <p className='uppercase text-md'>{item.title}</p>

                            </div>
                        </div>

                    </div>
                ))}

            </Carousel>
        </div>
    )
}

export default MovieList;