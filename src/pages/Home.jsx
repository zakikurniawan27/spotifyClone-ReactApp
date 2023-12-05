import React from "react"
import ContentLeftOne from "../components/Content/ContentLeftOne"
import ContentLeftTwo from "../components/Content/ContentLeftTwo"
import MainContent from "../components/Content/MainContent"
import { useSelector } from "react-redux"
import LandingPage from "./LandingPage"

const Home = () =>{

    const {token} = useSelector((state) => state.auth)
    return(
        <>
        {!token ? 
        <div className="bg-black h-screen">
            {!token ? 
            <div className="grid grid-rows-1 px-2 pt-20">
                <LandingPage />
            </div> 
            :
            <div className="grid grid-rows-6 grid-flow-col auto-cols-auto gap-2 px-2 pt-2">
                <ContentLeftOne/>
                <ContentLeftTwo/>
                <MainContent />
            </div>
            }
        </div> 
        :
        <div className="bg-black h-full">
            {!token ? 
            <div className="grid grid-rows-1 px-2 pt-20">
                <LandingPage />
            </div> 
            :
            <div className="grid grid-rows-6 grid-flow-col auto-cols-auto gap-2 px-2 pt-2">
                <ContentLeftOne/>
                <ContentLeftTwo/>
                <MainContent />
            </div>
            }
        </div>
        }
        </>
    )
}

export default Home