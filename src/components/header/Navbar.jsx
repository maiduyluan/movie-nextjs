'use client'
import React from 'react'
import Link from "next/link";
import SearchBar from './SearchBar';
import { useState } from 'react'
import years from '@/utils/yearsArr'

const Navbar = ({ data, className }) => {
    const [showcategory, setShowCategory] = useState(false)
    const [showyears, setShowYears] = useState(false)

    return (
        <div className={className}>
            <div className="text-sm lg:flex-grow">
                <button
                    value="category"
                    className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-red-300 mr-4"
                    onClick={() => setShowCategory(!showcategory)}
                >
                    Thể Loại
                </button>
                <div className=" absolute flex-col bg-teal-600 z-10 rounded-lg">
                    {showcategory && data?.map((item, index) => (
                        <Link className="hover:text-red-300 w-40 text-lg px-2.5" href={`/category/${item.id}`} key={index}>
                            {item.name}
                        </Link>
                    ))}
                </div>
                <Link
                    href="/phimdangchieu"
                    className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-red-300 mr-4"
                >
                    Đang Chiếu
                </Link>
                <Link
                    href="/phimsapchieu"
                    className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-red-300 mr-4"
                >
                    Sắp Chiếu
                </Link>
                <Link
                    href="/phimphobien"
                    className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-red-300 mr-4"
                >
                    Phổ Biến
                </Link>
                <div
                    value="year"
                    className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white mr-4 cursor-pointer"
                    onClick={() => setShowYears(!showyears)}
                >
                    Năm
                    {showyears &&
                        <div className="absolute flex-col bg-teal-600 z-10 rounded-lg">
                            {years.map((item, index) => (
                                <Link href={`/years/${item.name}`} key={index} className="hover:text-red-300 w-20 text-lg text-center">{item.name}</Link>
                            ))}
                        </div>
                    }
                </div>
            </div>
            <SearchBar />
        </div>
    )
}

export default Navbar