'use client'
import Link from 'next/link'

const CardFilmTrangChu = ({ imageURL, title }) => {

  return (
    <Link href='/'>
      <div className='relative '>
        <img src={`https://image.tmdb.org/t/p/w300${imageURL}`} alt=""></img>
        <p className='absolute flex items-center justify-center bottom-0 text-sm bg-black bg-opacity-70 lg:h-[70px] md:h-[90px] h-[70px] w-full'>{title}</p>
      </div>
    </Link>
  )
}

export default CardFilmTrangChu 