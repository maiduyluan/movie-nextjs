'use client'
import { useState } from 'react'
import Image from 'next/image'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0)



  const handlePrev = () => {
    setCurrentIndex(curr => curr === 0 ? data?.length - 1 : curr - 1)
  }

  const handleNext = () => {
    setCurrentIndex(curr => curr === data?.length - 1 ? 0 : curr + 1)
  }

  return (
    <div
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${data[currentIndex]?.backdrop_path}')`
      }}
      className='relative w-full h-[500px] bg-center bg-no-repeat bg-cover'
    >
      <div className='absolute top-[50%] w-full z-10 flex justify-between sm:px-0 px-5'>
        <button onClick={handlePrev} className='p-3 text-center text-4xl'><GrFormPrevious /></button>
        <button onClick={handleNext} className='p-3 text-center text-4xl'><GrFormNext /></button>
      </div>
      <div className='absolue w-full h-full bg-black opacity-60'></div>
      <div className=' md:flex-row flex-col  absolute md:items-end items-starts left-0 bottom-0 lg:px-[100px] md:px-[50px] px-5 py-10 lg:w-[auto] md:gap-5'>
        <Image
          src={`https://image.tmdb.org/t/p/w300/${data[currentIndex]?.poster_path}`}
          alt={`${data[currentIndex]?.title}`}
          width={150}
          height={150}
          className=' md:w-[200px] w-300px h-full md:block hidden'
        />
        <div>
          <div className='font-bold mb-2'>{data[currentIndex]?.title}</div>
          <div className='line-clamp-3 mb-2'>{data[currentIndex]?.overview}</div>
          <div>
            <button className='w-[90px] h-10 bg-[red] transition-[0.5s] duration-[ease] hover:bg-[orange] mb-2 mr-5 rounded-md'>Trailer</button>
            <button className='w-[100px] h-10 bg-[red] transition-[0.5s] duration-[ease] hover:bg-[orange] mb-2 rounded-md'>Xem phim</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Carousel
