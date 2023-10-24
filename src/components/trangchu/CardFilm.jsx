import Link from 'next/link'
const CardFilm = ({ id, imageURL, title }) => {
  return (
    <Link href={`/noidungphim/${id}`}>
      <div className='relative'>
        <img src={`https://image.tmdb.org/t/p/w300${imageURL}`} alt="" className='rounded-lg'></img>
        <p className='absolute flex items-center justify-center bottom-0 text-sm bg-black 
        bg-opacity-70 lg:h-[70px] md:h-[90px] h-[70px] w-full'>{title}</p>
      </div>
    </Link>
  )
}

export default CardFilm