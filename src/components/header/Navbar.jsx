'use client'
import React from 'react'
import Link from "next/link";
import SearchBar from './SearchBar';
import { useState } from 'react'

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
                <div className=" absolute flex-col bg-teal-300 z-10 ">
                    { showcategory && data?.map((item, index) => (
                        <Link className= "hover:text-red-300 w-40 text-lg px-2.5" href = {`/category/${item.id}`} key={index}>
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
            <SearchBar />
        </div>
    )
}

export default Navbar