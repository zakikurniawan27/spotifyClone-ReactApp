import Headers from "../Header/Headers"
import { me } from "../../redux/Action/authActions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getFeaturedPlaylistLimit, getLimitPlaylist } from "../../redux/Action/playlistActions"
import { getAlbumNew } from "../../redux/Action/albumActions"

const SectionMain = () =>{
    
    const {user} = useSelector((state) => state.auth)
    const {limitPlaylist} = useSelector((state) => state.playlist)
    const {albumNewRelease} = useSelector((state) => state.album)
    const {featuredPlaylist} = useSelector((state) => state.playlist)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(me())
        dispatch(getLimitPlaylist())
        dispatch(getAlbumNew())
        dispatch(getFeaturedPlaylistLimit())
    },[dispatch])
    return(
        <>
        <div className="bg-zinc-900 row-span-5 col-span-3 rounded-md">
            <Headers />
            <div className="mt-10 ml-10">
                <p className="text-white text-2xl font-semibold">
                    Selamat Datang, {user?.display_name}
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
            <div className="grid grid-cols-6 place-items-center mt-5 text-white mb-2">
                {albumNewRelease?.albums?.items?.map((i, index) =>(
                    <div className="w-36 h-56 bg-zinc-800 rounded-md shadow-black shadow-md hover:bg-zinc-700 cursor-pointer">
                        <article className="ml-[7px] mt-2">
                            <img src={i.images[0].url} alt="gambar album" width="130"/>
                            <p className="text-base font-semibold">{i.artists[0].name}</p>
                            <p className="text-xs" key={index}>{i.name}</p>
                        </article>
                    </div>                    
                ))}
            </div>
            <div className="mt-10 ml-10">
                <p className="text-white text-2xl font-semibold">
                    {featuredPlaylist?.message}
                </p>
            </div>
            <div className="grid grid-cols-6 place-items-center mt-5 text-white mb-2">
                {featuredPlaylist?.playlists?.items?.map((itm, index) =>(
                    <div className="w-36 h-56 bg-zinc-800 rounded-md shadow-black shadow-md hover:bg-zinc-700 cursor-pointer">
                        <article className="ml-[7px] mt-2">
                            <img key={index} src={itm.images[0].url} alt="gambar playlist unggulan" width="130"/>
                            <p className="text-base font-semibold" key={index}>{itm.name}</p>
                            <p className="text-xs line-clamp-2 ">{itm.description}</p>
                        </article>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default SectionMain