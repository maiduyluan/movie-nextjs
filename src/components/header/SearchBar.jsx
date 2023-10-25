import React from 'react'
import { useState, useEffect } from 'react'
import customAxios from '@/utils/customAxios'

const SearchBar = () => {
    const [inputNameMovie, setInputNameMovie] = useState('')
    const [nameMovie, setNameMovie] = useState([])

    useEffect(() => {
        customAxios(`/3/search/movie?query=${inputNameMovie}&include_adult=false&language=en-US&page=1`).then((data) => setNameMovie(data))
    }, [inputNameMovie])

    const dataSearch = nameMovie?.results
    

    return (
        <div className='relative xl:w-[400px]'>
            <form>
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                />
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        onChange={(e) =>
                            setInputNameMovie(e.target.value)
                        }
                        type="search"
                        id="default-search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Tìm kiếm tên phim"
                        required=""
                    />
                    <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Tìm
                    </button>
                </div>
            </form>
            {!!inputNameMovie && <div className='absolute left-0 w-full bg-teal-600 p-2 rounded-lg mt-1'>
                <p className='mb-2'>Kết quả tìm kiếm:</p>
                {dataSearch?.map((item, index) => (
                    <div key={index} className='flex border-gray-400 border p-2 mb-2 gap-2 rounded-lg'>
                        <img
                            src={`https://image.tmdb.org/t/p/w300/${item?.poster_path}`}
                            alt="name movie"
                            className='w-[80px] rounded-lg'
                        />
                        <div>
                            <p>{item?.original_title}</p>
                            <p className='line-clamp-4'>{item?.overview}</p>
                        </div>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default SearchBar