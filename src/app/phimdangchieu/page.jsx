'use client'
import CardFilmTrangChu from '@/components/trangchu/CardFilmTrangChu'
import React from 'react'
import { useEffect, useState } from 'react'
import customAxios from '@/utils/customAxios'

const Page = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        customAxios('/3/movie/popular?language=en-US&page=2').then((data) => setData(data.results))
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
                    />
                ))}
            </div>
        </div>
    )
}

export default Page
