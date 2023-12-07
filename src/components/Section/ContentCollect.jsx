import { useEffect } from 'react'
import {BsCollection} from 'react-icons/bs'
import {FaPlus} from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaylist} from '../../redux/Action/playlistActions'

const ContentCollect = () =>{

    const {allPlaylist} = useSelector((state) => state.playlist)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getPlaylist())
    },[dispatch])


    return(
        <div className="bg-zinc-900 row-span-8 h-full rounded-md">
            <div className="flex flex-row gap-3 text-white mt-2 ml-5">
                <div className="basis-11 mt-1">
                    <BsCollection className='text-xl'/>
                </div>
                <div>
                    <p className="text-base font-bold w-[109px]">Koleksi Kamu</p>
                </div>
                <div className="basis-20 mt-0.5 flex justify-end">
                    <p className="text-xl font-bold"> <FaPlus/> </p>
                </div>
            </div>
            <div className='ml-5 mt-2 grid grid-cols-1 gap-2 mt-5 text-white mb-1'>
                {allPlaylist?.items?.map((item, index) => (
                <div className="rounded-md w-54 h-full cursor-pointer mt-2 hover:bg-zinc-800">
                    <div className="grid grid-cols-1.7 pt-2 pl-2" key={index}>
                        <img src={item.images[0].url} width='50' alt="gambar playlist"/>
                        <p className="w-20 pt-5 text-sm font-bold">{item.name}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default ContentCollect