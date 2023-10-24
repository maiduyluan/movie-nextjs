import React from 'react'
import { IoMdStar, IoMdStarHalf } from 'react-icons/io'

const InfoFilm = ({data}) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 mb-5'>
        <div>Thể Loại:&ensp;
          {data?.genres?.map((i) => {
            return i.name + ','
          })}
        </div>
        <div>Năm sản xuất: {data?.release_date}</div>
        <div>Quốc gia:&ensp;
          {data?.spoken_languages?.slice(0, 1)?.map((item) => {
            return item.english_name
          })}
        </div>
        <div>Thời lương phim: {data?.runtime} phút</div>
        <div className='flex items-center'>
          <p className='mr-2'>Điểm đánh giá:</p>
          <div className='flex text-xl text-yellow-300'>
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStarHalf />
          </div>
        </div>
      </div>
  )
}

export default InfoFilm