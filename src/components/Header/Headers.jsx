import { useEffect, useState } from "react"
import ButtonLogin from "../button/ButtonLogin"

import { useDispatch, useSelector } from "react-redux"
import { me } from "../../redux/Action/authActions"

const Headers = ({setToken, tokenLocalStorage}) =>{

    const [dropDown, setDropDown] = useState(false)
    const { token, user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(me())
    },[token, dispatch])

    const logOut = () =>{
        localStorage.removeItem("token")
        setToken('')
    }
    
    const comDropDownOn = () => {
        setDropDown(true)
    }
    const comDropDownOff = () => {
        setDropDown(false)
    }

    return (
        <div className="mt-2 flex justify-end mx-5">
            {!token ? 
            <ButtonLogin token={token} setToken={setToken} tokenLocalStorage={tokenLocalStorage} />
            :
            <>
                {dropDown === false ? 
                <div className="w-40 h-7 bg-white rounded-md text-lg text-center text-green-600 font-bold cursor-pointer" onClick={()=> comDropDownOn()}>
                   {user.display_name}
                </div>
                :
                <>
                <div className="w-40 h-7 bg-white rounded-md rounded-b-none text-lg text-center text-green-600 font-bold cursor-pointer" onClick={()=> comDropDownOff()}>
                    {user?.display_name}
                </div>
                <div className="absolute top-11">
                    <div className="w-40 h-7 bg-white rounded-md rounded-t-none text-base text-center cursor-pointer" onClick={()=> logOut()}>
                        <p className="text-slate-600">
                            logOut
                        </p>
                    </div>
                </div>
                </>
                }
            </> 
            }
        </div>
    )
}

export default Headers