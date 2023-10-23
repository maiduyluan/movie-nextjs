'use client'
import CardFilmTrangChu from '@/components/trangchu/CardFilmTrangChu'
import React from 'react'
import { useEffect, useState } from 'react'
import customAxios from '@/utils/customAxios'

const CategoryParamsPage = ({ params }) => {
    
    const [data, setData] = useState([])

    useEffect(() => {
        customAxios(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=undefined&sort_by=popularity.desc&with_genres=${params.slug}`).then((data) => setData(data.results))
    }, [])

    console.log(data)

    return (
        <div className='xl:w-10/12 md:w-8/12 w-full'>
            <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-5 p-5'>
                {data.map((item, index) => (
                    <CardFilmTrangChu
                        key={index}
                        imageURL={item?.poster_path}
                        title={item?.title}
                        id={item?.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default CategoryParamsPage
