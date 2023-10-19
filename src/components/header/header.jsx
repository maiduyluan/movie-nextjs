'use client'
import Link from "next/link";
import customAxios from '../../utils/customAxios'
import { useEffect, useState } from 'react'
import NavigationMobile from "./NavigationMobile";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

export default function Header() {

  const [data, setData] = useState([])

  useEffect(() => {
    customAxios('/3/genre/movie/list?language=en').then((data) => setData(data.genres))
  }, [])

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 mb-4 relative z-20">
      <div id="title" className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href='/' className="font-semibold text-3xl tracking-tight">Phimmoichill</Link>
      </div>
     <NavigationMobile data={data} />
     <Navbar data={data} className={`hidden lg:flex lg:items-center`} />
    </nav>

  )
}