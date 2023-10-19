'use client'
import Link from "next/link";
import customAxios from '../../utils/customAxios'
import { useEffect, useState } from 'react'

export default function Header() {

  const [data, setData] = useState([])
  const [showcategory, setShowCategory] = useState(false)
  const [showyears, setShowYears] = useState(false)

  useEffect(() => {
    customAxios('/3/genre/movie/list?language=en').then((data) => setData(data.genres))
  }, [])

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 container mx-auto">
      <div id="title" className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href='/' className="font-semibold text-3xl tracking-tight">Phimmoichill</Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <button
            id="category"
            className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-red-300 mr-4"
            onClick={() => setShowCategory(!showcategory)}
          >
            Thể Loại
          </button>
          <div className=" absolute flex-col bg-teal-300 z-10">
            {showcategory && data?.map((item, index) => (
              <Link className=" hover:text-red-300 w-40 text-lg px-2.5" href='/' key={index}>
                {item.name}
              </Link>
            ))}
          </div>
          <Link
            href="/"
            className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-red-300 mr-4"
          >
          Đang Chiếu
          </Link>
          <Link
            href="/"
            className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-red-300 mr-4"
          >
          Sắp Chiếu
          </Link>
          <Link
            href="/"
            className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-red-300 mr-4"
          >
          Phổ Biến
          </Link>
          <div
            id="year"
            className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white mr-4 cursor-pointer"
            onClick={() => setShowYears(!showyears)}
          >
            Năm
            { showyears &&
              <div className="absolute flex-col bg-teal-300 z-10">
              <button className="hover:text-red-300 w-20 text-lg ">2016</button>
              <button className="hover:text-red-300 w-20 text-lg ">2017</button>
              <button className="hover:text-red-300 w-20 text-lg ">2018</button>
              <button className="hover:text-red-300 w-20 text-lg ">2019</button>
              <button className="hover:text-red-300 w-20 text-lg ">2020</button>
              <button className="hover:text-red-300 w-20 text-lg ">2021</button>
              <button className="hover:text-red-300 w-20 text-lg ">2022</button>
              <button className="hover:text-red-300 w-20 text-lg ">2023</button>
              </div>
            }
          </div>
        </div>
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
      </div>
    </nav>

  )
}