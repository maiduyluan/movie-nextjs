'use client'
import CardFilm from '@/components/trangchu/CardFilm'
import React from 'react'
import { useEffect, useState } from 'react'
import customAxios from '@/utils/customAxios'
import NumberPage from '@/components/numberpage/NumberPage'

const Page = () => {
    const [data, setData] = useState([])
    const [numberPage, setNumberPage] = useState(1)

    useEffect(() => {
        customAxios(`/3/movie/upcoming?language=en-US&page=${numberPage}`).then((data) => setData(data.results))
    }, [numberPage])

    const handlePaganation = (id) => {
        setNumberPage(id)
    }

    return (
        <div className='xl:w-10/12 md:w-8/12 w-full'>
            <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-5 p-5'>
                {data.map((item, index) => (
                    <CardFilm
                        key={index}
                        imageURL={item?.poster_path}
                        title={item?.title}
                        id={item?.id}
                    />
                ))}
            </div>

            <NumberPage onHandlePagination={handlePaganation} />
        </div>
    )
}

export default Page
