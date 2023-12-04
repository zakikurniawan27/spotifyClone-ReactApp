import { useEffect } from "react"

const ButtonLogin = ({setToken, tokenLocalStorage}) =>{
    

    const getToken = () => {
        let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
        let token = urlParams.get('access_token'); 
    }

    useEffect(() => {
        const hash = window.location.hash
        

        getToken()
        
        if(!tokenLocalStorage && hash){
            tokenLocalStorage = hash.substring(1).split("&").find(element => element.startsWith("access_token")).split("=")[1]
            
            window.location.hash = ""
            window.localStorage.setItem("token",tokenLocalStorage)
            setToken(tokenLocalStorage)
        }
    },[])

    return (
        <div className="w-48 h-8 bg-green-600 rounded-md text-lg font-semibold hover:shadow-sm hover:shadow-slate-300 cursor-pointer"
        >
            <a href=
            {`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&response_type=token`}>
                <p className="text-white text-center ">Login</p>
            </a>            
        </div>
    )
}

export default ButtonLogin