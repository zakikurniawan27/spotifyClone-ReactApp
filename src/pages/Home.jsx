import React from "react"
import ContentLeftOne from "../components/Content/ContentLeftOne"
import ContentLeftTwo from "../components/Content/ContentLeftTwo"
import MainContent from "../components/Content/MainContent"
import { useSelector } from "react-redux"

const Home = () =>{

    const {token} = useSelector((state) => state.auth)
    return(
        <>
        <div className="bg-black h-screen">
            {!token ? 
            <div className="grid grid-rows-1 px-2 pt-20">
                <MainContent />
            </div> 
            :
            <div className="grid grid-rows-2 grid-flow-col gap-2 px-2 pt-2">
                <ContentLeftOne/>
                <ContentLeftTwo/>
                <MainContent />
            </div>
            }
        </div>
        </>
    )
}

export default Home