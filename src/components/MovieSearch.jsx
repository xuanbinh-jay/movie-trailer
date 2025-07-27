import React, { useContext, useState } from 'react'
import { MovieContext } from '../context/MovieProvide.jsx'
const MovieSearch = ({ title, data }) => {
    const { handleTrailer } = useContext(MovieContext);
    console.log(handleTrailer);

    return (
        <div className='text-white p-10 mb-10'>
            <h2 className='uppercase text-xl  mb-4'>
                {title}
            </h2>

            <div className='grid grid-cols-2 gap-4 sm:grid-cols-2  lg:grid-cols-4'>
                {data && data.length > 0 && data.map((item) => (
                    <div key={item.id} className='w-[200px] h-[300px] bg-red-300 relative group'
                        onClick={() => handleTrailer(item.id)}
                    >
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
            </div>
        </div>
    )
}

export default MovieSearch