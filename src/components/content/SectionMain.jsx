import Headers from "../Header/Headers"
import { me } from "../../redux/Action/authActions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getLimitPlaylist } from "../../redux/Action/playlistActions"
import { getAlbumNew } from "../../redux/Action/albumActions"

const SectionMain = () =>{
    
    const {user} = useSelector((state) => state.auth)
    const {limitPlaylist} = useSelector((state) => state.playlist)
    const {albumNewRelease} = useSelector((state) => state.album)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(me())
        dispatch(getLimitPlaylist())
        dispatch(getAlbumNew())
    },[dispatch])
    return(
        <>
        <div className="bg-zinc-900 row-span-5 col-span-3 rounded-md">
            <Headers />
            <div className="mt-10 ml-10">
                <p className="text-white text-2xl font-semibold">
                    Welcome, {user?.display_name}
                </p>
            </div>
            <div className="grid grid-cols-2.5 gap-2 gap-x-0 place-items-center mt-5 text-white mb-1">
                {limitPlaylist?.items?.map((item, index) => (
                    <div className="bg-zinc-800 rounded-md w-[340px] h-full cursor-pointer hover:bg-zinc-700" key={index}>
                        <div className="grid grid-cols-1.7">
                            <img src={item.images[0].url} width='57' alt="gambar playlist"/>
                            <p className="w-20 pt-5 font-bold">{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-10 ml-10">
                <p className="text-white text-2xl font-semibold">
                    Album terbaru
                </p>
            </div>
            <div className="grid grid-cols-5 place-items-center mt-5 text-white mb-2">
                {albumNewRelease?.albums?.items?.map((i, index) =>(
                    <div className="w-40 h-56 bg-zinc-800 rounded-md shadow-black shadow-md grid place-items-center hover:bg-zinc-700 cursor-pointer">
                        <img src={i.images[0].url} alt="gambar album" width="130"/>
                        <p className="text-base font-semibold">{i.artists[0].name}</p>
                        <p className="text-xs" key={index}>{i.name}</p>
                    </div>
                    
                    
                ))}
            </div>
        </div>
        </>
    )
}

export default SectionMain