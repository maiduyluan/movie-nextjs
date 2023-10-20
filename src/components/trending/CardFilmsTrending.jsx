import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const CardFilm = ({ item }) => {

  return (
    <>
        <Link href='/' className='flex w-full h-fulls bg-red-300 rounded-xl  mb-5'>
          <Image
            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
            alt='Killers of the Flower Moon'
            width={150}
            height={150}
            className='object-cover rounded-s-xl'
          />
          <div className='flex-col px-3 mt-3'>
            <div className='font-bold mb-2' >{item.original_title}</div>
            <div className='text-gray-300 text-sm'>lượt xem: {item.popularity}</div>
          </div>
        </Link>
    </>
  )
}
