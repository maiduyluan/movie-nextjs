'use client'
import Link from 'next/link'

const CardCeleb = ({ imgUrl, name }) => {
    return (
        <div>
            <div className='relative '>
                <img src={`https://image.tmdb.org/t/p/w300${imgUrl}`} alt={name} />
                <p className='absolute flex items-center justify-center bottom-0 text-sm bg-black 
                  bg-opacity-70 w-full'>{name}</p>
            </div>
        </div>
    )
}

export default CardCeleb