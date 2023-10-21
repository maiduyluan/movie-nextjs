'use client'
import { useEffect, useState } from 'react'
import Carousel from '@/modules/trangchu/Carousel'
import customAxios from '@/utils/customAxios'

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    customAxios('/3/movie/popular?language=en-US&page=1').then((data) => setData(data.results))
  }, [])
  
  return (
    <main className='xl:w-10/12 md:w-8/12 w-full'>
      <Carousel data={data} />
    </main>
  )
}
