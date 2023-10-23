'use client'
import React from 'react'
import Image from 'next/image'
import customAxios from '@/utils/customAxios'
import { useEffect, useState } from 'react'
import CardCeleb from '@/components/noidungphim/CardCeleb'
import { IoMdStar, IoMdStarHalf } from 'react-icons/io'

const ContentParams = ({ params }) => {
  const [data, setData] = useState([])

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
        <div className='absolute top-[50%] w-full z-10 flex justify-between sm:px-0 px-5'>
        </div>
        <div className='absolue w-full h-full bg-black opacity-60'></div>
        <div className=' md:flex-row flex-col  absolute md:items-end items-starts left-0 bottom-0 lg:px-[100px] md:px-[50px] px-5 py-10 lg:w-[auto] md:gap-5'>
          <Image
            src={`https://image.tmdb.org/t/p/w300/${data?.poster_path}`}
            alt={`${data?.title}`}
            width={150}
            height={150}
            className=' md:w-[200px] w-300px h-full md:block hidden'
          />
          <div>
            <div className='font-bold mb-2'>{data?.title}</div>
            <div className='line-clamp-3 mb-2'>{data?.overview}</div>
            <div>
              <button className='w-[90px] h-10 bg-[red] transition-[0.5s] duration-[ease] hover:bg-[orange] mb-2 mr-5 rounded-md'>Trailer</button>
              <button className='w-[100px] h-10 bg-[red] transition-[0.5s] duration-[ease] hover:bg-[orange] mb-2 rounded-md'>Xem phim</button>
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

      <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 mb-5'>
        <div>Thể Loại:&ensp;
          {data?.genres?.map((i) => {
            return i.name + ','
          })}
        </div>
        <div>Năm sản xuất: {data?.release_date}</div>
        <div>Quốc gia:&ensp;
          {data?.spoken_languages?.slice(0, 1)?.map((item) => {
            return item.english_name
          })}
        </div>
        <div>Thời lương phim: {data?.runtime} phút</div>
        <div className='flex items-center'>
          <p className='mr-2'>Điểm đánh giá:</p>
          <div className='flex text-xl text-yellow-300'>
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStarHalf />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1'>
          <div className='h-[50px] bg-teal-500 text-xl flex justify-center items-center font-bold'>Nội dung phim</div>
          <div className='bg-gray-500 p-2'>{data?.overview}</div>
      </div>
    </div>
  )
}

export default ContentParams