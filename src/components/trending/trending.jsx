'use client'
import { useEffect, useState } from 'react'
import { CardFilm } from './CardFilmsTrending'
import customAxios from '../../utils/customAxios'

export default function Trending() {
    const [data, setData] = useState([])

    useEffect(() => {
        customAxios('/3/trending/movie/day?language=en-US').then((data) => setData(data.results))
    }, [])

    return (
        <div className="flex flex-col item-center xl:w-4/12 md:w-4/12 w-full">
            <h1 className="text-2xl mb-3 font-bold text-white italic">TOP TRENDING</h1>
            {data.slice(0,6).map((item, index) => (
                <CardFilm 
                    key={index} 
                    imageUrl={item?.poster_path}
                    title={item?.original_title}
                    views={item?.popularity}
                    overview={item?.overview}
                    id={item?.id}
                />
            ))}
        </div>

    )
}