'use client'
import ReactPlayer from 'react-player/youtube'
import customAxios from '@/utils/customAxios'
import CardCeleb from '@/components/noidungphim/CardCeleb'
import InfoFilm from '@/components/noidungphim/InfoFilm'
import OverviewFilm from '@/components/noidungphim/OverviewFilm'
import { CgMenuLeft } from 'react-icons/cg'
import { useEffect, useState } from 'react'

const ContentParams = ({ params }) => {
    const [data, setData] = useState({})
    const [episode, setEpisode] = useState(0)

    useEffect(() => {
        customAxios(`/3/movie/${params.slug}?language=en-US&append_to_response=videos,credits,similar`).then((data) => setData(data))
    }, [])

    const cardCelebs = data?.credits?.cast?.slice(0, 20)
    const arrEp = data?.videos?.results

    return (
        <div className='xl:w-10/12 md:w-8/12 w-full mb-5'>
            <div className='relative mb-5'>
                {arrEp && < div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        url={`https://www.youtube.com/watch?v=${arrEp[episode]?.key}`}
                        width='100%'
                        height='550px'
                        controls={true}
                    />
                </div>}
            </div>

            <button className='flex gap-1 items-center bg-green-500 py-1 px-2 rounded-lg mb-5 text-sm'>
                <CgMenuLeft />
                <p>Sever #1</p>
            </button>

            <div className='grid grid-cols-8  md:grid-cols-10'>
                {arrEp?.map((i, index) => (
                    <button
                        key={i?.key}
                        onClick={() => setEpisode(index)}
                        className='p-2 bg-teal-500 m-1 rounded-md'
                    >{index}</button>
                ))}
            </div>

            <h1 className='font-bold mb-5'>Credits</h1>
            <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 w-full gap-5 mb-5'>
                {cardCelebs?.slice(0, 6).map((item, index) => (
                    <CardCeleb
                        key={index}
                        imgUrl={item?.profile_path}
                        name={item?.original_name}
                    />
                ))}
            </div>

            <hr className='mb-5' />
            <InfoFilm
                data={data}
            />
            <OverviewFilm
                data={data}
            />
        </div>
    )
}

export default ContentParams