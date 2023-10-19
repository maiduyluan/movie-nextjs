'use client'
import Link from 'next/link'
import customAxios from '../../utils/customAxios'
import { useEffect, useState } from 'react'
export default function BlogPage() {
    const [data, setData] = useState([])
    useEffect(() => {
        customAxios('/3/movie/popular?language=en-US&page=1').then((data) => console.log('data: ', data))
    }, [])
    return (
        <div>
            <div className="relative rounded-md overflow-hidden sm:w-5/12 md:w-3/12 lg:w-2/12 shadow-md hover:border hover:border-gray-300 hover:shadow-2xl">
  <a href="/movie/575264">
    <div>
      <img
        src="https://image.tmdb.org/t/p/w300/NNxYkU70HPurnNCSiCjYAmacwm.jpg"
        alt="Mission: Impossible - Dead Reckoning Part One"
        className="w-full h-auto"
      />
      <div className="absolute w-full bg-[rgba(0,0,0,0.5)] text-white text-sm text-center opacity-100 transition-opacity duration-[0.3s] ease-[ease-in-out] p-2.5 left-0 bottom-0">
        <h6 className="line-clamp-1">
          Mission: Impossible - Dead Reckoning Part One
        </h6>
        <p className="line-clamp-3 lg:line-clamp-2">
          Ethan Hunt and his IMF team embark on their most dangerous mission
          yet: To track down a terrifying new weapon that threatens all of
          humanity before it falls into the wrong hands. With control of the
          future and the world's fate at stake and dark forces from Ethan's past
          closing in, a deadly race around the globe begins. Confronted by a
          mysterious, all-powerful enemy, Ethan must consider that nothing can
          matter more than his mission—not even the lives of those he cares
          about most.
        </p>
      </div>
    </div>
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-gray-100 opacity-100 hover:opacity-50 transition-all duration-200">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 1024 1024"
        height={50}
        width={50}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z" />
      </svg>
    </div>
  </a>
</div>

        </div>
    )
}
