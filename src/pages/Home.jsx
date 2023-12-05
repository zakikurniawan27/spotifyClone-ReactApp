import React from "react"
import { useSelector } from "react-redux"
import LandingPage from "./LandingPage"
import SectionLeftOne from "../components/Content/SectionLeftOne"
import SectionMain from "../components/Content/SectionMain"
import SectionLeftTwo from "../components/Content/SectionLeftTwo"

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
                <SectionLeftOne/>
                <SectionLeftTwo/>
                <SectionMain/>
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
                <SectionLeftOne/>
                <SectionLeftTwo/>
                <SectionMain/>
            </div>
            }
        </div>
        }
        </>
    )
}

export default Home