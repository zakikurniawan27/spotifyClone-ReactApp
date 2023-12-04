import Headers from "../Header/Headers"
import ButtonLogin from "../button/ButtonLogin"
import { me } from "../../redux/Action/authActions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const MainContent = ({setToken, tokenLocalStorage}) =>{
    
    const {token, user} = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(me())
    },[dispatch])
    return(
        <>
        {!token ? 
        <div className="bg-zinc-900 h-full rounded-md">
            <div className="grid grid-rows-1 text-white gap-10 my-20 place-items-center">
                <h1 className="text-5xl font-semibold"> Selamat datang di 
                <span className="text-green-600 pl-1">SPOTIFY CLONE</span> </h1>
                <p className="text-center text-lg w-2/3">Spotify Clone React App adalah sebuah aplikasi web yang dibangun menggunakan teknologi React. 
                    Aplikasi ini merupakan replika dari aplikasi streaming musik Spotify. 
                    Dalam aplikasi ini, pengguna dapat mencari dan memutar lagu, membuat daftar putar pribadi, 
                    mendapatkan rekomendasi musik, dan berinteraksi dengan pengguna lain melalui fitur sosial. 
                    Spotify Clone React App dirancang untuk memberikan pengalaman serupa dengan Spotify asli. 
                </p>
                <p className="text-xl font-bold">
                    Untuk Mendengarkan, Masuk Telebih Dahulu
                </p>
                <ButtonLogin token={token} setToken={setToken} tokenLocalStorage={tokenLocalStorage} /> 
            </div>
         </div>
        : 
        <div className="bg-zinc-900 row-span-3 col-span-5 rounded-md">
            <Headers token={token} setToken={setToken} tokenLocalStorage={tokenLocalStorage} />
            <div className="mt-10 ml-10">
                <p className="text-white text-2xl font-semibold">
                    Welcome, {user?.display_name}
                </p>
            </div>
        </div>
        }
        </>
    )
}

export default MainContent