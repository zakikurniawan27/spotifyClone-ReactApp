import React from "react"
import ContentLeftOne from "../components/content/ContentLeftOne"
import ContentLeftTwo from "../components/content/ContentLeftTwo"
import MainContent from "../components/content/MainContent"

const Home = ({token, setToken, tokenLocalStorage}) =>{

    const Token = window.localStorage.getItem("token")

    return(
        <>
        <div className="bg-black h-screen">
            {!Token ? 
            <div className="grid grid-rows-1 px-2 pt-20">
                <MainContent token={token} setToken={setToken} tokenLocalStorage={tokenLocalStorage} />
            </div> 
            :
            <div className="grid grid-rows-2 grid-flow-col gap-2 px-2 pt-2">
                <ContentLeftOne/>
                <ContentLeftTwo/>
                <MainContent token={token} setToken={setToken} tokenLocalStorage={tokenLocalStorage} />
            </div>
            }
        </div>
        </>
    )
}

export default Home