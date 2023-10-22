import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const CardFilm = ({ imageUrl, title, views, overview }) => {

  return (
    <>
        <Link href='/' className='flex  w-auto h-auto rounded-xl mb-5 bg-orange-300'>
          <Image
            src={`https://image.tmdb.org/t/p/w300${imageUrl}`}
            alt='Killers of the Flower Moon'
            width={100}
            height={100}
            className='object-cover rounded-s-xl w-50 h-auto'
          />
          <div className='flex-col px-3 mt-3'>
            <div className='font-bold mb-2' >{title}</div>
            <div className='line-clamp-2 md:line-clamp-3 text-sm'>{overview}</div>
            <div className='text-gray-300 text-sm'>lượt xem: {views}</div>
          </div>
        </Link>
    </>
  )
}
