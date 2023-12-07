import React from "react"
import { useSelector } from "react-redux"
import LandingPage from "./LandingPage"
import ContentHome from "../components/Section/ContentHome"
import ContentCollect from "../components/Section/ContentCollect"
import MainContent from "../components/Section/MainContent"

const Home = () =>{

    const {token} = useSelector((state) => state.auth)
    return(
        <>
        {!token ? 
        <div className="bg-black h-screen">
            <div className="grid grid-rows-1 px-2 pt-20">
                <LandingPage />
            </div> 
        </div> 
        :
        <div className="bg-black h-full">
            <div className="grid grid-rows-9 grid-flow-col gap-2 px-2 pt-2">
                <ContentHome />
                <ContentCollect/>
                <MainContent/>
            </div>
        </div>
        }
        </>
    )
}

export default Home