'use client'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import Navbar from './Navbar';

const NavigationMobile = ({ data }) => {
    const [toggleNavbar, setToggleNavbar] = useState(false)

    const handleToggleMobile = () => {
        setToggleNavbar(prev => !prev)
    }

    return (
        <div className='lg:hidden'>
            <button
                className="text-3xl lg:hidden"
                onClick={handleToggleMobile}
            >
                <AiOutlineMenu />
            </button>
            <Navbar data={data} className={`absolute left-0 right-0 ${toggleNavbar ? 'translate-y-0' : '-translate-y-96'} transition-all duration-300 w-full bg-teal-500 px-10`} />
        </div>
    )
}

export default NavigationMobile