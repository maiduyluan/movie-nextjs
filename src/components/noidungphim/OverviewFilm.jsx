import React from 'react'

const OverviewFilm = ({data}) => {
  return (
    <div className='grid grid-cols-1'>
          <div className='h-[50px] bg-teal-500 text-xl flex justify-center items-center font-bold'>Nội dung phim</div>
          <div className='bg-gray-500 p-2'>{data?.overview}</div>
      </div>
  )
}

export default OverviewFilm