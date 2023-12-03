import Headers from "../Header/Headers"

const MainContent = ({token, setToken, tokenLocalStorage}) =>{
    return(
        <div className="bg-zinc-900 row-span-3 col-span-5 rounded-md">
            <Headers token={token} setToken={setToken} tokenLocalStorage={tokenLocalStorage} />
        </div>
    )
}

export default MainContent