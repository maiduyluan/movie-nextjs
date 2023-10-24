'use client'
import React from 'react'
import Image from 'next/image'
import customAxios from '@/utils/customAxios'
import CardCeleb from '@/components/noidungphim/CardCeleb'
import InfoFilm from '@/components/noidungphim/InfoFilm'
import OverviewFilm from '@/components/noidungphim/OverviewFilm'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const ContentParams = ({ params }) => {
  const [data, setData] = useState()

  useEffect(() => {
    customAxios(`/3/movie/${params.slug}?language=en-US&append_to_response=videos,credits,similar`).then((data) => setData(data))
  }, [])

  console.log(data)

  const cardCelebs = data?.credits?.cast?.slice(0, 20)

  return (
    <div className='xl:w-10/12 md:w-8/12 w-full mb-5'>
      <div
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${data?.backdrop_path}')`
        }}
        className='relative w-full h-[550px] bg-center bg-no-repeat bg-cover mb-5'
      >
        <div className='absolue w-full h-full bg-black opacity-60'></div>
        <div className=' md:flex-row flex-col  absolute md:items-end items-starts left-0 bottom-0 lg:px-[100px] md:px-[50px] px-5 py-10 lg:w-[auto] md:gap-5'>
          <Image
            src={`https://image.tmdb.org/t/p/w300/${data?.poster_path}`}
            alt={`Loading...`}
            width={150}
            height={150}
            className=' md:w-[200px] w-300px h-full md:block hidden'
          />
          <div>
            <div className='font-bold mb-2'>{data?.title}</div>
            <div className='line-clamp-3 mb-5'>{data?.overview}</div>
            <div>
              <Link href={`/watch-movie/${data?.id}`} className='w-[90px] h-10 bg-[red] transition-[0.5s] duration-[ease] hover:bg-[orange] mb-2 mr-5 rounded-md p-2'>Trailer</Link>
              <Link href={`/watch-movie/${data?.id}`} className='w-[100px] h-10 bg-[red] transition-[0.5s] duration-[ease] hover:bg-[orange] mb-2 rounded-md p-2'>Xem phim</Link>
            </div>
          </div>
        </div>
      </div>

      <h1 className='font-bold mb-5'>Credits</h1>
      <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 w-full gap-5 mb-5'>
        {cardCelebs?.slice(0, 6).map((item, index) => (
          <CardCeleb
            key={index}
            imgUrl={item?.profile_path}
            name={item?.original_name}
          />
        ))}
      </div>

      <hr className='mb-5'/>
      <InfoFilm data={data}/>
      <OverviewFilm data={data}/>
    </div>
  )
}

export default ContentParams