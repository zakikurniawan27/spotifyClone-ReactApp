import ButtonLogin from "../button/ButtonLogin"

const Headers = ({token, setToken, tokenLocalStorage}) =>{

    const logout = () =>{
        localStorage.removeItem("token")
        setToken('')
    }

    return (
        <div className="relative mt-2 flex justify-end mx-5">
            {!token ? 
            <ButtonLogin token={token} setToken={setToken} tokenLocalStorage={tokenLocalStorage} />
            :
            <p className="text-white" onClick={()=> logout()}>Logout</p> 
            }
        </div>
    )
}

export default Headers