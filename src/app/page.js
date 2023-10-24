'use client'
import { useEffect, useState } from 'react'
import customAxios from '@/utils/customAxios'
import Carousel from '@/components/trangchu/Carousel'
import CardFilm from '@/components/trangchu/CardFilm'

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    customAxios('/3/movie/popular?language=en-US&page=1').then((data) => setData(data.results))
  }, [])
  
  return (
    <div className='xl:w-10/12 md:w-8/12 w-full'>
      <Carousel data={data} />
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
    </div>
  )
}
